import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NavbarComponent } from './navbar.component';
import { LangService } from '../../i18n/lang.service';
import { CONTENT } from '../../data/content';

describe('NavbarComponent', () => {
  let fixture: ComponentFixture<NavbarComponent>;
  let component: NavbarComponent;
  let langService: LangService;

  beforeEach(() => {
    TestBed.configureTestingModule({ imports: [NavbarComponent] });
    fixture = TestBed.createComponent(NavbarComponent);
    component = fixture.componentInstance;
    langService = TestBed.inject(LangService);
    langService.set('pt');
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('renders one link per navLinks entry for the active language', () => {
    const links: NodeListOf<HTMLAnchorElement> = fixture.nativeElement.querySelectorAll('.nav__links a');
    expect(links.length).toBe(CONTENT['pt'].ui.navLinks.length);
    expect(links[0].textContent?.trim()).toBe(CONTENT['pt'].ui.navLinks[0].label);
  });

  it('re-renders link labels in English after toggling the language', () => {
    component.toggleLang();
    fixture.detectChanges();

    const links: NodeListOf<HTMLAnchorElement> = fixture.nativeElement.querySelectorAll('.nav__links a');
    expect(links[0].textContent?.trim()).toBe(CONTENT['en'].ui.navLinks[0].label);
  });

  it('opens and closes the mobile menu', () => {
    const nav = component as unknown as { menuOpen: () => boolean };
    expect(nav.menuOpen()).toBeFalse();

    component.toggleMenu();
    expect(nav.menuOpen()).toBeTrue();

    component.closeMenu();
    expect(nav.menuOpen()).toBeFalse();
  });

  it('marks the nav as scrolled once the page scrolls past the threshold', () => {
    Object.defineProperty(window, 'scrollY', { value: 20, configurable: true });
    component.onScroll();
    const nav = component as unknown as { scrolled: () => boolean };
    expect(nav.scrolled()).toBeTrue();
  });
});
