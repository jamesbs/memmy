import { Injectable } from '@angular/core';
import { IGetGalleriesByToken, Token, IGetGalleryById, IAddGallery } from '@memmy/model';
import { AsHttpRequest } from './http-request/as-http-request';
import { ServerRouterService } from './server-router/server-router.service';
import { authorizeWith } from './auth/with-authorizer';

@Injectable({
  providedIn: 'root',
})
export class GalleryService {
  constructor(private serverRouter: ServerRouterService) { }

  getGalleriesByToken: AsHttpRequest<IGetGalleriesByToken> = token => 
    this.serverRouter.routes.getUserGalleries(authorizeWith(token));


  getGallery: AsHttpRequest<IGetGalleryById> = (token: Token, galleryId: string) =>
    this.serverRouter.routes.getGallery(authorizeWith(token, { id: galleryId }));


  addGallery: AsHttpRequest<IAddGallery> = (token: Token, galleryName: string) => 
    this.serverRouter.routes.addGallery(authorizeWith(token, { name: galleryName }));
}
