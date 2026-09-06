import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ExperienceComponent } from './experience.component';
import { LangService } from '../../i18n/lang.service';
import { CONTENT } from '../../data/content';

describe('ExperienceComponent', () => {
  let fixture: ComponentFixture<ExperienceComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({ imports: [ExperienceComponent] });
    fixture = TestBed.createComponent(ExperienceComponent);
    TestBed.inject(LangService).set('pt');
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(fixture.componentInstance).toBeTruthy();
  });

  it('renders one timeline card per experience entry', () => {
    const items = fixture.nativeElement.querySelectorAll('.timeline__item');
    expect(items.length).toBe(CONTENT.pt.experiences.length);
  });

  it('renders the most recent role first', () => {
    const firstCompany = fixture.nativeElement.querySelector('.timeline__company');
    expect(firstCompany.textContent.trim()).toBe(CONTENT.pt.experiences[0].company);
  });

  it('renders every tech-stack chip for the first job', () => {
    const chips = fixture.nativeElement.querySelectorAll('.timeline__item:first-child .chip');
    expect(chips.length).toBe(CONTENT.pt.experiences[0].stack.length);
  });
});
