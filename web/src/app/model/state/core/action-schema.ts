import { Action } from 'redux';

export interface ActionSchema<T extends string, AC extends ActionCreator<T, object, any[]>> {
  type: T
  creator: AC
}

export type ActionCreator<T extends string, P extends object, A extends any[]> = (...args: A) => Action<T> & P

export type ActionCreatorFactory<AC extends ActionCreator<string, any, any[]>> = (type: string) => AC
