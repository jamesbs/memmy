import { Reducer } from 'redux';
import { ActionCreator } from './action-schema';

export type ReducerSchema<S, T extends string, P extends object, A extends any[]> = {
  type: T,
  reducer: Reducer<S, ReturnType<ActionCreator<T, P, A>>>
}