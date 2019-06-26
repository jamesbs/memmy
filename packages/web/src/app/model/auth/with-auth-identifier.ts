import { Identifiable } from '@memmy/model';
import { omit } from 'ramda';

export interface WithAuthIdentifier {
  authorization: Identifiable;
}

export function getIdentifier(authentication: WithAuthIdentifier) {
  return authentication.authorization;
}

export function withoutAuthIdentifier<S extends WithAuthIdentifier>(sub: S): Exclude<S, WithAuthIdentifier> {
  return omit(['authorization'], sub) as any;
}
