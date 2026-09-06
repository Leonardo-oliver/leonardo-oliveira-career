import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HeroComponent } from './hero.component';
import { LangService } from '../../i18n/lang.service';
import { CONTENT } from '../../data/content';

describe('HeroComponent', () => {
  let fixture: ComponentFixture<HeroComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({ imports: [HeroComponent] });
    fixture = TestBed.createComponent(HeroComponent);
    TestBed.inject(LangService).set('pt');
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(fixture.componentInstance).toBeTruthy();
  });

  it('renders the profile name and role', () => {
    const el: HTMLElement = fixture.nativeElement;
    expect(el.querySelector('.hero__name')?.textContent).toContain(CONTENT.pt.profile.name);
    expect(el.querySelector('.hero__role')?.textContent).toContain(CONTENT.pt.profile.role);
  });

  it('links the primary CTA to the experience section', () => {
    const cta: HTMLAnchorElement | null = fixture.nativeElement.querySelector('.btn--primary');
    expect(cta?.getAttribute('href')).toBe('#experiencia');
  });
});
