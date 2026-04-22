import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  standalone: true,
  template: `
    <footer class="footer">
      <div class="footer-inner container">
        <div class="footer-brand">
          <a href="#" class="logo-wrap">
            <span class="logo-mark">TV</span>
            <span class="logo-text">Teacher Vets</span>
          </a>
          <p class="footer-tagline">
            Speak English with confidence — not fear.
          </p>
        </div>

        <div class="footer-nav">
          <div class="nav-col">
            <span class="nav-col-label">Navigate</span>
            <a href="#services">Services</a>
            <a href="#about">About</a>
            <a href="#testimonials">Testimonials</a>
            <a href="#contact">Contact</a>
          </div>
          <div class="nav-col">
            <span class="nav-col-label">Connect</span>
            <a href="mailto:hello@teachervets.com">Email</a>
            <a href="https://wa.me/5511999999999" target="_blank" rel="noopener noreferrer">WhatsApp</a>
            <a href="https://linkedin.com/in/teachervets" target="_blank" rel="noopener noreferrer">LinkedIn</a>
          </div>
        </div>

        <div class="footer-cta">
          <a href="#contact" class="btn-primary footer-btn">Book Free Class</a>
        </div>
      </div>

      <div class="footer-bottom container">
        <span class="copyright">© 2025 Teacher Vets. All rights reserved.</span>
        <div class="footer-accent-line"></div>
      </div>
    </footer>
  `,
  styles: [`
    .footer {
      background: var(--navy-mid);
      border-top: 1px solid var(--border);
    }

    .footer-inner {
      display: grid;
      grid-template-columns: 2fr 1fr 1fr;
      gap: 4rem;
      padding-top: 4rem;
      padding-bottom: 3rem;
    }

    /* Brand */
    .logo-wrap {
      display: flex;
      align-items: center;
      gap: 0.6rem;
      text-decoration: none;
      margin-bottom: 1rem;
    }
    .logo-mark {
      width: 30px;
      height: 30px;
      background: var(--red);
      display: flex;
      align-items: center;
      justify-content: center;
      font-family: var(--font-display);
      font-size: 0.85rem;
      font-weight: 600;
      color: var(--cream);
    }
    .logo-text {
      font-family: var(--font-ui);
      font-size: 0.85rem;
      font-weight: 700;
      letter-spacing: 0.15em;
      text-transform: uppercase;
      color: var(--cream);
    }
    .footer-tagline {
      font-family: var(--font-display);
      font-size: 1rem;
      font-style: italic;
      color: var(--muted);
      line-height: 1.5;
      max-width: 260px;
    }

    /* Nav */
    .footer-nav {
      display: flex;
      gap: 3rem;
    }
    .nav-col {
      display: flex;
      flex-direction: column;
      gap: 0.75rem;
    }
    .nav-col-label {
      font-size: 0.65rem;
      font-weight: 700;
      letter-spacing: 0.2em;
      text-transform: uppercase;
      color: var(--muted);
      margin-bottom: 0.25rem;
    }
    .nav-col a {
      font-size: 0.85rem;
      color: var(--cream-dim);
      text-decoration: none;
      transition: color 0.25s ease;
    }
    .nav-col a:hover { color: var(--cream); }

    /* CTA column */
    .footer-cta {
      display: flex;
      align-items: flex-start;
      justify-content: flex-end;
    }
    .footer-btn { font-size: 0.72rem; padding: 0.75rem 1.5rem; }

    /* Bottom */
    .footer-bottom {
      padding-top: 1.5rem;
      padding-bottom: 2rem;
      border-top: 1px solid var(--border);
      display: flex;
      align-items: center;
      justify-content: space-between;
      gap: 1rem;
    }
    .copyright {
      font-size: 0.72rem;
      color: var(--muted);
      letter-spacing: 0.06em;
    }
    .footer-accent-line {
      height: 1px;
      width: 60px;
      background: var(--red);
      opacity: 0.4;
    }

    @media (max-width: 900px) {
      .footer-inner { grid-template-columns: 1fr 1fr; gap: 2.5rem; }
      .footer-brand { grid-column: 1 / -1; }
      .footer-cta { justify-content: flex-start; }
    }
    @media (max-width: 540px) {
      .footer-inner { grid-template-columns: 1fr; }
      .footer-nav { flex-direction: column; gap: 2rem; }
    }
  `],
})
export class FooterComponent {}
