import { ActionSchema, ActionCreator } from './action-schema';
import { Reducer } from 'redux';

export function on<T extends string, P extends object, A extends any[]>(
  schema: ActionSchema<T, P, A>, 
  reducer: Reducer<any, ReturnType<ActionCreator<T, P, A>>>) {
  return {
    type: schema.type,
    reducer,
  };
}