import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AboutComponent } from './about.component';
import { LangService } from '../../i18n/lang.service';
import { CONTENT } from '../../data/content';

describe('AboutComponent', () => {
  let fixture: ComponentFixture<AboutComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({ imports: [AboutComponent] });
    fixture = TestBed.createComponent(AboutComponent);
    TestBed.inject(LangService).set('pt');
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(fixture.componentInstance).toBeTruthy();
  });

  it('renders one stat block per stats entry', () => {
    const stats = fixture.nativeElement.querySelectorAll('.stat');
    expect(stats.length).toBe(CONTENT.pt.stats.length);
  });

  it('renders one highlight card per highlights entry', () => {
    const cards = fixture.nativeElement.querySelectorAll('.highlight-card');
    expect(cards.length).toBe(CONTENT.pt.highlights.length);
    expect(cards[0].querySelector('h4').textContent).toBe(CONTENT.pt.highlights[0].title);
  });
});
