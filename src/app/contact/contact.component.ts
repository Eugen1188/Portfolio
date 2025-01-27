import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, inject} from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { Router } from '@angular/router';
import { LanguageService } from '../language.service';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule,FormsModule, RouterModule],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss'
})
export class ContactComponent {
  
  language = inject(LanguageService);
  placeholderNameError: string = "Oops! it seems your name is missing";
  placeholderEmailError: string = "Hoppla! your email is required";
  placeholderMessageError: string = "What do you need to develop?";

  placeholderName: string = "Your name goes here";
  placeholderEmail: string = "youremail@email.com";
  placeholderMessage: string = "Hello Eugen, I am interested in...";

  sendSuccess:boolean = false;

  http = inject(HttpClient)

  mailTest = false;

  post = {
    endPoint: 'sendMail.php',
    body: (payload: any) => JSON.stringify(payload),
    options: {
      headers: {
        'Content-Type': 'text/plain',
        responseType: 'text',
      },
    },
  };

  onSubmit(ngForm: NgForm) {
    console.log(this.post);
    if (ngForm.submitted && ngForm.form.valid && !this.mailTest) {
      this.http.post(this.post.endPoint, this.post.body(this.contactData))
        .subscribe({
          next: (response) => {

            ngForm.resetForm();
            this.sendSuccessMessage()
          },
          error: (error) => {
            console.error(error);
          },
          complete: () => console.info('send post complete'),
        });
    } else if (ngForm.submitted && ngForm.form.valid && this.mailTest) {
      this.sendSuccessMessage()
      ngForm.resetForm();
    }
  }

  sendSuccessMessage() {
    this.sendSuccess = true;
  
    setTimeout(() => {
      this.sendSuccess = false;
    }, 5000);
  }

  contactData = {
    name: "",
    email: "",
    message: "",
  }

  checkInput() {
    let name = document.getElementById('name') as HTMLOptionElement;
    let email = document.getElementById('email') as HTMLOptionElement;
    let message = document.getElementById('message') as HTMLOptionElement;
    let checkbox = document.getElementById('checkbox') as HTMLInputElement;
    let acceptError = document.getElementById('error-msg');

    if (name.value == "") {
      this.placeholderName = this.placeholderNameError;
      name.classList.add('input-error');
    }
    if (email.value == "") {
      this.placeholderEmail = this.placeholderEmailError;
      email.classList.add('input-error');
    }    
    if (message.value == "") {
      this.placeholderMessage = this.placeholderMessageError;
      message.classList.add('input-error');
    }
    if(!checkbox.checked && acceptError != null) {
      acceptError.classList.remove('d-none');
    }
  }

  resetInput () {
    let name = document.getElementById('name') as HTMLOptionElement;
    let email = document.getElementById('email') as HTMLOptionElement;
    let message = document.getElementById('message') as HTMLOptionElement;
    let checkbox = document.getElementById('checkbox') as HTMLInputElement;
    let acceptError = document.getElementById('error-msg');

    name.classList.remove('input-error');
    email.classList.remove('input-error');
    message.classList.remove('input-error');
    this.placeholderName = "Your name goes here";
    this.placeholderEmail = "youremail@email.com";
    this.placeholderMessage = "Hello Eugen, I am interested in...";
    if(acceptError != null) {
      acceptError.classList.add('d-none');
    }
  }

}
