import { Component, input } from '@angular/core';

@Component({
  selector: 'app-plan-badge',
  standalone: true,
  template: `
    <span class="plan-badge">
      <span class="badge-icon"><ng-content select="[icon]" /></span>
      <span class="badge-label">{{ label() }}</span>
    </span>
  `,
  styleUrl: './plan-badge.component.css',
})
export class PlanBadgeComponent {
  label = input.required<string>();
}
