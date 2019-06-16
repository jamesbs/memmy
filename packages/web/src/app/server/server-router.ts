import { Injectable, Inject } from '@angular/core';
import { Environment } from '../environment';
import * as join from 'url-join';
import { HttpClient, HttpRequest } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class ServerRouter {

  constructor(
    @Inject(Environment) private environment,
    private http: HttpClient) { 

      console.log('env');
      console.log(environment)
    }

  private router = {
    getUserGalleries: new HttpRequest('GET', join(this.environment.gatewayUrl, 'galleries'))
  };

  route(operation: string): HttpRequest<unknown> {
    console.log(join(this.environment.gatewayUrl, 'galleries'));
    return this.router[operation];
  }
}
