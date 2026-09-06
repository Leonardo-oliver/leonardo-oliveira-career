import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ContactComponent } from './contact.component';
import { LangService } from '../../i18n/lang.service';
import { CONTENT } from '../../data/content';

describe('ContactComponent', () => {
  let fixture: ComponentFixture<ContactComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({ imports: [ContactComponent] });
    fixture = TestBed.createComponent(ContactComponent);
    TestBed.inject(LangService).set('pt');
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(fixture.componentInstance).toBeTruthy();
  });

  it('links the primary CTA to a mailto: with the profile email', () => {
    const link: HTMLAnchorElement = fixture.nativeElement.querySelector('.btn--primary');
    expect(link.getAttribute('href')).toBe(`mailto:${CONTENT.pt.profile.email}`);
    expect(link.textContent?.trim()).toBe(CONTENT.pt.profile.email);
  });

  it('renders the phone and LinkedIn as secondary links', () => {
    const secondary: NodeListOf<HTMLAnchorElement> = fixture.nativeElement.querySelectorAll('.contact__secondary');
    expect(secondary.length).toBe(2);
    expect(secondary[0].getAttribute('href')).toBe(`tel:${CONTENT.pt.profile.phone}`);
    expect(secondary[1].getAttribute('href')).toBe(CONTENT.pt.profile.linkedin);
  });
});
