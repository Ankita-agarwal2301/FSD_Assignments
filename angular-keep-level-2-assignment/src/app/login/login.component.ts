import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { log } from 'util';
import { AuthenticationService } from '../services/authentication.service';
import { RouterService } from '../services/router.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  username: FormControl;
  password: FormControl;

  constructor(private authService: AuthenticationService, private router: RouterService) { }
  loginForm: FormGroup = new FormGroup({
    username: new FormControl('', [Validators.required]),
    password: new FormControl('', [Validators.required])
  });
  submitMessage: string;

  loginSubmit() {
    this.authService.authenticateUser(this.loginForm.value).subscribe(data => {
      this.router.routeToDashboard();
      this.authService.setBearerToken(data['token']);
    }, error => {
      console.log(error.message);
      this.submitMessage = 'Http failure response for http://localhost:3000/auth/v1: 404 Not Found';
      if (error.error) {
        this.submitMessage = error.error.message;
      }
    });
  }
  getusernameError() {
    return this.loginForm.get('username').hasError('required') ? 'not blank' : '';
  }

  getpasswordError() {
    return this.loginForm.get('password').hasError('required') ? 'not blank' : '';
  }
}
