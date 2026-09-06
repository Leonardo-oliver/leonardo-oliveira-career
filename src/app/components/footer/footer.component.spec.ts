import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FooterComponent } from './footer.component';
import { LangService } from '../../i18n/lang.service';
import { CONTENT } from '../../data/content';

describe('FooterComponent', () => {
  let fixture: ComponentFixture<FooterComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({ imports: [FooterComponent] });
    fixture = TestBed.createComponent(FooterComponent);
    TestBed.inject(LangService).set('pt');
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(fixture.componentInstance).toBeTruthy();
  });

  it('renders the current year and the profile name', () => {
    const text: string = fixture.nativeElement.textContent;
    expect(text).toContain(String(new Date().getFullYear()));
    expect(text).toContain(CONTENT.pt.profile.name);
  });
});
