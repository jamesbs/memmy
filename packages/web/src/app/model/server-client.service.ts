import { Injectable } from '@angular/core';
import { User } from '@memmy/model';
import { HttpClient } from '@angular/common/http';
import { ServerRouterService } from './server-router.service';
import { ServerRoute } from './route-map';
import { AuthorizeService } from './authorize.service';

@Injectable({
  providedIn: 'root'
})
export class ServerClientService {

  constructor(
    private httpClient: HttpClient,
    private authorizeService: AuthorizeService,
    private serverRouter: ServerRouterService,
  ) { }

  serverCall<T>(route: ServerRoute, options: ServerCallOptions = {}) {
    let call = this.serverRouter.route(route);

    if (options.authorize !== undefined) {
      call = this.authorizeService.withAuthorization(call, options.authorize);
    }

    return this.httpClient.request<T>(call);
  }
}

export type ServerCallOptions = Partial<{
  authorize: User,
}>
