import { Component, computed, inject } from '@angular/core';
import { CONTENT } from '../../data/content';
import { LangService } from '../../i18n/lang.service';

@Component({
  selector: 'app-hero',
  standalone: true,
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.scss',
})
export class HeroComponent {
  private readonly langService = inject(LangService);
  protected readonly content = computed(() => CONTENT[this.langService.lang()]);
}
