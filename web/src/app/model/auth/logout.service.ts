import { Injectable } from '@angular/core';
import { ServerRouterService } from '../server-router/server-router.service';
import { ILogout, hasSucceeded } from '@memmy/model';
import { DispatchService } from '../state/dispatch.service';
import { logoutSuccessful } from '../state/action/logout';
import { HomeRoutingService } from '../../home/home-routing.service';
import { AsHttpRequest } from '../http-request/as-http-request';
import { responseOf } from '../../core/response-of';

@Injectable({
  providedIn: 'root'
})
export class LogoutService {

  constructor(
    private serverRouter: ServerRouterService,
    private dispatch: DispatchService,
    private homeRouter: HomeRoutingService) {
    
  }

  private tryLogout: AsHttpRequest<ILogout> = this.serverRouter.routes.logout;

  private logoutSucceeded = () => {
    this.dispatch.createDispatcher(logoutSuccessful)();
    this.homeRouter.goToLoggedOut();
  }

  logout = token =>
    responseOf(this.tryLogout(token))
      .then(result => {
        if(hasSucceeded) {
          this.logoutSucceeded();
        }
      });
    
}
