import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

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
    if (ngForm.valid && ngForm.submitted) {
      this.toastr.success('Email sent successfully!');
      ngForm.resetForm();
    }
  }
}
