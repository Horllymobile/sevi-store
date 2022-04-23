import { LayoutService } from './../../core/services/layout.service';
import { Component, OnInit } from '@angular/core';
import {
  AbstractControl,
  FormBuilder,
  FormGroup,
  Validators,
} from '@angular/forms';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  type!: string;
  form!: FormGroup;
  isLoading: boolean = false;
  constructor(
    private route: ActivatedRoute,
    private fb: FormBuilder,
    public layoutService: LayoutService
  ) {}

  get formData() {
    return this.form.controls;
  }

  ngOnInit(): void {
    this.route.queryParams.subscribe((query) => {
      this.type = query['type'];
    });
    this.initForm();
  }

  initForm() {
    this.form = this.fb.group({
      email: [null, [Validators.required, Validators.email]],
      password: [null, [Validators.required]],
    });
  }

  submit(payload: { [key: string]: any }) {
    this.isLoading = true;
    setTimeout(() => {
      console.log(payload);
      this.isLoading = false;
    }, 1000);
  }
}
