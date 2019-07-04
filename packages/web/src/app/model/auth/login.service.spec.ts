import { TestBed } from '@angular/core/testing';

import { LoginService } from './login.service';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { Environment } from 'src/app/environment';
import { ServerRouterService } from '../server-router/server-router.service';
import { GatewayService } from '../gateway.service';
import { DispatchService } from '../state/dispatch.service';
import { HomeRoutingService } from 'src/app/home/home-routing.service';
import { AuthorizeService } from './authorize.service';
import { Store } from '@ngrx/store';
import { provideMockStore } from '@ngrx/store/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { loginSuccessful } from '../state/action/login';

describe('LoginService', () => {

  it('should dispatch login succeeded action once', () => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule,
        RouterTestingModule,
      ],
      providers: [
        { provide: Environment, useValue: { gatewayUrl: 'localtest' }},
        provideMockStore(),
        ServerRouterService,
        GatewayService,
        DispatchService,
        HomeRoutingService,
        AuthorizeService,
      ],
    });


    const httpMock = TestBed.get(HttpTestingController) as HttpTestingController;
    const service = TestBed.get(LoginService) as LoginService;    
    const mockCredentials = { token: 'mock hash'};
    const store = TestBed.get(Store);

    spyOn(store, 'dispatch').and.callThrough();

    service.login({ username: 'mock name', password: 'mock password' });

    httpMock.expectOne('localtest/login')
      .flush(mockCredentials);

    expect(store.dispatch).toHaveBeenCalledTimes(1);
    expect(store.dispatch).toHaveBeenCalledWith(loginSuccessful(mockCredentials));
  });

  // add test for navigating to dashboard
});
