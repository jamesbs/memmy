import createDispatcher, { CreateDispatcherProvider } from './create-dispatcher';
import { ActionSchema, ActionCreator } from './action-schema';

export const dispatchContainer = (createDispatcherProvider: CreateDispatcherProvider) => { 
  return <T extends string, P extends object, A extends any[]>(actionSchema: ActionSchema<T, ActionCreator<T, P, A>>, ...args: A) => createDispatcherProvider(actionSchema)(...args)
}

export default dispatchContainer(createDispatcher);