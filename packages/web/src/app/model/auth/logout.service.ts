import { Injectable } from '@angular/core';
import { ServerRouterService } from '../server-router/server-router.service';
import { ThroughHttpClient } from 'src/app/core/through-http-client';
import { ILogout, hasSucceeded } from '@memmy/model';
import { HttpClient } from '@angular/common/http';
import { responseOf } from 'src/app/core/response-of';
import { DispatchService } from '../state/dispatch.service';
import { HomeRoutingService } from 'src/app/home/home-routing.service';
import { logoutSuccessful } from '../state/action/logout';

@Injectable({
  providedIn: 'root'
})
export class LogoutService {

  constructor(
    private httpClient: HttpClient,
    private serverRouter: ServerRouterService,
    private dispatch: DispatchService,
    private homeRouter: HomeRoutingService) {
    
  }

  private tryLogout: ThroughHttpClient<ILogout> = token => this.httpClient.request(this.serverRouter.routes.logout(token));

  private logoutSucceeded = () => {
    this.dispatch.createDispatcher(logoutSuccessful)();
    this.homeRouter.goToLoggedOut();
  }

  logout = token =>
    responseOf(this.tryLogout(token))
      .subscribe(result => {
        if(hasSucceeded(result)) {
          console.log('logout succeeded!')
          this.logoutSucceeded();
        }
      })
    
}
