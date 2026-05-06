import { Component } from '@angular/core';
import { AnimateOnScrollDirective } from '../../directives/animate-on-scroll.directive';

@Component({
  selector: 'app-why-me',
  standalone: true,
  imports: [AnimateOnScrollDirective],
  templateUrl: './why-me.component.html',
  styleUrl: './why-me.component.css',
})
export class WhyMeComponent {
  points = [
    {
      title: 'Prática Real desde o Primeiro Dia',
      desc: 'Cada aula usa material autêntico — podcasts, notícias, cenários de negócios e conversas ao vivo — não exercícios de apostila.',
    },
    {
      title: 'Aulas Profundamente Personalizadas',
      desc: 'Seu plano de aprendizado é construído em torno dos seus objetivos, agenda e lacunas específicas. Nenhum aluno segue o mesmo caminho.',
    },
    {
      title: 'Confiança como Métrica Principal',
      desc: 'O progresso é medido não apenas em notas, mas na sua capacidade de pensar e falar sem hesitação.',
    },
    {
      title: 'Simulação de Entrevistas (Mock Interview)',
      desc: 'Foco especializado para profissionais que desejam atuar no mercado internacional a se prepararem para a temida entrevista pra gringa.',
    },
  ];
}
