import { Component } from '@angular/core';
import { AnimateOnScrollDirective } from '../../directives/animate-on-scroll.directive';

@Component({
  selector: 'app-cta-section',
  standalone: true,
  imports: [AnimateOnScrollDirective],
  template: `
    <section class="cta-wrap">
      <div class="cta-section">
        <div class="cta-bg-text" aria-hidden="true">ENGLISH</div>
        <div class="cta-noise"></div>

        <div class="cta-inner container">
          <div class="cta-top reveal" animateOnScroll>
            <span class="label-text cta-label">The Next Step</span>
          </div>
          <h2 class="display-heading cta-heading reveal reveal-delay-1" animateOnScroll>
            Ready to finally speak<br>English <em>confidently?</em>
          </h2>
          <p class="body-text cta-sub reveal reveal-delay-2" animateOnScroll>
            One free class. No commitment. Just a conversation — the kind that changes things.
          </p>
          <div class="cta-actions reveal reveal-delay-3" animateOnScroll>
            <a href="#contact" class="btn-primary cta-btn-main">
              Book Free Class
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
            </a>
            <a href="#contact" class="btn-secondary">
              Schedule a Call
            </a>
          </div>
        </div>

        <!-- Decorative lines -->
        <div class="deco-line deco-line-1"></div>
        <div class="deco-line deco-line-2"></div>
      </div>
    </section>
  `,
  styles: [`
    .cta-wrap {
      background: var(--navy);
    }

    .cta-section {
      position: relative;
      overflow: hidden;
      background: var(--navy-mid);
      clip-path: polygon(0 8%, 100% 0, 100% 92%, 0 100%);
      padding: 10rem 0;
    }

    .cta-bg-text {
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      font-family: var(--font-display);
      font-size: clamp(8rem, 18vw, 22rem);
      font-weight: 700;
      color: rgba(240, 239, 233, 0.025);
      white-space: nowrap;
      pointer-events: none;
      user-select: none;
      letter-spacing: -0.05em;
    }

    .cta-noise {
      position: absolute;
      inset: 0;
      background: radial-gradient(ellipse at 30% 50%, rgba(215, 38, 56, 0.06) 0%, transparent 60%),
                  radial-gradient(ellipse at 70% 50%, rgba(215, 38, 56, 0.04) 0%, transparent 50%);
      pointer-events: none;
    }

    .cta-inner {
      position: relative;
      z-index: 1;
      text-align: center;
      display: flex;
      flex-direction: column;
      align-items: center;
    }

    .cta-label { margin-bottom: 1.25rem; display: block; }

    .cta-heading {
      font-size: clamp(2.8rem, 6vw, 5rem);
      color: var(--cream);
      line-height: 1.1;
      margin-bottom: 1.5rem;
    }
    .cta-heading em {
      font-style: italic;
      font-weight: 300;
      color: var(--red);
    }

    .cta-sub {
      max-width: 440px;
      margin-bottom: 2.5rem;
      font-size: 1.05rem;
    }

    .cta-actions {
      display: flex;
      gap: 1rem;
      flex-wrap: wrap;
      justify-content: center;
    }

    .cta-btn-main { font-size: 0.85rem; padding: 1rem 2.4rem; }

    /* Decorative corner lines */
    .deco-line {
      position: absolute;
      background: var(--border);
    }
    .deco-line-1 {
      top: 15%;
      left: 5%;
      width: 120px;
      height: 1px;
      transform: rotate(-30deg);
    }
    .deco-line-2 {
      bottom: 15%;
      right: 5%;
      width: 80px;
      height: 1px;
      transform: rotate(-30deg);
    }

    @media (max-width: 768px) {
      .cta-section { clip-path: polygon(0 4%, 100% 0, 100% 96%, 0 100%); padding: 7rem 0; }
    }
  `],
})
export class CtaSectionComponent {}
