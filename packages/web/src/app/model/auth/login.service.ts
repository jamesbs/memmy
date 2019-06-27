import { Injectable } from '@angular/core';
import { ILogin, LoginCredentials } from '@memmy/model';
import { ServerRouterService } from '../server-router.service';
import { HttpClient } from '@angular/common/http';
import { ThroughHttpClient } from 'src/app/core/through-http-client';

@Injectable({
  providedIn: 'root',
})
export class LoginService {

  constructor(
    private httpClient: HttpClient,
    private serverRouter: ServerRouterService) { }

  login: ThroughHttpClient<ILogin> = (credentials: LoginCredentials) =>
    this.httpClient.request(this.serverRouter.routes.login(credentials))
}
