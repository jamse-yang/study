import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {UserService} from '../core/services';
import {Router} from '@angular/router';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css']
})
export class AuthComponent implements OnInit {
  authForm: FormGroup;

  constructor(
    private router: Router,
    private fb: FormBuilder,
    private userService: UserService,
  ) {
    this.authForm = this.fb.group({
      userName: ['재민', Validators.required],
      age: ['39', Validators.required],
    });
  }

  ngOnInit() {
  }

  submitForm() {
    const credentials = this.authForm.value;
    this.userService.attemptAuth(credentials);
    this.router.navigateByUrl('/');
  }

}
