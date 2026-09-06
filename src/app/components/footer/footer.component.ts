import { Component, computed, inject } from '@angular/core';
import { CONTENT } from '../../data/content';
import { LangService } from '../../i18n/lang.service';

@Component({
  selector: 'app-footer',
  standalone: true,
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss',
})
export class FooterComponent {
  private readonly langService = inject(LangService);
  protected readonly content = computed(() => CONTENT[this.langService.lang()]);
  protected readonly year = new Date().getFullYear();
}
