import { TestBed } from '@angular/core/testing';

import { LoginService } from './login.service';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { ServerRouterService } from '../server-router/server-router.service';
import { GatewayService } from '../gateway.service';
import { DispatchService } from '../state/dispatch.service';
import { HomeRoutingService } from 'src/app/home/home-routing.service';
import { AuthorizeService } from './authorize.service';
import { Store } from '@ngrx/store';
import { provideMockStore } from '@ngrx/store/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { loginSuccessful } from '../state/action/login';
import { ActivatedRoute, ActivatedRouteSnapshot, RouterModule, Router } from '@angular/router';
import { routes, HomeRoutingModule } from 'src/app/home/home-routing.module';
import { appInjector } from 'src/app/app-injector';
import { Injector } from '@angular/core';
import { AppRoutingModule } from 'src/app/app-routing.module';
import { APP_BASE_HREF } from '@angular/common';

describe('LoginService', () => {
  afterAll(() => {
    appInjector.injector = undefined;
  });

  it('should dispatch login succeeded action once', () => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule,
        RouterTestingModule,
      ],
      providers: [
        provideMockStore(),
        ServerRouterService,
        { provide: GatewayService, useValue: { gateway: 'localtest' }},
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


  it('should dispatch login succeeded action once', () => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule,
        RouterTestingModule,
        AppRoutingModule,
        HomeRoutingModule,
      ],
      providers: [
        provideMockStore(),
        ServerRouterService,
        { provide: GatewayService, useValue: { gateway: 'localtest' }},
        { provide: APP_BASE_HREF, useValue: '/' },
        DispatchService,
        HomeRoutingService,
        AuthorizeService,
      ],
    });


    const httpMock = TestBed.get(HttpTestingController) as HttpTestingController;
    const loginService = TestBed.get(LoginService) as LoginService;    
    const homeRoutingService = TestBed.get(HomeRoutingService) as HomeRoutingService;
    appInjector.injector = TestBed.get(Injector);

    spyOn(homeRoutingService, 'goToDashboard').and.callThrough();

    loginService.login({ username: 'mock name', password: 'mock password' });

    httpMock.expectOne('localtest/login')
      .flush({ token: 'mock hash'});

    expect(homeRoutingService.goToDashboard).toHaveBeenCalledTimes(1);
  });
});
