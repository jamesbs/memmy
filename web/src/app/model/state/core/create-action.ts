import { ActionCreatorFactory, ActionSchema, ActionCreator } from './action-schema';

// TODO: get overload definitions to work, not working for some reason
export function createAction<
  T extends string,
  P extends object, 
  A extends any[]>(type: T, creatorFactory: ActionCreatorFactory<T, P, A>): ActionSchema<T, P, A> {

  return {
    type,
    creator: creatorFactory(type)
  }
}