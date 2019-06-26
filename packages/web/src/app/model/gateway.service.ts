import { Injectable, Inject } from '@angular/core';
import { Environment } from '../environment';

@Injectable({
  providedIn: 'root',
})
export class GatewayService {
  constructor(@Inject(Environment) environment: Environment) {
    this.gateway = environment.gatewayUrl;
  }

  gateway = '';
}
