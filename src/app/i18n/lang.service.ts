import { Injectable, signal } from '@angular/core';

export type Lang = 'pt' | 'en';

const STORAGE_KEY = 'portfolio-lang';

function detectInitialLang(): Lang {
  if (typeof window === 'undefined') {
    return 'pt';
  }

  const stored = window.localStorage.getItem(STORAGE_KEY);
  if (stored === 'pt' || stored === 'en') {
    return stored;
  }

  return navigator.language?.toLowerCase().startsWith('pt') ? 'pt' : 'en';
}

@Injectable({ providedIn: 'root' })
export class LangService {
  readonly lang = signal<Lang>(detectInitialLang());

  toggle(): void {
    this.set(this.lang() === 'pt' ? 'en' : 'pt');
  }

  set(value: Lang): void {
    this.lang.set(value);
    if (typeof window !== 'undefined') {
      window.localStorage.setItem(STORAGE_KEY, value);
    }
  }
}
