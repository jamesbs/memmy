import { Injectable, Inject } from '@angular/core';
import { HttpRequest } from '@angular/common/http';
import { GatewayService } from '../gateway.service';
import join from 'url-join';
import { LoginCredentials, Identifiable, Token } from '@memmy/model';
import { AuthorizeService } from '../auth/authorize.service';

@Injectable({
  providedIn: 'root',
})
export class ServerRouterService {
  constructor(
    private authorizeService: AuthorizeService,
    gatewayService: GatewayService,
  ) {
    this.gateway = gatewayService.gateway;
  }

  gateway = '';

  routes = {
    login:
      (body: LoginCredentials) =>
        new HttpRequest('POST', join(this.gateway, 'login'), body),

    logout:
      (body: Token) => new HttpRequest('POST', join(this.gateway, 'logout'), body),

    getUserGalleries:
      this.authorizeService.withAuthorization(
        () => new HttpRequest('GET', join(this.gateway, 'galleries'))
      ),

    getGallery:
      this.authorizeService.withAuthorization(
        ({ id: galleryId }: Identifiable) =>
          new HttpRequest('GET', join(this.gateway, 'galleries', galleryId))
      ),
    
    addGallery:
      this.authorizeService.withAuthorization(
        (body: { name: string }) =>
          new HttpRequest('POST', join(this.gateway, 'galleries', 'add'), body),
      )
  };
}