import { Injectable } from '@angular/core';
import { GatewayService } from '../gateway.service';
import join from 'url-join';
import { LoginCredentials, Identifiable, Token } from '@memmy/model';
import { withAuthorization } from '../auth/with-authorization';
import { send } from '../http-request/send';

@Injectable({
  providedIn: 'root',
})
export class ServerRouterService {
  constructor(gatewayService: GatewayService) {
    this.gateway = gatewayService.gateway;
  }

  gateway = '';

  routes = {
      login: 
        send((body: LoginCredentials) => ({ 
          url: join(this.gateway, 'login'),
          options: {
            method: 'post',
            body: JSON.stringify(body), 
          },
        }))

    , logout:
        send((body: Token) => ({
          url: join(this.gateway, 'logout'),
          options: {
            method: 'post',
            body: JSON.stringify(body),
          },
        }))

    , getUserGalleries:
        send(
          withAuthorization(() => ({ 
            url: join(this.gateway, 'galleries') 
          })),
        )

    , getGallery:
        send(
          withAuthorization(({ id: galleryId }: Identifiable) => ({
            url: join(this.gateway, 'galleries', galleryId),
          })),
        )
    
    , addGallery:
        send(
          withAuthorization((body: { name: string }) => ({
            url: join(this.gateway, 'galleries', 'add'),
            options: {
              method: 'post',
              body: JSON.stringify(body),
            }
          })),
        ),
  };
}