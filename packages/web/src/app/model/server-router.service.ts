import { Injectable, Inject } from '@angular/core';
import { Environment } from '../environment';
import { HttpRequest } from '@angular/common/http';
import { GatewayService } from './gateway.service';
import * as join from 'url-join';
import { LoginCredentials } from '@memmy/model';
import { AuthorizeService } from './auth/authorize.service';

@Injectable({
  providedIn: 'root',
})
export class ServerRouterService {
  constructor(
    private authorizeService: AuthorizeService,
    gatewayService: GatewayService
  ) {
    this.gateway = gatewayService.gateway;
  }

  gateway = '';

  routes = {
    getUserGalleries: this.authorizeService.withAuthorization(() => new HttpRequest('GET', join(this.gateway, 'galleries'))),
    login: (body: LoginCredentials) => new HttpRequest('POST', join(this.gateway, 'login'), body),
  };
}
