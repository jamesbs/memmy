import { TestBed } from '@angular/core/testing';

import { LoginService } from './login.service';
import { HttpClientModule } from '@angular/common/http';
import { Environment } from 'src/app/environment';
import { ServerRouterService } from '../server-router/server-router.service';
import { GatewayService } from '../gateway.service';
import { DispatchService } from '../state/dispatch.service';
import { HomeRoutingService } from 'src/app/home/home-routing.service';
import { AuthorizeService } from './authorize.service';
import { StoreModule } from '@ngrx/store';
import { rootReducer } from '../state/store/root';
import { RouterTestingModule } from '@angular/router/testing';

describe('LoginService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientModule,
        StoreModule.forRoot(rootReducer),
        RouterTestingModule,
      ],
      providers: [
        { provide: Environment, useValue: { gatewayUrl: 'localtest' }},
        ServerRouterService,
        GatewayService,
        DispatchService,
        HomeRoutingService,
        AuthorizeService,
      ],
    })
  });

  it('should be created', () => {
    const service: LoginService = TestBed.get(LoginService);
    expect(service).toBeTruthy();
  });
});
