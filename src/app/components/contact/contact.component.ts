import { Component, computed, inject } from '@angular/core';
import { RevealDirective } from '../../directives/reveal.directive';
import { CONTENT } from '../../data/content';
import { LangService } from '../../i18n/lang.service';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [RevealDirective],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss',
})
export class ContactComponent {
  private readonly langService = inject(LangService);
  protected readonly content = computed(() => CONTENT[this.langService.lang()]);
}
