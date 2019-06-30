import { HttpRequest } from '@angular/common/http';
import { WithAuthorizer } from './auth/with-authorizer';

export type RoutedRequest<T, U = unknown>
  = (arg?: Exclude<T, WithAuthorizer>) => HttpRequest<U>;
