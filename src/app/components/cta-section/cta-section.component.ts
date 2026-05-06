import { Component } from '@angular/core';
import { AnimateOnScrollDirective } from '../../directives/animate-on-scroll.directive';

@Component({
  selector: 'app-cta-section',
  standalone: true,
  imports: [AnimateOnScrollDirective],
  templateUrl: './cta-section.component.html',
  styleUrl: './cta-section.component.css',
})
export class CtaSectionComponent {}
