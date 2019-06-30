import { Component, OnInit } from '@angular/core';
import { LoginService } from '../model/auth/login.service';
import { ServerCredentialsService } from '../model/auth/server-credentials.service';
import { Router } from '@angular/router';
import { responseOf } from '../core/response-of';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  constructor(
    private loginService: LoginService,
    private serverCredentials: ServerCredentialsService,
    private router: Router,
  ) {
  }

  login() {
    responseOf(this.loginService.login({
      username: 'blah',
      password: 'blah',
    }))
    .subscribe(credentials => {
      if (credentials) {
        this.serverCredentials.credentials = credentials;
        this.router.navigate(['']);
      }
    });
  }
}
