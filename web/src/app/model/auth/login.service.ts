import { Injectable } from '@angular/core';
import { ILogin, LoginCredentials, ServerCredentials } from '@memmy/model';
import { loginSuccessful } from '../state/action/login';
import { responseOf } from '../../core/response-of';
import { HomeRoutingService } from '../../home/home-routing.service';
import { AsHttpRequest } from '../http-request/as-http-request';
import dispatch from '../state/core/dispatch';
import serverRouter from '../server-router/server-router';

@Injectable({
  providedIn: 'root',
})
export class LoginService {

  constructor(private homeRouter: HomeRoutingService) { }

  private tryLogin: AsHttpRequest<ILogin> = serverRouter.login;

  private loginSucceeded = (credentials: ServerCredentials) => {
    dispatch(loginSuccessful, credentials);
    this.homeRouter.goToDashboard();
  }
  
  login = (credentials: LoginCredentials) => {
    responseOf(this.tryLogin(credentials))
      .then(this.loginSucceeded);
  }
}
