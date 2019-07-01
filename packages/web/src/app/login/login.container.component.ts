import { Component } from '@angular/core';
import { LoginService } from '../model/auth/login.service';

@Component({
  selector: 'app-login-container',
  template: `<app-login [login]="login"></app-login>`
})
export class LoginContainerComponent {
  constructor(private loginService: LoginService) { }

  login = this.loginService.login;
}
