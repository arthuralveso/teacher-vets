import { Component, HostListener, signal, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css',
})
export class NavbarComponent implements OnInit {
  isScrolled = signal(false);
  isMenuOpen = signal(false);
  isDark = signal(true);

  ngOnInit() {
    const saved = localStorage.getItem('tv-theme');
    const theme = saved ?? 'dark';
    this.isDark.set(theme === 'dark');
    document.documentElement.setAttribute('data-theme', theme);
  }

  @HostListener('window:scroll')
  onScroll() {
    this.isScrolled.set(window.scrollY > 60);
  }

  toggleTheme() {
    const next = this.isDark() ? 'light' : 'dark';
    this.isDark.set(next === 'dark');
    document.documentElement.setAttribute('data-theme', next);
    localStorage.setItem('tv-theme', next);
  }

  toggleMenu() { this.isMenuOpen.update(v => !v); }
  closeMenu()  { this.isMenuOpen.set(false); }
}
