import { Injectable } from '@angular/core';
import { ILogin, LoginCredentials, ServerCredentials } from '@memmy/model';
import { ServerRouterService } from '../server-router.service';
import { HttpClient } from '@angular/common/http';
import { ThroughHttpClient } from 'src/app/core/through-http-client';
import { loginSuccessful } from '../state/action/login';
import { DispatchService } from '../state/dispatch.service';

@Injectable({
  providedIn: 'root',
})
export class LoginService {

  constructor(
    private httpClient: HttpClient,
    private serverRouter: ServerRouterService,
    private dispatch: DispatchService) { }

  loginSucceeded = this.dispatch.createDispatcher(loginSuccessful);

  tryLogin: ThroughHttpClient<ILogin> = (credentials: LoginCredentials) =>
    this.httpClient.request(this.serverRouter.routes.login(credentials))

}
