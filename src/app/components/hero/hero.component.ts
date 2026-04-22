import { Component } from '@angular/core';

@Component({
  selector: 'app-hero',
  standalone: true,
  template: `
    <section class="hero" id="home">
      <div class="hero-inner">
        <!-- Left: Copy -->
        <div class="hero-copy">
          <p class="label-text hero-label">Premium English Coaching</p>
          <h1 class="display-heading hero-heading">
            <span class="line line-1">Speak English</span>
            <span class="line line-2">with Confidence</span>
            <span class="line line-3 accent-italic">— Not Fear.</span>
          </h1>
          <p class="hero-sub">
            Personalized lessons built around how you actually think and communicate.
            Real-world practice. Measurable results. No cookie-cutter methods.
          </p>
          <div class="hero-actions">
            <a href="#contact" class="btn-primary">
              Book Free Class
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
            </a>
            <a href="#services" class="btn-secondary">
              See How It Works
            </a>
          </div>
          <div class="hero-stats">
            <div class="stat">
              <span class="stat-num">500+</span>
              <span class="stat-label-text">Students Taught</span>
            </div>
            <div class="stat-divider"></div>
            <div class="stat">
              <span class="stat-num">98%</span>
              <span class="stat-label-text">Satisfaction Rate</span>
            </div>
            <div class="stat-divider"></div>
            <div class="stat">
              <span class="stat-num">7+</span>
              <span class="stat-label-text">Years Experience</span>
            </div>
          </div>
        </div>

        <!-- Right: Abstract Visual -->
        <div class="hero-visual" aria-hidden="true">
          <!-- Background letterform -->
          <div class="bg-letter">E</div>

          <!-- Outer frame -->
          <div class="frame-outer"></div>

          <!-- Inner panel — simulated video frame -->
          <div class="video-panel">
            <div class="vp-header">
              <div class="vp-dot red"></div>
              <div class="vp-dot yellow"></div>
              <div class="vp-dot green"></div>
              <span class="vp-title">Live Session</span>
            </div>
            <div class="vp-body">
              <div class="avatar-ring">
                <div class="avatar-inner">
                  <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="rgba(240,239,233,0.4)" stroke-width="1.5">
                    <circle cx="12" cy="8" r="4"/><path d="M4 20c0-4 3.6-7 8-7s8 3 8 7"/>
                  </svg>
                </div>
              </div>
              <div class="speech-bars">
                <div class="sb sb-1"></div>
                <div class="sb sb-2"></div>
                <div class="sb sb-3"></div>
                <div class="sb sb-4"></div>
                <div class="sb sb-5"></div>
              </div>
            </div>
            <div class="vp-text-lines">
              <div class="tl tl-1"></div>
              <div class="tl tl-2"></div>
              <div class="tl tl-3"></div>
            </div>
          </div>

          <!-- Floating badge -->
          <div class="badge badge-1">
            <div class="badge-icon">✓</div>
            <div class="badge-text">
              <span>Lesson Complete</span>
              <span class="badge-sub">Grammar Module 3</span>
            </div>
          </div>

          <!-- Red diagonal accent -->
          <div class="red-slash"></div>

          <!-- Corner label -->
          <div class="corner-label">
            <span>01</span>
            <span>/</span>
            <span>English</span>
          </div>

          <!-- Dot grid -->
          <div class="dot-grid"></div>
        </div>
      </div>

      <!-- Scroll indicator -->
      <div class="scroll-cue">
        <div class="scroll-line"></div>
        <span>Scroll</span>
      </div>

      <!-- Bottom diagonal cut -->
      <div class="hero-diagonal"></div>
    </section>
  `,
  styles: [`
    .hero {
      min-height: 100vh;
      display: flex;
      flex-direction: column;
      position: relative;
      overflow: hidden;
      padding-top: 6rem;
    }

    /* Radial glow behind hero */
    .hero::after {
      content: '';
      position: absolute;
      top: -20%;
      right: -10%;
      width: 600px;
      height: 600px;
      background: radial-gradient(circle, rgba(215, 38, 56, 0.08) 0%, transparent 70%);
      pointer-events: none;
    }

    .hero-inner {
      flex: 1;
      max-width: 1200px;
      margin: 0 auto;
      padding: 4rem 2rem 6rem;
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 4rem;
      align-items: center;
    }

    /* ── Copy ─────────────────────────────────────────────── */
    .hero-copy { position: relative; z-index: 1; }

    .hero-label {
      display: block;
      margin-bottom: 1.5rem;
      animation: fadeIn 0.6s ease both;
    }

    .hero-heading {
      font-size: clamp(3rem, 6vw, 5.5rem);
      color: var(--cream);
      display: flex;
      flex-direction: column;
      margin-bottom: 1.8rem;
    }
    .line { display: block; overflow: hidden; }
    .line-1 { animation: fadeUp 0.7s 0.15s ease both; }
    .line-2 { animation: fadeUp 0.7s 0.28s ease both; }
    .line-3 { animation: fadeUp 0.7s 0.41s ease both; }
    .accent-italic {
      font-style: italic;
      font-weight: 300;
      color: var(--cream-dim);
    }

    .hero-sub {
      font-family: var(--font-ui);
      font-size: 1.05rem;
      line-height: 1.75;
      color: var(--muted);
      max-width: 460px;
      margin-bottom: 2.5rem;
      animation: fadeUp 0.7s 0.55s ease both;
    }

    .hero-actions {
      display: flex;
      gap: 1rem;
      flex-wrap: wrap;
      margin-bottom: 3rem;
      animation: fadeUp 0.7s 0.65s ease both;
    }

    .hero-stats {
      display: flex;
      align-items: center;
      gap: 1.5rem;
      animation: fadeIn 0.8s 0.8s ease both;
    }
    .stat { display: flex; flex-direction: column; gap: 0.2rem; }
    .stat-num {
      font-family: var(--font-display);
      font-size: 2rem;
      font-weight: 600;
      color: var(--cream);
      line-height: 1;
    }
    .stat-label-text {
      font-size: 0.68rem;
      font-weight: 600;
      letter-spacing: 0.12em;
      text-transform: uppercase;
      color: var(--muted);
    }
    .stat-divider {
      width: 1px;
      height: 36px;
      background: var(--border);
    }

    /* ── Visual ───────────────────────────────────────────── */
    .hero-visual {
      position: relative;
      height: 520px;
      animation: fadeIn 0.9s 0.3s ease both;
    }

    .bg-letter {
      position: absolute;
      top: -10%;
      right: -5%;
      font-family: var(--font-display);
      font-size: 28rem;
      font-weight: 700;
      color: rgba(240, 239, 233, 0.025);
      line-height: 1;
      pointer-events: none;
      user-select: none;
    }

    .frame-outer {
      position: absolute;
      inset: 20px;
      border: 1px solid var(--border);
      pointer-events: none;
    }

    .video-panel {
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      width: 75%;
      background: var(--navy-mid);
      border: 1px solid rgba(240, 239, 233, 0.12);
      border-radius: 2px;
      overflow: hidden;
      animation: floatSlow 6s ease-in-out infinite;
      box-shadow: 0 32px 80px rgba(0, 0, 0, 0.5);
    }

    .vp-header {
      display: flex;
      align-items: center;
      gap: 0.4rem;
      padding: 0.65rem 1rem;
      border-bottom: 1px solid var(--border);
      background: rgba(0,0,0,0.2);
    }
    .vp-dot {
      width: 8px;
      height: 8px;
      border-radius: 50%;
    }
    .vp-dot.red    { background: #FF5F56; }
    .vp-dot.yellow { background: #FEBC2E; }
    .vp-dot.green  { background: #27C93F; }
    .vp-title {
      margin-left: auto;
      font-size: 0.6rem;
      letter-spacing: 0.15em;
      text-transform: uppercase;
      color: var(--muted);
      font-weight: 600;
    }

    .vp-body {
      display: flex;
      align-items: center;
      gap: 1.5rem;
      padding: 1.5rem 1.25rem 1rem;
    }
    .avatar-ring {
      width: 64px;
      height: 64px;
      border-radius: 50%;
      border: 2px solid rgba(215, 38, 56, 0.5);
      display: flex;
      align-items: center;
      justify-content: center;
      flex-shrink: 0;
    }
    .avatar-inner {
      width: 52px;
      height: 52px;
      border-radius: 50%;
      background: var(--navy-light);
      display: flex;
      align-items: center;
      justify-content: center;
    }

    .speech-bars {
      display: flex;
      align-items: flex-end;
      gap: 4px;
      height: 36px;
    }
    .sb {
      width: 4px;
      background: var(--red);
      border-radius: 2px;
      animation: pulse-dot 1.4s ease-in-out infinite;
    }
    .sb-1 { height: 12px; animation-delay: 0s; }
    .sb-2 { height: 24px; animation-delay: 0.15s; }
    .sb-3 { height: 32px; animation-delay: 0.3s; }
    .sb-4 { height: 20px; animation-delay: 0.45s; }
    .sb-5 { height: 14px; animation-delay: 0.6s; }

    .vp-text-lines {
      padding: 0.75rem 1.25rem 1.5rem;
      display: flex;
      flex-direction: column;
      gap: 0.5rem;
    }
    .tl {
      height: 8px;
      background: rgba(240, 239, 233, 0.07);
      border-radius: 4px;
    }
    .tl-1 { width: 90%; }
    .tl-2 { width: 75%; }
    .tl-3 { width: 60%; }

    /* Floating badge */
    .badge {
      position: absolute;
      display: flex;
      align-items: center;
      gap: 0.75rem;
      padding: 0.75rem 1rem;
      background: var(--navy-light);
      border: 1px solid rgba(240, 239, 233, 0.12);
      border-radius: 2px;
      box-shadow: 0 16px 40px rgba(0,0,0,0.4);
    }
    .badge-1 {
      bottom: 60px;
      right: -10px;
      animation: float 4s 1s ease-in-out infinite;
    }
    .badge-icon {
      width: 28px;
      height: 28px;
      background: rgba(215, 38, 56, 0.15);
      border: 1px solid rgba(215, 38, 56, 0.3);
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 0.75rem;
      color: var(--red);
      flex-shrink: 0;
    }
    .badge-text {
      display: flex;
      flex-direction: column;
      gap: 0.15rem;
    }
    .badge-text span {
      font-size: 0.72rem;
      font-weight: 700;
      color: var(--cream);
      letter-spacing: 0.05em;
      white-space: nowrap;
    }
    .badge-sub {
      font-size: 0.62rem !important;
      color: var(--muted) !important;
      font-weight: 500 !important;
    }

    .red-slash {
      position: absolute;
      bottom: 30px;
      left: 10px;
      width: 40%;
      height: 2px;
      background: var(--red);
      transform: rotate(-15deg);
      transform-origin: left center;
    }

    .corner-label {
      position: absolute;
      top: 30px;
      left: 30px;
      display: flex;
      gap: 0.3rem;
      font-size: 0.62rem;
      font-weight: 700;
      letter-spacing: 0.15em;
      text-transform: uppercase;
      color: var(--muted);
    }

    .dot-grid {
      position: absolute;
      bottom: 0;
      left: 0;
      width: 120px;
      height: 120px;
      background-image: radial-gradient(circle, rgba(240,239,233,0.15) 1px, transparent 1px);
      background-size: 12px 12px;
      pointer-events: none;
    }

    /* ── Scroll Cue ───────────────────────────────────────── */
    .scroll-cue {
      position: absolute;
      bottom: 2.5rem;
      left: 2rem;
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 0.5rem;
      animation: fadeIn 1s 1.2s ease both;
    }
    .scroll-line {
      width: 1px;
      height: 48px;
      background: linear-gradient(to bottom, transparent, var(--muted));
    }
    .scroll-cue span {
      font-size: 0.6rem;
      letter-spacing: 0.2em;
      text-transform: uppercase;
      color: var(--muted);
      writing-mode: vertical-rl;
    }

    /* ── Diagonal cut ─────────────────────────────────────── */
    .hero-diagonal {
      position: absolute;
      bottom: 0;
      left: 0;
      right: 0;
      height: 100px;
      background: var(--navy-mid);
      clip-path: polygon(0 100%, 100% 100%, 100% 30%, 0 100%);
      pointer-events: none;
    }

    /* ── Responsive ───────────────────────────────────────── */
    @media (max-width: 900px) {
      .hero-inner {
        grid-template-columns: 1fr;
        padding: 2rem 1.5rem 4rem;
        gap: 3rem;
      }
      .hero-visual { height: 360px; }
      .bg-letter { font-size: 16rem; }
      .hero-heading { font-size: clamp(2.5rem, 8vw, 4rem); }
    }
    @media (max-width: 540px) {
      .hero-visual { height: 280px; }
      .badge-1 { right: 0; bottom: 20px; }
      .scroll-cue { display: none; }
    }
  `],
})
export class HeroComponent {}
