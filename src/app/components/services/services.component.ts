import { Component } from '@angular/core';
import { AnimateOnScrollDirective } from '../../directives/animate-on-scroll.directive';

interface Service {
  id: string;
  icon: string;
  title: string;
  description: string;
  tag: string;
}

@Component({
  selector: 'app-services',
  standalone: true,
  imports: [AnimateOnScrollDirective],
  template: `
    <section class="services-section section-pad" id="services">
      <div class="container">
        <div class="section-header" animateOnScroll>
          <span class="label-text">What We Offer</span>
          <h2 class="display-heading section-title">
            Every lesson built<br>
            <em>around you.</em>
          </h2>
          <p class="section-sub body-text">
            No generic textbooks. No wasted time. Each session is designed to move you forward
            in the areas that actually matter to your goals.
          </p>
        </div>

        <div class="services-grid">
          @for (service of services; track service.id; let i = $index) {
            <div class="service-card reveal reveal-delay-{{ i + 1 }}" animateOnScroll>
              <div class="card-top">
                <div class="card-icon" [innerHTML]="service.icon"></div>
                <span class="card-tag">{{ service.tag }}</span>
              </div>
              <h3 class="card-title display-heading">{{ service.title }}</h3>
              <p class="card-desc body-text">{{ service.description }}</p>
              <div class="card-cta">
                <a href="#contact" class="card-link">
                  Schedule a Call
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
                </a>
              </div>
              <div class="card-number">0{{ i + 1 }}</div>
            </div>
          }
        </div>
      </div>
    </section>
  `,
  styles: [`
    .services-section {
      background: var(--navy-mid);
      position: relative;
    }

    .section-header {
      max-width: 520px;
      margin-bottom: 4.5rem;
    }
    .section-header .label-text { display: block; margin-bottom: 1rem; }
    .section-title {
      font-size: clamp(2.4rem, 4.5vw, 3.8rem);
      color: var(--cream);
      margin-bottom: 1.25rem;
      line-height: 1.1;
    }
    .section-title em {
      font-style: italic;
      font-weight: 300;
      color: var(--cream-dim);
    }
    .section-sub { max-width: 400px; }

    .services-grid {
      display: grid;
      grid-template-columns: repeat(4, 1fr);
      gap: 1.5px;
      position: relative;
    }

    /* Stagger: card 2 pulled up, card 4 pushed down */
    .service-card:nth-child(2) { transform: translateY(-24px) !important; }
    .service-card:nth-child(4) { transform: translateY(24px) !important; }
    .service-card:nth-child(2).visible { transform: translateY(-24px) !important; }
    .service-card:nth-child(4).visible { transform: translateY(24px) !important; }

    .service-card {
      background: var(--navy);
      border: 1px solid var(--border);
      padding: 2.25rem 1.75rem;
      position: relative;
      overflow: hidden;
      transition: border-color 0.3s ease, transform 0.3s ease, box-shadow 0.3s ease;
      cursor: default;
    }
    .service-card::before {
      content: '';
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
    .service-card:hover { border-color: rgba(240,239,233,0.18); box-shadow: 0 20px 60px rgba(0,0,0,0.3); }
    .service-card:hover::before { transform: scaleX(1); }

    .card-top {
      display: flex;
      align-items: flex-start;
      justify-content: space-between;
      margin-bottom: 1.5rem;
    }
    .card-icon {
      width: 44px;
      height: 44px;
      display: flex;
      align-items: center;
      justify-content: center;
      color: var(--cream);
    }
    .card-tag {
      font-size: 0.6rem;
      font-weight: 700;
      letter-spacing: 0.15em;
      text-transform: uppercase;
      color: var(--red);
      padding: 0.25rem 0.5rem;
      border: 1px solid rgba(215, 38, 56, 0.3);
      background: rgba(215, 38, 56, 0.08);
    }

    .card-title {
      font-size: 1.55rem;
      color: var(--cream);
      margin-bottom: 0.85rem;
      line-height: 1.2;
    }
    .card-desc {
      font-size: 0.875rem;
      line-height: 1.7;
      margin-bottom: 1.75rem;
    }

    .card-cta { margin-top: auto; }
    .card-link {
      display: inline-flex;
      align-items: center;
      gap: 0.4rem;
      font-size: 0.72rem;
      font-weight: 700;
      letter-spacing: 0.14em;
      text-transform: uppercase;
      color: var(--muted);
      text-decoration: none;
      transition: color 0.25s ease;
    }
    .card-link:hover { color: var(--cream); }

    .card-number {
      position: absolute;
      top: 1.5rem;
      right: 1.5rem;
      font-family: var(--font-display);
      font-size: 4rem;
      font-weight: 700;
      color: rgba(240, 239, 233, 0.04);
      line-height: 1;
      pointer-events: none;
      user-select: none;
    }

    @media (max-width: 1000px) {
      .services-grid { grid-template-columns: repeat(2, 1fr); }
      .service-card:nth-child(2),
      .service-card:nth-child(4) { transform: translateY(0) !important; }
    }
    @media (max-width: 600px) {
      .services-grid { grid-template-columns: 1fr; }
    }
  `],
})
export class ServicesComponent {
  services: Service[] = [
    {
      id: 'reading',
      tag: 'Foundation',
      icon: `<svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"/><path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"/></svg>`,
      title: 'Reading & Grammar',
      description:
        'Build an unshakeable grammatical foundation. From sentence structure to nuanced written expression — clarity with precision.',
    },
    {
      id: 'conversation',
      tag: 'Fluency',
      icon: `<svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/></svg>`,
      title: 'Conversation Practice',
      description:
        'Speak without overthinking. Real-world dialogues, situational practice, and spontaneous discussion to unlock natural flow.',
    },
    {
      id: 'interviews',
      tag: 'Professional',
      icon: `<svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="7" width="20" height="14" rx="2"/><path d="M16 7V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v2"/><line x1="12" y1="12" x2="12" y2="16"/><line x1="10" y1="14" x2="14" y2="14"/></svg>`,
      title: 'Mock Interviews',
      description:
        'Simulate real English-language interviews: behavioral, technical, and case-based. Walk in prepared. Walk out confident.',
    },
    {
      id: 'custom',
      tag: 'Personalized',
      icon: `<svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><circle cx="12" cy="12" r="6"/><circle cx="12" cy="12" r="2"/></svg>`,
      title: 'Custom Learning Plan',
      description:
        'A fully tailored curriculum mapped to your timeline, goals, and weak spots. No two plans are the same — because no two students are.',
    },
  ];
}
