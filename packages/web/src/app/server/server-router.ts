import { Injectable } from '@angular/core';
import { Environment } from '../environment';
import { join } from 'path';
import { HttpClient, HttpRequest } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class ServerRouter {

  constructor(
    private environment: Environment,
    private http: HttpClient) { }

  private router = {
    getUserGalleries: new HttpRequest('GET', join(this.environment.gatewayUrl, 'galleries'))
  };

  route(operation: string): HttpRequest<unknown> {
    return this.router[operation];
  }
}
