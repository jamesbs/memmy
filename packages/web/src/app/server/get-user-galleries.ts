import { Injectable, InjectionToken, inject } from '@angular/core';
import { ServerRouter } from './server-router';
import { User, IGetUserGalleries, Identifiable, Gallery } from '@memmy/model';
import { AuthorizationService } from './authorization.service';
import { HttpClient } from '@angular/common/http';
import { ThroughHttpClient } from '../core/through-http-client';

export type GetUserGalleries = ThroughHttpClient<IGetUserGalleries>;

export function getUserGalleriesFactory(authorization: AuthorizationService, http: HttpClient, serverRouter: ServerRouter) {
  return function getUserGalleries(user: Identifiable) {
    return http.request<Gallery[]>(authorization.authorize(user)(serverRouter.route('getUserGalleries')));
  };
}

export const GetUserGalleries = new InjectionToken<GetUserGalleries>(
  'GetUserGallery',
  {
    providedIn: 'root',
    factory: () => getUserGalleriesFactory(inject(AuthorizationService), inject(HttpClient), inject(ServerRouter)),
  });
