import { Injectable } from '@angular/core';
import { ILogin, LoginCredentials, ServerCredentials, isToken } from '@memmy/model';
import { ServerRouterService } from '../server-router.service';
import { HttpClient } from '@angular/common/http';
import { ThroughHttpClient } from 'src/app/core/through-http-client';
import { loginSuccessful } from '../state/action/login';
import { DispatchService } from '../state/dispatch.service';
import { filter } from 'rxjs/operators';
import { responseOf } from '../../core/response-of';
import { HomeRoutingService } from 'src/app/home/home-routing.service';

@Injectable({
  providedIn: 'root',
})
export class LoginService {

  constructor(
    private httpClient: HttpClient,
    private serverRouter: ServerRouterService,
    private dispatch: DispatchService,
    private homeRouter: HomeRoutingService) { }

  private tryLogin: ThroughHttpClient<ILogin> = credentials => this.httpClient.request(this.serverRouter.routes.login(credentials));

  private loginSucceeded = (credentials: ServerCredentials) => {
    this.dispatch.createDispatcher(loginSuccessful)(credentials);
    this.homeRouter.goToDashboard();
  }

  login = (credentials: LoginCredentials) => {
    responseOf(this.tryLogin(credentials))
      .pipe(filter(isToken))
      .subscribe(this.loginSucceeded);
  }
}
