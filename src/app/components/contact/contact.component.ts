import { Component, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AnimateOnScrollDirective } from '../../directives/animate-on-scroll.directive';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [FormsModule, AnimateOnScrollDirective],
  template: `
    <section class="contact-section section-pad" id="contact">
      <div class="container">
        <div class="contact-inner">
          <!-- Left: Info -->
          <div class="contact-info reveal" animateOnScroll>
            <span class="label-text">Get in Touch</span>
            <h2 class="display-heading contact-heading">
              Let's talk about<br>your English.
            </h2>
            <p class="body-text contact-sub">
              No pressure. No scripts. Just an honest conversation about where you are
              and where you want to go.
            </p>

            <div class="contact-channels">
              <a href="mailto:hello@teachervets.com" class="channel-link">
                <div class="channel-icon">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="4" width="20" height="16" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/></svg>
                </div>
                <div class="channel-text">
                  <span class="channel-label">Email</span>
                  <span class="channel-value">hello&#64;teachervets.com</span>
                </div>
              </a>

              <a href="https://wa.me/5511999999999" target="_blank" rel="noopener noreferrer" class="channel-link">
                <div class="channel-icon">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413z"/></svg>
                </div>
                <div class="channel-text">
                  <span class="channel-label">WhatsApp</span>
                  <span class="channel-value">+55 11 99999-9999</span>
                </div>
              </a>

              <a href="https://linkedin.com/in/teachervets" target="_blank" rel="noopener noreferrer" class="channel-link">
                <div class="channel-icon">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
                </div>
                <div class="channel-text">
                  <span class="channel-label">LinkedIn</span>
                  <span class="channel-value">linkedin.com/in/teachervets</span>
                </div>
              </a>
            </div>
          </div>

          <!-- Right: Form -->
          <div class="contact-form-wrap reveal reveal-delay-2" animateOnScroll>
            @if (!submitted()) {
              <form class="contact-form" (ngSubmit)="onSubmit()" #form="ngForm">
                <div class="form-row">
                  <div class="form-group">
                    <label class="form-label" for="name">Full Name</label>
                    <input
                      id="name"
                      name="name"
                      type="text"
                      class="form-input"
                      placeholder="Your name"
                      [(ngModel)]="formData.name"
                      required
                    />
                  </div>
                  <div class="form-group">
                    <label class="form-label" for="email">Email Address</label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      class="form-input"
                      placeholder="you@example.com"
                      [(ngModel)]="formData.email"
                      required
                    />
                  </div>
                </div>
                <div class="form-group">
                  <label class="form-label" for="message">Your Message</label>
                  <textarea
                    id="message"
                    name="message"
                    class="form-input form-textarea"
                    placeholder="Tell me your current level, goals, and any specific challenges..."
                    [(ngModel)]="formData.message"
                    rows="5"
                    required
                  ></textarea>
                </div>
                <button type="submit" class="btn-primary form-submit">
                  Send Message
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
                </button>
              </form>
            } @else {
              <div class="success-state">
                <div class="success-icon">✓</div>
                <h3 class="display-heading success-heading">Message received.</h3>
                <p class="body-text">I'll reply within 24 hours. Looking forward to our first conversation.</p>
              </div>
            }
          </div>
        </div>
      </div>
    </section>
  `,
  styles: [`
    .contact-section {
      background: var(--navy);
      border-top: 1px solid var(--border);
    }

    .contact-inner {
      display: grid;
      grid-template-columns: 5fr 7fr;
      gap: 5rem;
      align-items: start;
    }

    /* ── Info ─────────────────────────────────────────────── */
    .contact-info .label-text { display: block; margin-bottom: 1rem; }

    .contact-heading {
      font-size: clamp(2rem, 4vw, 3.2rem);
      color: var(--cream);
      line-height: 1.1;
      margin-bottom: 1.25rem;
    }

    .contact-sub { margin-bottom: 3rem; }

    .contact-channels { display: flex; flex-direction: column; gap: 0; }

    .channel-link {
      display: flex;
      align-items: center;
      gap: 1rem;
      padding: 1.1rem 0;
      border-bottom: 1px solid var(--border);
      text-decoration: none;
      transition: padding-left 0.3s ease;
    }
    .channel-link:first-child { border-top: 1px solid var(--border); }
    .channel-link:hover { padding-left: 0.5rem; }
    .channel-link:hover .channel-icon { background: rgba(215, 38, 56, 0.15); color: var(--red); }

    .channel-icon {
      width: 40px;
      height: 40px;
      background: var(--navy-light);
      display: flex;
      align-items: center;
      justify-content: center;
      color: var(--muted);
      flex-shrink: 0;
      transition: background 0.25s ease, color 0.25s ease;
    }

    .channel-text { display: flex; flex-direction: column; gap: 0.15rem; }
    .channel-label {
      font-size: 0.65rem;
      font-weight: 700;
      letter-spacing: 0.15em;
      text-transform: uppercase;
      color: var(--muted);
    }
    .channel-value {
      font-size: 0.88rem;
      font-weight: 600;
      color: var(--cream);
    }

    /* ── Form ─────────────────────────────────────────────── */
    .contact-form-wrap {
      background: var(--navy-mid);
      border: 1px solid var(--border);
      padding: 2.5rem;
    }

    .contact-form { display: flex; flex-direction: column; gap: 1.5rem; }

    .form-row {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 1.25rem;
    }

    .form-group { display: flex; flex-direction: column; gap: 0.5rem; }

    .form-label {
      font-size: 0.68rem;
      font-weight: 700;
      letter-spacing: 0.14em;
      text-transform: uppercase;
      color: var(--muted);
    }

    .form-input {
      background: var(--navy);
      border: 1px solid var(--border);
      color: var(--cream);
      font-family: var(--font-ui);
      font-size: 0.9rem;
      padding: 0.85rem 1rem;
      outline: none;
      transition: border-color 0.25s ease;
      width: 100%;
      border-radius: 0;
      -webkit-appearance: none;
    }
    .form-input::placeholder { color: rgba(136, 153, 187, 0.5); }
    .form-input:focus { border-color: rgba(215, 38, 56, 0.5); }

    .form-textarea { resize: vertical; min-height: 120px; font-family: var(--font-ui); }

    .form-submit { align-self: flex-start; font-size: 0.78rem; }

    /* Success State */
    .success-state {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      text-align: center;
      padding: 3rem 1rem;
      gap: 1rem;
      min-height: 300px;
    }
    .success-icon {
      width: 56px;
      height: 56px;
      background: rgba(215, 38, 56, 0.1);
      border: 1px solid rgba(215, 38, 56, 0.3);
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 1.4rem;
      color: var(--red);
      margin-bottom: 0.5rem;
    }
    .success-heading { font-size: 2rem; color: var(--cream); margin-bottom: 0.5rem; }

    @media (max-width: 900px) {
      .contact-inner { grid-template-columns: 1fr; gap: 3rem; }
      .form-row { grid-template-columns: 1fr; }
    }
    @media (max-width: 540px) {
      .contact-form-wrap { padding: 1.5rem; }
    }
  `],
})
export class ContactComponent {
  submitted = signal(false);

  formData = {
    name: '',
    email: '',
    message: '',
  };

  onSubmit() {
    this.submitted.set(true);
  }
}
