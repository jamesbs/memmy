import { Store } from 'redux';

export const connectStore = <T, U>(selector: (state: T) => U): (store: Store<T>) => () => U =>
(store: Store<T>) => () => selector(store.getState());