import { Component, HostListener, computed, inject, signal } from '@angular/core';
import { CONTENT } from '../../data/content';
import { LangService } from '../../i18n/lang.service';

@Component({
  selector: 'app-navbar',
  standalone: true,
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss',
})
export class NavbarComponent {
  protected readonly langService = inject(LangService);
  protected readonly content = computed(() => CONTENT[this.langService.lang()]);

  protected readonly scrolled = signal(false);
  protected readonly menuOpen = signal(false);

  @HostListener('window:scroll')
  onScroll(): void {
    this.scrolled.set(window.scrollY > 8);
  }

  toggleMenu(): void {
    this.menuOpen.update((open) => !open);
  }

  closeMenu(): void {
    this.menuOpen.set(false);
  }

  toggleLang(): void {
    this.langService.toggle();
  }
}
