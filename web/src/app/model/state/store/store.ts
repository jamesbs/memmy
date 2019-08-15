import { createStore, combineReducers } from 'redux';
import { rootReducer } from './root';

const store = createStore(
  combineReducers(rootReducer),
  (window as any).__REDUX_DEVTOOLS_EXTENSION__ && (window as any).__REDUX_DEVTOOLS_EXTENSION__()
);

export const storeContainer = () => store

export type Store = typeof store;
export type StoreProvider = ReturnType<typeof storeContainer>;

export default storeContainer();