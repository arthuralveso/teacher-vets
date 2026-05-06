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
  photo: string;
}

@Component({
  selector: 'app-testimonials',
  standalone: true,
  imports: [AnimateOnScrollDirective],
  templateUrl: './testimonials.component.html',
  styleUrl: './testimonials.component.css',
})
export class TestimonialsComponent {
  testimonials: Testimonial[] = [
    {
      id: 't1',
      name: 'Jackson Felipe Magnabosco',
      role: 'Software Engineer & CS Professor',
      company: 'Full Stack | Mentoring 300+ devs in LATAM',
      initial: 'J',
      linkedIn: 'https://www.linkedin.com/in/jackson-felipe-magnabosco-b0a48798/?locale=pt',
      photo: 'assets/jackson.png',
      quote:
        'Verônica é uma professora de inglês extremamente dedicada. Em menos de dois meses participando regularmente de suas aulas, percebi uma grande melhora na minha fluência e confiança no idioma. Graças ao seu método e incentivo, consegui avançar em etapas importantes de entrevistas internacionais. Recomendo muito o trabalho dela, pois além de ensinar inglês com excelência, ela realmente ajuda seus alunos a se desenvolverem como pessoas todos os dias.',
    },
    {
      id: 't2',
      name: 'Arthur Oliveira Alves',
      role: 'Senior Frontend Engineer',
      company: 'Angular Specialist | BTG Pactual',
      initial: 'A',
      linkedIn: 'https://www.linkedin.com/in/arthuralveso91/',
      photo: 'assets/arthur.jpg',
      quote:
        'A teacher Verônica é simplesmente incrível! Ela tem sido fundamental na minha evolução com o inglês. É uma profissional extremamente dedicada, empática e paciente — sempre criando um ambiente leve e motivador para aprender. Além de dominar o idioma e as técnicas de ensino, ela realmente se importa com o progresso de cada aluno, o que faz toda a diferença. Aprender com ela tem sido uma experiência transformadora. Sem dúvida, uma das melhores professoras que já tive o prazer de conhecer!',
    },
    {
      id: 't3',
      name: 'Gabrielle Cicarelli',
      role: 'Senior Product Designer',
      company: 'UX/UI | SaaS | AI-Design | Healthcare',
      initial: 'G',
      linkedIn: 'https://www.linkedin.com/in/gabicicarelli/',
      photo: 'assets/gabs.jpg',
      quote:
        'Aprender com a Teacher Verônica tem sido uma virada de chave. Desde que comecei as aulas, consegui destravar meu inglês, ganhei mais confiança para conversar e aprendi estratégias práticas para entrevistas e dia a dia com o time. Sua didática clara e o jeito leve de conduzir as aulas tornam o aprendizado muito mais simples. Se você quer elevar seu inglês e se destacar de verdade, principalmente no cenário profissional, a Verônica é a pessoa certa. Super recomendo!',
    },
  ];

  countries = ['Brasil', 'Portugal', 'Espanha', 'Itália', 'França', 'Alemanha', 'Japão'];
}
