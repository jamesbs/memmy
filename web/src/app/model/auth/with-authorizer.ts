import { Token } from '@memmy/model';
import { omit } from 'ramda';
import mergeDeepRight from 'ramda/es/mergeDeepRight';
import { RequestExtension, requestExtensionKey } from '../http-request/request-extension';

export interface WithAuthorizer {
  authorization: Token;
}
export function authorizeWith(token: Token): RequestExtension<WithAuthorizer>;
export function authorizeWith<T>(token: Token, base: T): T & RequestExtension<WithAuthorizer>;
export function authorizeWith(token: Token, base = {}) {
  return mergeDeepRight(base, {
    [requestExtensionKey]: { authorization: token },
  });
}

export function getAuthorizer(authentication: WithAuthorizer) {
  return authentication.authorization;
}

export function withoutAuthorizer<S extends WithAuthorizer>(sub: S): Exclude<S, WithAuthorizer> {
  return omit(['authorization'], sub) as any;
}
