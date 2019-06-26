import { HttpRequest } from '@angular/common/http';
import { WithAuthIdentifier } from './auth/with-auth-identifier';

export type RoutedRequest<T, U = unknown>
  = (arg?: Exclude<T, WithAuthIdentifier>) => HttpRequest<U>;
