import { Injectable } from '@angular/core';
import { IGetGalleriesByToken, Token, IGetGalleryById, IAddGallery } from '@memmy/model';
import { HttpClient } from '@angular/common/http';
import { ThroughHttpClient } from '../core/through-http-client';
import { ServerRouterService } from './server-router/server-router.service';
import { authorizeWith } from './auth/with-authorizer';

@Injectable({
  providedIn: 'root',
})
export class GalleryService {
  constructor(
    private serverRouter: ServerRouterService,
    private httpClient: HttpClient) { }

  getGalleriesByToken: ThroughHttpClient<IGetGalleriesByToken> = token =>
    this.httpClient.request(
      this.serverRouter.routes.getUserGalleries(authorizeWith(token)),
    )

  getGallery: ThroughHttpClient<IGetGalleryById> = (token: Token, galleryId: string) =>
    this.httpClient.request(
      this.serverRouter.routes.getGallery(authorizeWith(token, { id: galleryId })),
    )

  addGallery: ThroughHttpClient<IAddGallery> = (token: Token, galleryName: string) => 
    this.httpClient.request(
      this.serverRouter.routes.addGallery(authorizeWith(token, { name: galleryName })),
    )
}
