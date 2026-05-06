import { Component, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AnimateOnScrollDirective } from '../../directives/animate-on-scroll.directive';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [FormsModule, AnimateOnScrollDirective],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css',
})
export class ContactComponent {
  submitted = signal(false);

  formData = {
    name: '',
    email: '',
    message: '',
  };

  onSubmit() {
    const text = `Olá! Me chamo ${this.formData.name} (${this.formData.email}).\n\n${this.formData.message}`;
    const url = `https://wa.me/5512996004205?text=${encodeURIComponent(text)}`;
    window.open(url, '_blank');
    this.submitted.set(true);
  }
}
