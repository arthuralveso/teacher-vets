import { Component, inject } from '@angular/core';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';
import { AnimateOnScrollDirective } from '../../directives/animate-on-scroll.directive';
import { PlanBadgeComponent } from '../plan-badge/plan-badge.component';

interface Service {
  id: string;
  icon: SafeHtml;
  title: string;
  description: string;
  tag: string;
  price: string;
  priceLabel: string;
}

@Component({
  selector: 'app-services',
  standalone: true,
  imports: [AnimateOnScrollDirective, PlanBadgeComponent],
  templateUrl: './services.component.html',
  styleUrl: './services.component.css',
})
export class ServicesComponent {
  private sanitizer = inject(DomSanitizer);

  private svg(raw: string): SafeHtml {
    return this.sanitizer.bypassSecurityTrustHtml(raw);
  }

  services: Service[] = [
    {
      id: 'reading',
      tag: 'Base',
      icon: this.svg(
        `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"/><path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"/></svg>`,
      ),
      title: 'Aulas Tradicionais',
      description:
        'Gramática, expressões, leitura e escrita — o inglês de verdade, estruturado do jeito certo. Uma base sólida para evoluir com confiança.',
      price: 'R$ 150,00',
      priceLabel: 'hora/aula',
    },
    {
      id: 'conversation',
      tag: 'Fluência',
      icon: this.svg(
        `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/></svg>`,
      ),
      title: 'Prática de Conversação',
      description:
        'Fale sem pensar demais. Diálogos do mundo real, prática situacional e conversas espontâneas para desbloquear sua fluência natural.',
      price: 'R$ 100,00',
      priceLabel: 'hora/aula',
    },
    {
      id: 'interviews',
      tag: 'Profissional',
      icon: this.svg(
        `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M12 1a3 3 0 0 0-3 3v8a3 3 0 0 0 6 0V4a3 3 0 0 0-3-3z"/><path d="M19 10v2a7 7 0 0 1-14 0v-2"/><line x1="12" y1="19" x2="12" y2="23"/><line x1="8" y1="23" x2="16" y2="23"/></svg>`,
      ),
      title: 'Simulação de Entrevistas',
      description:
        'Simulações reais com feedback direto — comportamental, técnica e por competências. Entre preparado, saia confiante.',
      price: 'R$ 200,00',
      priceLabel: 'hora',
    },
    {
      id: 'custom',
      tag: 'Personalizado',
      icon: this.svg(
        `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M12 20h9"/><path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z"/></svg>`,
      ),
      title: 'Aula personalizada',
      description:
        'Foco total no que você precisa. De apresentações e calls a situações do dia a dia — o inglês certo, no momento certo.',
      price: 'R$ 150,00',
      priceLabel: 'hora/aula',
    },
  ];
}
