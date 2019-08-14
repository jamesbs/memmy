
import store, { StoreProvider } from '../store/store';
import { ActionSchema, ActionCreator } from './action-schema';
import { Dispatcher } from './dispatcher';

export const createDispatcherContainer = (store: StoreProvider) => {
  return <A extends ActionSchema<string, ActionCreator<string, any, any[]>>>(actionSchema: A): Dispatcher<A['creator']> => {
    return (...p) => {
      store.dispatch(actionSchema.creator(...p));
    };
  }
}

export default createDispatcherContainer(store)

export type CreateDispatcherProvider = ReturnType<typeof createDispatcherContainer>