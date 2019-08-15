
import store, { StoreProvider } from '../store/store';
import { ActionSchema } from '../core/action-schema';
import { Dispatcher } from '../core/dispatcher';

export const createDispatcherContainer = (store: StoreProvider) => {
  return <A extends ActionSchema<string, any, any[]>>(actionSchema: A): Dispatcher<A['creator']> => {
    return (...p) => {
      store.dispatch(actionSchema.creator(...p));
    };
  }
}

export type CreateDispatcherProvider = ReturnType<typeof createDispatcherContainer>

export default createDispatcherContainer(store);