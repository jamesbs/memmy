import { Action } from 'redux';

export interface ActionSchema<T extends string, P extends object, A extends any[]> {
  type: T
  creator: ActionCreator<T, P, A>
}

export type ActionCreator<T extends string, P extends object, A extends any[]> = (...args: A) => Action<T> & P

export type ActionCreatorFactory<T extends string, P extends object, A extends any[]> = (type: T) => ActionCreator<T, P, A>
