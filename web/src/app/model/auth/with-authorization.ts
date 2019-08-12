import { WithAuthorizer, getAuthorizer, withoutAuthorizer } from "./with-authorizer";
import { token } from '@memmy/model';
import { RequestExtension, extension, withoutExtension } from '../http-request/request-extension';
import { RoutedRequest } from '../http-request/routed-request';
import { mergeDeepRight } from 'ramda';

export function withAuthorization<T>(routedRequest: RoutedRequest<T>): RoutedRequest<T & RequestExtension<WithAuthorizer>>  {
  return args => {
    return mergeDeepRight(
      routedRequest(withoutExtension(args)),
      {
        options: {
          headers: {
            Authorization: `Bearer ${token(getAuthorizer(extension(args)))}`,
          },
        },
      },
    )
  }
}