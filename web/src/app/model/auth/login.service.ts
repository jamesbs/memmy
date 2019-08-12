import { Injectable } from '@angular/core';
import { ILogin, LoginCredentials, ServerCredentials } from '@memmy/model';
import { ServerRouterService } from '../server-router/server-router.service';
import { loginSuccessful } from '../state/action/login';
import { DispatchService } from '../state/dispatch.service';
import { responseOf } from '../../core/response-of';
import { HomeRoutingService } from '../../home/home-routing.service';
import { AsHttpRequest } from '../http-request/as-http-request';

@Injectable({
  providedIn: 'root',
})
export class LoginService {

  constructor(
    private serverRouter: ServerRouterService,
    private dispatch: DispatchService,
    private homeRouter: HomeRoutingService) { }

  private tryLogin: AsHttpRequest<ILogin> = this.serverRouter.routes.login;

  private loginSucceeded = (credentials: ServerCredentials) => {
    this.dispatch.createDispatcher(loginSuccessful)(credentials);
    this.homeRouter.goToDashboard();
  }
  
  login = (credentials: LoginCredentials) => {
    responseOf(this.tryLogin(credentials))
      .then(this.loginSucceeded);
  }
}
