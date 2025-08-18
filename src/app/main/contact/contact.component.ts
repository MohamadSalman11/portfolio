import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import emailjs from '@emailjs/browser';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [FormsModule, CommonModule, RouterModule],
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss'],
})
export class ContactComponent {
  @Input() isDE!: boolean;

  contactData = {
    name: '',
    email: '',
    message: '',
    privacyAccepted: false,
  };

  constructor(private toastr: ToastrService) {}

  onSubmit(ngForm: NgForm) {
    if (!ngForm.valid) return;

    const templateParams = {
      name: this.contactData.name,
      email: this.contactData.email,
      message: this.contactData.message,
      time: new Date().toLocaleString(),
    };

    emailjs
      .send(
        'service_mj4sv4p',
        'template_65mktrm',
        templateParams,
        'wP7Ul0oiCDt6NXtpD'
      )
      .then(
        () => {
          this.toastr.success(
            this.isDE ? 'Nachricht gesendet!' : 'Email sent successfully!'
          );
          ngForm.resetForm();
        },
        () => {
          this.toastr.error(
            this.isDE ? 'Fehler beim Senden' : 'Failed to send email'
          );
        }
      );
  }
}
