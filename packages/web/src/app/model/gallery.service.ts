import { Injectable } from '@angular/core';
import { IGetGalleriesByToken } from '@memmy/model';
import { HttpClient } from '@angular/common/http';
import { ThroughHttpClient } from '../core/through-http-client';
import { ServerRouterService } from './server-router.service';
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
}
