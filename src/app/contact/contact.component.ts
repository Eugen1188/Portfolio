import { CommonModule } from '@angular/common';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, inject } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { LanguageService } from '../language.service';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterModule],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss'
})
export class ContactComponent {
  language = inject(LanguageService);
  http = inject(HttpClient);

  placeholderNameError: string = 'Oops! it seems your name is missing';
  placeholderEmailError: string = 'Hoppla! your email is required';
  placeholderMessageError: string = 'What do you need to develop?';

  placeholderName: string = 'Your name goes here';
  placeholderEmail: string = 'youremail@email.com';
  placeholderMessage: string = 'Hello Eugen, I am interested in...';

  sendSuccess: boolean = false;
  emailSent: boolean = false;
  mailTest = false;

  endPoint = '/api/sendMail.php';

  contactData = {
    name: '',
    email: '',
    message: '',
  };

  onSubmit(ngForm: NgForm) {
    if (ngForm.submitted && ngForm.form.valid && !this.mailTest) {
      this.http.post(this.endPoint, this.contactData, {
        headers: new HttpHeaders({
          'Content-Type': 'application/json'
        })
      }).subscribe({
        next: () => {
          ngForm.resetForm();
          this.playAnimation();
        },
        error: (error) => {
          console.error('Mail send error:', error);
        },
      });
    } else if (ngForm.submitted && ngForm.form.valid && this.mailTest) {
      ngForm.resetForm();
    }
  }

  playAnimation() {
    this.emailSent = true;
    setTimeout(() => {
      this.emailSent = false;
    }, 5000);
  }

  checkInput() {
    const name = document.getElementById('name') as HTMLInputElement;
    const email = document.getElementById('email') as HTMLInputElement;
    const message = document.getElementById('message') as HTMLTextAreaElement;
    const checkbox = document.getElementById('checkbox') as HTMLInputElement;
    const acceptError = document.getElementById('error-msg');

    if (name.value === '') {
      this.placeholderName = this.placeholderNameError;
      name.classList.add('input-error');
    }

    if (email.value === '' || !email.validity.valid) {
      email.value = '';
      this.placeholderEmail = this.placeholderEmailError;
      email.classList.add('input-error');
    }

    if (message.value === '') {
      this.placeholderMessage = this.placeholderMessageError;
      message.classList.add('input-error');
    }

    if (!checkbox.checked && acceptError != null) {
      acceptError.classList.remove('d-none');
    }
  }

  resetInput() {
    const name = document.getElementById('name') as HTMLInputElement;
    const email = document.getElementById('email') as HTMLInputElement;
    const message = document.getElementById('message') as HTMLTextAreaElement;
    const acceptError = document.getElementById('error-msg');

    name.classList.remove('input-error');
    email.classList.remove('input-error');
    message.classList.remove('input-error');

    this.placeholderName = 'Your name goes here';
    this.placeholderEmail = 'youremail@email.com';
    this.placeholderMessage = 'Hello Eugen, I am interested in...';

    if (acceptError != null) {
      acceptError.classList.add('d-none');
    }
  }
}