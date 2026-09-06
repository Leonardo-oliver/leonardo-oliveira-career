import { ComponentFixture, TestBed } from '@angular/core/testing';
import { EducationComponent } from './education.component';
import { LangService } from '../../i18n/lang.service';
import { CONTENT } from '../../data/content';

describe('EducationComponent', () => {
  let fixture: ComponentFixture<EducationComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({ imports: [EducationComponent] });
    fixture = TestBed.createComponent(EducationComponent);
    TestBed.inject(LangService).set('pt');
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(fixture.componentInstance).toBeTruthy();
  });

  it('renders one card per education entry', () => {
    const items = fixture.nativeElement.querySelectorAll('.education__item');
    expect(items.length).toBe(CONTENT.pt.education.length);
    expect(items[0].querySelector('.education__school').textContent).toBe(CONTENT.pt.education[0].school);
  });
});
