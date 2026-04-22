import { Component, HostListener, signal } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule],
  template: `
    <nav [class.scrolled]="isScrolled()" [class.menu-open]="isMenuOpen()" class="navbar">
      <div class="nav-inner">
        <a href="#" class="logo">
          <span class="logo-mark">TV</span>
          <span class="logo-text">Teacher Vets</span>
        </a>

        <div class="nav-links" [class.open]="isMenuOpen()">
          <a href="#services" (click)="closeMenu()">Services</a>
          <a href="#about" (click)="closeMenu()">About</a>
          <a href="#testimonials" (click)="closeMenu()">Testimonials</a>
          <a href="#contact" (click)="closeMenu()">Contact</a>
          <a href="#contact" class="btn-primary nav-cta-mobile" (click)="closeMenu()">Book Free Class</a>
        </div>

        <a href="#contact" class="btn-primary nav-cta">Book Free Class</a>

        <button class="menu-toggle" (click)="toggleMenu()" [class.active]="isMenuOpen()" aria-label="Toggle menu">
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>
    </nav>
  `,
  styles: [`
    .navbar {
      position: fixed;
      top: 0;
      left: 0;
      right: 0;
      z-index: 100;
      padding: 1.25rem 0;
      transition: background 0.4s ease, padding 0.4s ease, box-shadow 0.4s ease;
      animation: slideDown 0.6s ease both;
    }
    .navbar.scrolled {
      background: rgba(8, 13, 26, 0.92);
      padding: 0.75rem 0;
      backdrop-filter: blur(16px);
      -webkit-backdrop-filter: blur(16px);
      box-shadow: 0 1px 0 rgba(240, 239, 233, 0.07);
    }
    .nav-inner {
      max-width: 1200px;
      margin: 0 auto;
      padding: 0 2rem;
      display: flex;
      align-items: center;
      justify-content: space-between;
      gap: 2rem;
    }
    .logo {
      display: flex;
      align-items: center;
      gap: 0.6rem;
      text-decoration: none;
      flex-shrink: 0;
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
      letter-spacing: 0.05em;
    }
    .logo-text {
      font-family: var(--font-ui);
      font-size: 0.85rem;
      font-weight: 700;
      letter-spacing: 0.15em;
      text-transform: uppercase;
      color: var(--cream);
    }
    .nav-links {
      display: flex;
      align-items: center;
      gap: 2.5rem;
      flex: 1;
      justify-content: center;
    }
    .nav-links a {
      font-family: var(--font-ui);
      font-size: 0.72rem;
      font-weight: 600;
      letter-spacing: 0.16em;
      text-transform: uppercase;
      color: var(--muted);
      text-decoration: none;
      position: relative;
      transition: color 0.25s ease;
    }
    .nav-links a::after {
      content: '';
      position: absolute;
      bottom: -2px;
      left: 0;
      right: 0;
      height: 1px;
      background: var(--red);
      transform: scaleX(0);
      transform-origin: left;
      transition: transform 0.3s ease;
    }
    .nav-links a:hover { color: var(--cream); }
    .nav-links a:hover::after { transform: scaleX(1); }
    .nav-cta { flex-shrink: 0; font-size: 0.72rem; padding: 0.65rem 1.4rem; }
    .nav-cta-mobile { display: none; }

    .menu-toggle {
      display: none;
      flex-direction: column;
      gap: 5px;
      background: none;
      border: none;
      cursor: pointer;
      padding: 4px;
    }
    .menu-toggle span {
      display: block;
      width: 22px;
      height: 1.5px;
      background: var(--cream);
      transition: transform 0.3s ease, opacity 0.3s ease;
      transform-origin: center;
    }
    .menu-toggle.active span:nth-child(1) { transform: translateY(6.5px) rotate(45deg); }
    .menu-toggle.active span:nth-child(2) { opacity: 0; }
    .menu-toggle.active span:nth-child(3) { transform: translateY(-6.5px) rotate(-45deg); }

    @media (max-width: 900px) {
      .nav-cta { display: none; }
      .menu-toggle { display: flex; }
      .nav-links {
        position: fixed;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background: var(--navy-mid);
        flex-direction: column;
        justify-content: center;
        align-items: center;
        gap: 2.5rem;
        transform: translateX(100%);
        transition: transform 0.4s cubic-bezier(0.4, 0, 0.2, 1);
        z-index: -1;
      }
      .nav-links.open { transform: translateX(0); }
      .nav-links a { font-size: 0.85rem; }
      .nav-cta-mobile { display: inline-flex; }
    }
  `],
})
export class NavbarComponent {
  isScrolled = signal(false);
  isMenuOpen = signal(false);

  @HostListener('window:scroll')
  onScroll() {
    this.isScrolled.set(window.scrollY > 60);
  }

  toggleMenu() {
    this.isMenuOpen.update((v) => !v);
  }

  closeMenu() {
    this.isMenuOpen.set(false);
  }
}
