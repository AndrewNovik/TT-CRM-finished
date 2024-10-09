import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import {
  ReactiveFormsModule,
  UntypedFormBuilder,
  UntypedFormGroup,
} from '@angular/forms';
import { initialLoginValue } from './welcome';

@Component({
  selector: 'app-welcome',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './welcome.component.html',
  styleUrl: './welcome.component.css',
})
export class WelcomeComponent implements OnInit {
  form!: UntypedFormGroup;

  constructor(
    private auth: AuthService,
    private fb: UntypedFormBuilder
  ) {}

  ngOnInit(): void {
    this.form = this.fb.group(initialLoginValue);
  }

  login() {
    if (this.form.invalid) {
      return;
    }

    const userLoginData = { ...this.form.value };
    this.form.disable();
    if (userLoginData.login && userLoginData.pass) {
      this.auth.login(userLoginData.login, userLoginData.pass);
    } else {
      this.form.enable();
    }
  }
}
