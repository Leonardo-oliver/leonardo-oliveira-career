import { AfterViewInit, Directive, ElementRef, OnDestroy, inject } from '@angular/core';

/**
 * Adds the `is-visible` class the first time the host element enters the
 * viewport, then disconnects. Pairs with the `.reveal` CSS class in
 * styles.scss for a single, restrained fade-up moment per section —
 * not scattered per-card entrance animation.
 */
@Directive({
  selector: '[appReveal]',
  standalone: true,
})
export class RevealDirective implements AfterViewInit, OnDestroy {
  private readonly el = inject(ElementRef<HTMLElement>);
  private observer?: IntersectionObserver;

  ngAfterViewInit(): void {
    this.el.nativeElement.classList.add('reveal');

    if (typeof IntersectionObserver === 'undefined') {
      this.el.nativeElement.classList.add('is-visible');
      return;
    }

    this.observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            this.el.nativeElement.classList.add('is-visible');
            this.observer?.disconnect();
          }
        }
      },
      { threshold: 0.18 },
    );

    this.observer.observe(this.el.nativeElement);
  }

  ngOnDestroy(): void {
    this.observer?.disconnect();
  }
}
