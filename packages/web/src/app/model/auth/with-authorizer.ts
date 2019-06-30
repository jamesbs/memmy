import { Identifiable, Token } from '@memmy/model';
import { omit } from 'ramda';

export interface WithAuthorizer {
  authorization: Token;
}

export function authorizeWith(token: Token, base = {}) {
  return {
    authorization: token,
    ...base,
  };
}

export function getAuthorizer(authentication: WithAuthorizer) {
  return authentication.authorization;
}

export function withoutAuthorizer<S extends WithAuthorizer>(sub: S): Exclude<S, WithAuthorizer> {
  return omit(['authorization'], sub) as any;
}
