import { Injectable, Inject } from '@angular/core';
import { Environment } from '../environment';
import { HttpRequest } from '@angular/common/http';
import { RouteMap, generateRouteMap } from './route-map';

@Injectable({ 
  providedIn: 'root',
})
export class ServerRouterService {

  constructor(@Inject(Environment) environment: Environment) {
    this.routeMap = generateRouteMap(environment.gatewayUrl)
  }

  private routeMap: RouteMap;

  route(operation: string): HttpRequest<unknown> {
    return this.routeMap[operation];
  }
}
