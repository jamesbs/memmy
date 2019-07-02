import { Injectable, Inject } from '@angular/core';
import { Environment } from '../../environment';
import { HttpRequest } from '@angular/common/http';
import { GatewayService } from '../gateway.service';
import * as join from 'url-join';
import { LoginCredentials, Identifiable } from '@memmy/model';
import { AuthorizeService } from '../auth/authorize.service';

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
    login:
      (body: LoginCredentials) =>
        new HttpRequest('POST', join(this.gateway, 'login'), body),

    getUserGalleries:
      this.authorizeService.withAuthorization(
        () => new HttpRequest('GET', join(this.gateway, 'galleries')
      )),

    getGallery:
      this.authorizeService.withAuthorization(
        ({ id: galleryId }: Identifiable) =>
          new HttpRequest('GET', join(this.gateway, 'galleries', galleryId)
      )),
  };
}
