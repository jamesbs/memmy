import { HttpRequest } from '@angular/common/http';
import * as join from 'url-join';

export const generateRouteMap = gatewayUrl => ({
  getUserGalleries:new HttpRequest('GET', join(gatewayUrl, 'galleries')),
})

export type RouteMap = ReturnType<typeof generateRouteMap>;

export type ServerRoute = keyof RouteMap;