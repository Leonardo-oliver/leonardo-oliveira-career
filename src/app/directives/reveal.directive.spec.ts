import { Component } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RevealDirective } from './reveal.directive';

class MockIntersectionObserver implements IntersectionObserver {
  static instances: MockIntersectionObserver[] = [];
  readonly root = null;
  readonly rootMargin = '';
  readonly thresholds: ReadonlyArray<number> = [];
  callback: IntersectionObserverCallback;

  constructor(callback: IntersectionObserverCallback) {
    this.callback = callback;
    MockIntersectionObserver.instances.push(this);
  }

  observe(): void {}
  unobserve(): void {}
  disconnect(): void {}
  takeRecords(): IntersectionObserverEntry[] {
    return [];
  }
}

@Component({
  standalone: true,
  imports: [RevealDirective],
  template: `<div appReveal>content</div>`,
})
class HostComponent {}

describe('RevealDirective', () => {
  let fixture: ComponentFixture<HostComponent>;
  let originalIntersectionObserver: typeof IntersectionObserver;

  beforeEach(() => {
    originalIntersectionObserver = window.IntersectionObserver;
    MockIntersectionObserver.instances = [];
    (window as unknown as { IntersectionObserver: typeof IntersectionObserver }).IntersectionObserver =
      MockIntersectionObserver as unknown as typeof IntersectionObserver;

    TestBed.configureTestingModule({ imports: [HostComponent] });
    fixture = TestBed.createComponent(HostComponent);
  });

  afterEach(() => {
    window.IntersectionObserver = originalIntersectionObserver;
  });

  it('adds the "reveal" class as soon as the view initializes', () => {
    fixture.detectChanges();
    const el: HTMLElement = fixture.nativeElement.querySelector('div');
    expect(el.classList.contains('reveal')).toBeTrue();
    expect(el.classList.contains('is-visible')).toBeFalse();
  });

  it('adds "is-visible" once the observer reports the element is intersecting', () => {
    fixture.detectChanges();
    const el: HTMLElement = fixture.nativeElement.querySelector('div');
    const observer = MockIntersectionObserver.instances[0];

    observer.callback(
      [{ isIntersecting: true, target: el } as unknown as IntersectionObserverEntry],
      observer,
    );

    expect(el.classList.contains('is-visible')).toBeTrue();
  });

  it('does not add "is-visible" while the element is not intersecting', () => {
    fixture.detectChanges();
    const el: HTMLElement = fixture.nativeElement.querySelector('div');
    const observer = MockIntersectionObserver.instances[0];

    observer.callback(
      [{ isIntersecting: false, target: el } as unknown as IntersectionObserverEntry],
      observer,
    );

    expect(el.classList.contains('is-visible')).toBeFalse();
  });
});
