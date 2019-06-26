import { Injectable } from '@angular/core';
import { IGetUserGalleries } from '@memmy/model';
import { HttpClient } from '@angular/common/http';
import { ThroughHttpClient } from '../core/through-http-client';
import { ServerRouterService } from './server-router.service';

@Injectable({
  providedIn: 'root',
})
export class UserGalleriesService {

  constructor(
    private serverRouter: ServerRouterService,
    private httpClient: HttpClient) { }

  getUserGalleries: ThroughHttpClient<IGetUserGalleries> = user =>
    this.httpClient.request(
      this.serverRouter.routes.getUserGalleries({ authorization: user }),
    )
}
