import { Injectable } from '@angular/core';
import { HttpRequest } from '@angular/common/http';
import { token } from '@memmy/model';
import { RoutedRequest } from '../routed-request';
import { WithAuthorizer, getAuthorizer, withoutAuthorizer } from './with-authorizer';

@Injectable({
  providedIn: 'root'
})
export class AuthorizeService {

  constructor() { }

  withAuthorization<T, U = unknown>(requestGenerator: RoutedRequest<T, U>) {
    return (argsWithAuth: T & WithAuthorizer) => {
      const credentials = getAuthorizer(argsWithAuth);

      return requestGenerator(withoutAuthorizer(argsWithAuth)).clone({
        setHeaders: {
          Authorization: `Bearer ${token(credentials)}`,
        },
      });
    };
  }
}
