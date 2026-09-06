import { Component, computed, inject } from '@angular/core';
import { RevealDirective } from '../../directives/reveal.directive';
import { CONTENT } from '../../data/content';
import { LangService } from '../../i18n/lang.service';

@Component({
  selector: 'app-skills',
  standalone: true,
  imports: [RevealDirective],
  templateUrl: './skills.component.html',
  styleUrl: './skills.component.scss',
})
export class SkillsComponent {
  private readonly langService = inject(LangService);
  protected readonly content = computed(() => CONTENT[this.langService.lang()]);
}
