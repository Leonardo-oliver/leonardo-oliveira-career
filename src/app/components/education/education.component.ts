import { Component, computed, inject } from '@angular/core';
import { RevealDirective } from '../../directives/reveal.directive';
import { CONTENT } from '../../data/content';
import { LangService } from '../../i18n/lang.service';

@Component({
  selector: 'app-education',
  standalone: true,
  imports: [RevealDirective],
  templateUrl: './education.component.html',
  styleUrl: './education.component.scss',
})
export class EducationComponent {
  private readonly langService = inject(LangService);
  protected readonly content = computed(() => CONTENT[this.langService.lang()]);
}
