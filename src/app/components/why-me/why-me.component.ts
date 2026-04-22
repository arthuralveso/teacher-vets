import { Component } from '@angular/core';
import { AnimateOnScrollDirective } from '../../directives/animate-on-scroll.directive';

@Component({
  selector: 'app-why-me',
  standalone: true,
  imports: [AnimateOnScrollDirective],
  template: `
    <section class="why-section section-pad" id="about">
      <div class="why-inner">
        <!-- Left: Visual Panel -->
        <div class="why-visual reveal" animateOnScroll>
          <div class="visual-bg"></div>
          <div class="visual-card">
            <div class="vc-accent-line"></div>
            <span class="label-text">Why It Works</span>
            <blockquote class="vc-quote display-heading">
              "Language is confidence. Confidence is earned."
            </blockquote>
            <div class="vc-divider"></div>
            <div class="vc-credentials">
              <div class="cred-item">
                <span class="cred-num">7+</span>
                <span class="cred-label">Years Teaching</span>
              </div>
              <div class="cred-item">
                <span class="cred-num">4</span>
                <span class="cred-label">Countries Taught</span>
              </div>
              <div class="cred-item">
                <span class="cred-num">B2–C2</span>
                <span class="cred-label">Levels Covered</span>
              </div>
            </div>
          </div>
          <!-- Decorative overlapping frame -->
          <div class="visual-frame-deco"></div>
          <div class="visual-dot-accent"></div>
        </div>

        <!-- Right: Content -->
        <div class="why-content">
          <div class="reveal" animateOnScroll>
            <span class="label-text">About the Method</span>
            <h2 class="display-heading why-heading">
              Teaching English<br>the way your<br>brain <em>actually</em> learns.
            </h2>
          </div>

          <p class="body-text why-intro reveal reveal-delay-2" animateOnScroll>
            Most English courses teach you what to say. I teach you how to think in English.
            The difference is fluency you can actually use under pressure.
          </p>

          <ul class="why-list">
            @for (point of points; track point.title; let i = $index) {
              <li [class]="'why-item reveal reveal-delay-' + (i + 2)" animateOnScroll>
                <div class="item-marker">
                  <div class="marker-line"></div>
                </div>
                <div class="item-content">
                  <h4 class="item-title">{{ point.title }}</h4>
                  <p class="item-desc body-text">{{ point.desc }}</p>
                </div>
              </li>
            }
          </ul>

          <div class="reveal reveal-delay-5" animateOnScroll>
            <a href="#contact" class="btn-primary why-cta">
              Start Your Journey
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
            </a>
          </div>
        </div>
      </div>
    </section>
  `,
  styles: [`
    .why-section {
      background: var(--navy);
      position: relative;
      overflow: hidden;
    }

    /* Subtle diagonal accent behind the section */
    .why-section::before {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      height: 4px;
      background: linear-gradient(90deg, var(--red) 0%, transparent 60%);
    }

    .why-inner {
      max-width: 1200px;
      margin: 0 auto;
      padding: 0 2rem;
      display: grid;
      grid-template-columns: 5fr 7fr;
      gap: 5rem;
      align-items: start;
    }

    /* ── Visual ─────────────────────────────────────────── */
    .why-visual {
      position: relative;
      height: 480px;
    }

    .visual-bg {
      position: absolute;
      inset: 0;
      background: var(--navy-mid);
      border: 1px solid var(--border);
    }

    .visual-card {
      position: absolute;
      inset: 1.5rem;
      padding: 2.25rem;
      display: flex;
      flex-direction: column;
    }

    .vc-accent-line {
      width: 40px;
      height: 2px;
      background: var(--red);
      margin-bottom: 1rem;
    }

    .vc-quote {
      font-size: 1.65rem;
      font-style: italic;
      font-weight: 400;
      color: var(--cream);
      line-height: 1.35;
      margin-top: 0.75rem;
      flex: 1;
    }

    .vc-divider {
      height: 1px;
      background: var(--border);
      margin: 1.5rem 0;
    }

    .vc-credentials {
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      gap: 0.5rem;
    }
    .cred-item { display: flex; flex-direction: column; gap: 0.2rem; }
    .cred-num {
      font-family: var(--font-display);
      font-size: 1.8rem;
      font-weight: 600;
      color: var(--cream);
      line-height: 1;
    }
    .cred-label {
      font-size: 0.65rem;
      font-weight: 600;
      letter-spacing: 0.1em;
      text-transform: uppercase;
      color: var(--muted);
    }

    .visual-frame-deco {
      position: absolute;
      bottom: -16px;
      right: -16px;
      width: 60%;
      height: 50%;
      border: 1px solid rgba(215, 38, 56, 0.2);
      pointer-events: none;
    }

    .visual-dot-accent {
      position: absolute;
      top: -20px;
      left: -20px;
      width: 80px;
      height: 80px;
      background-image: radial-gradient(circle, rgba(240,239,233,0.2) 1.5px, transparent 1.5px);
      background-size: 12px 12px;
      pointer-events: none;
    }

    /* ── Content ────────────────────────────────────────── */
    .why-content { padding-top: 0.5rem; }

    .why-heading {
      font-size: clamp(2.2rem, 4vw, 3.5rem);
      color: var(--cream);
      margin: 1rem 0 1.75rem;
      line-height: 1.1;
    }
    .why-heading em {
      font-style: italic;
      font-weight: 300;
      color: var(--red);
    }

    .why-intro {
      margin-bottom: 2.5rem;
      font-size: 1.05rem;
    }

    .why-list {
      list-style: none;
      display: flex;
      flex-direction: column;
      gap: 0;
      margin-bottom: 2.5rem;
    }

    .why-item {
      display: flex;
      gap: 1.25rem;
      padding: 1.25rem 0;
      border-bottom: 1px solid var(--border);
    }
    .why-item:first-child { border-top: 1px solid var(--border); }

    .item-marker {
      display: flex;
      flex-direction: column;
      align-items: center;
      padding-top: 0.45rem;
      flex-shrink: 0;
      width: 20px;
    }
    .marker-line {
      width: 2px;
      height: 100%;
      min-height: 40px;
      background: linear-gradient(to bottom, var(--red), transparent);
    }

    .item-content { flex: 1; }
    .item-title {
      font-family: var(--font-ui);
      font-size: 0.92rem;
      font-weight: 700;
      letter-spacing: 0.03em;
      color: var(--cream);
      margin-bottom: 0.4rem;
    }
    .item-desc { font-size: 0.88rem; }

    .why-cta { margin-top: 0.5rem; }

    @media (max-width: 900px) {
      .why-inner { grid-template-columns: 1fr; gap: 3rem; }
      .why-visual { height: 320px; }
    }
  `],
})
export class WhyMeComponent {
  points = [
    {
      title: 'Real-World Practice from Day One',
      desc: 'Every lesson uses authentic material — podcasts, news, business scenarios, and live conversation — not textbook exercises.',
    },
    {
      title: 'Deeply Personalized Lessons',
      desc: 'Your learning plan is built around your specific goals, schedule, and gaps. No two students follow the same path.',
    },
    {
      title: 'Confidence as the Core Metric',
      desc: 'Progress is measured not just in test scores but in your ability to think and speak without hesitation.',
    },
    {
      title: 'Interview & Professional Preparation',
      desc: 'Specialized focus for professionals navigating international work environments, visa interviews, or career transitions.',
    },
  ];
}
