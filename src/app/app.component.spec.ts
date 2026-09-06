import { TestBed } from '@angular/core/testing';
import { AppComponent } from './app.component';

describe('AppComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({ imports: [AppComponent] }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    expect(fixture.componentInstance).toBeTruthy();
  });

  it('renders the navbar, every content section, and the footer', () => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const el: HTMLElement = fixture.nativeElement;

    const expectedTags = [
      'app-navbar',
      'app-hero',
      'app-about',
      'app-experience',
      'app-skills',
      'app-education',
      'app-contact',
      'app-footer',
    ];

    for (const tag of expectedTags) {
      expect(el.querySelector(tag)).withContext(`missing <${tag}>`).not.toBeNull();
    }
  });
});
