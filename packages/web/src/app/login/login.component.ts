import { Component, OnInit } from '@angular/core';
import { LoginService } from '../model/auth/login.service';
import { ServerCredentialsService } from '../model/auth/server-credentials.service';
import { Router } from '@angular/router';
import { responseOf } from '../core/response-of';
import { loginSuccessful } from '../model/state/action/login';
import { filter, tap } from 'rxjs/operators';
import { isToken, LoginCredentials } from '@memmy/model';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  constructor(
    private loginService: LoginService,
  ) {
  }

  login(credentials: LoginCredentials) {
    responseOf(this.loginService.tryLogin(credentials))
      .pipe(filter(isToken))
      .subscribe(this.loginService.loginSucceeded);
  }
}
