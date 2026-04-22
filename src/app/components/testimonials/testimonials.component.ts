import { Component } from '@angular/core';
import { AnimateOnScrollDirective } from '../../directives/animate-on-scroll.directive';

interface Testimonial {
  id: string;
  name: string;
  role: string;
  company: string;
  quote: string;
  linkedIn: string;
  initial: string;
}

@Component({
  selector: 'app-testimonials',
  standalone: true,
  imports: [AnimateOnScrollDirective],
  template: `
    <section class="testimonials-section section-pad" id="testimonials">
      <div class="container">
        <div class="section-header reveal" animateOnScroll>
          <span class="label-text">Student Results</span>
          <h2 class="display-heading section-title">
            Real people.<br><em>Real progress.</em>
          </h2>
        </div>

        <div class="testimonials-grid">
          @for (t of testimonials; track t.id; let i = $index) {
            <a
              [href]="t.linkedIn"
              target="_blank"
              rel="noopener noreferrer"
              [class]="'tcard reveal reveal-delay-' + (i + 1)"
              animateOnScroll
            >
              <div class="tcard-inner">
                <div class="quote-mark">"</div>
                <p class="tcard-quote">{{ t.quote }}</p>
                <div class="tcard-footer">
                  <div class="avatar">{{ t.initial }}</div>
                  <div class="person-info">
                    <span class="person-name">{{ t.name }}</span>
                    <span class="person-role">{{ t.role }} · {{ t.company }}</span>
                  </div>
                  <div class="linkedin-icon">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
                  </div>
                </div>
              </div>
              <div class="tcard-accent"></div>
            </a>
          }
        </div>

        <div class="trust-bar reveal reveal-delay-3" animateOnScroll>
          <span class="trust-label">Taught students from</span>
          <div class="trust-countries">
            @for (country of countries; track country) {
              <span class="country-tag">{{ country }}</span>
            }
          </div>
        </div>
      </div>
    </section>
  `,
  styles: [`
    .testimonials-section {
      background: var(--navy-mid);
      position: relative;
    }

    .section-header {
      max-width: 480px;
      margin-bottom: 4rem;
    }
    .section-header .label-text { display: block; margin-bottom: 1rem; }
    .section-title {
      font-size: clamp(2.2rem, 4vw, 3.5rem);
      color: var(--cream);
      line-height: 1.1;
    }
    .section-title em { font-style: italic; font-weight: 300; color: var(--cream-dim); }

    .testimonials-grid {
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      gap: 1.5px;
      margin-bottom: 4rem;
    }

    .tcard {
      display: block;
      text-decoration: none;
      position: relative;
      background: var(--navy);
      border: 1px solid var(--border);
      overflow: hidden;
      transition: border-color 0.3s ease, transform 0.3s ease;
      cursor: pointer;
    }
    .tcard:hover {
      border-color: rgba(240, 239, 233, 0.2);
      transform: translateY(-4px);
      z-index: 1;
    }
    .tcard:hover .tcard-accent { transform: scaleX(1); }
    .tcard:hover .linkedin-icon { color: var(--cream); }

    .tcard-inner { padding: 2.25rem; display: flex; flex-direction: column; gap: 1.5rem; }

    .quote-mark {
      font-family: var(--font-display);
      font-size: 4rem;
      line-height: 0.6;
      color: var(--red);
      opacity: 0.6;
      font-weight: 700;
    }

    .tcard-quote {
      font-family: var(--font-display);
      font-size: 1.2rem;
      font-style: italic;
      font-weight: 400;
      line-height: 1.6;
      color: var(--cream);
      flex: 1;
    }

    .tcard-footer {
      display: flex;
      align-items: center;
      gap: 0.85rem;
      padding-top: 1.25rem;
      border-top: 1px solid var(--border);
    }

    .avatar {
      width: 38px;
      height: 38px;
      background: var(--navy-light);
      border: 1px solid var(--border);
      display: flex;
      align-items: center;
      justify-content: center;
      font-family: var(--font-display);
      font-size: 1.1rem;
      font-weight: 600;
      color: var(--cream);
      flex-shrink: 0;
    }

    .person-info {
      display: flex;
      flex-direction: column;
      gap: 0.15rem;
      flex: 1;
    }
    .person-name {
      font-size: 0.82rem;
      font-weight: 700;
      color: var(--cream);
      letter-spacing: 0.04em;
    }
    .person-role {
      font-size: 0.68rem;
      color: var(--muted);
      letter-spacing: 0.06em;
    }

    .linkedin-icon {
      color: var(--muted);
      transition: color 0.25s ease;
      flex-shrink: 0;
    }

    .tcard-accent {
      position: absolute;
      bottom: 0;
      left: 0;
      right: 0;
      height: 2px;
      background: var(--red);
      transform: scaleX(0);
      transform-origin: left;
      transition: transform 0.4s ease;
    }

    /* Trust Bar */
    .trust-bar {
      display: flex;
      align-items: center;
      gap: 1.5rem;
      padding: 1.5rem 0;
      border-top: 1px solid var(--border);
      flex-wrap: wrap;
    }
    .trust-label {
      font-size: 0.68rem;
      font-weight: 600;
      letter-spacing: 0.14em;
      text-transform: uppercase;
      color: var(--muted);
      white-space: nowrap;
    }
    .trust-countries { display: flex; gap: 0.5rem; flex-wrap: wrap; }
    .country-tag {
      font-size: 0.68rem;
      font-weight: 600;
      letter-spacing: 0.08em;
      color: var(--cream-dim);
      padding: 0.25rem 0.6rem;
      border: 1px solid var(--border);
    }

    @media (max-width: 900px) {
      .testimonials-grid { grid-template-columns: 1fr; }
      .tcard:hover { transform: none; }
    }
  `],
})
export class TestimonialsComponent {
  testimonials: Testimonial[] = [
    {
      id: 't1',
      name: 'Mariana Costa',
      role: 'Product Designer',
      company: 'Berlin Studio',
      initial: 'M',
      linkedIn: '#',
      quote:
        'I failed my first English interview at a German company. After 3 months with Teacher Vets, I had the confidence to express complex ideas without freezing up. I got the job.',
    },
    {
      id: 't2',
      name: 'Carlos Almeida',
      role: 'Software Engineer',
      company: 'Remote / US',
      initial: 'C',
      linkedIn: '#',
      quote:
        'The mock interview sessions were unlike anything I had tried before. Real pressure, real feedback. My English went from functional to professional in 8 weeks.',
    },
    {
      id: 't3',
      name: 'Fernanda Ribeiro',
      role: 'Academic Researcher',
      company: 'University of Porto',
      initial: 'F',
      linkedIn: '#',
      quote:
        "I needed to present my research at an international conference. The preparation was methodical, patient, and effective. I received compliments on my fluency from native speakers.",
    },
  ];

  countries = ['Brazil', 'Portugal', 'Spain', 'Italy', 'France', 'Germany', 'Japan'];
}
