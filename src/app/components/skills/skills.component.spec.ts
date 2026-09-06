import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SkillsComponent } from './skills.component';
import { LangService } from '../../i18n/lang.service';
import { CONTENT } from '../../data/content';

describe('SkillsComponent', () => {
  let fixture: ComponentFixture<SkillsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({ imports: [SkillsComponent] });
    fixture = TestBed.createComponent(SkillsComponent);
    TestBed.inject(LangService).set('pt');
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(fixture.componentInstance).toBeTruthy();
  });

  it('renders one group per skillGroups entry', () => {
    const groups = fixture.nativeElement.querySelectorAll('.skills__group');
    expect(groups.length).toBe(CONTENT.pt.skillGroups.length);
  });

  it('renders every tag inside the first group', () => {
    const tags = fixture.nativeElement.querySelectorAll('.skills__group:first-child .skills__tags span');
    expect(tags.length).toBe(CONTENT.pt.skillGroups[0].items.length);
  });
});
