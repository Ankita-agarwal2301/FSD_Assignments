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
  username = new FormControl();
  password = new FormControl();
  submitMessage: string;
  constructor(private auth: AuthenticationService, private routerService: RouterService) {

  }
  loginForm = new FormGroup(
    {
      username: new FormControl('', Validators.required),
      password: new FormControl('', Validators.required)
    }
  );
  loginSubmit() {
    this.auth.authenticateUser(this.loginForm.value).subscribe(
      data => {
        console.log('done');
        this.auth.setBearerToken(data['token']);
        console.log(this.auth.getBearerToken());

        this.routerService.routeToDashboard();
      }, error => {

        console.log(error.message);
        this.submitMessage = 'Http failure response for http://localhost:3000/auth/v1: 404 Not Found';
        if (error.error) {
          this.submitMessage = error.error.message;
        }
      });
  }
}
