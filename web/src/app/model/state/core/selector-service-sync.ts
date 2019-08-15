import { Store } from 'redux';
import { BehaviorSubject } from 'rxjs';
import { distinct } from 'rxjs/operators';

export const selectorServiceSync = <T, U>(selector: (state: T) => U) => (store: Store<T>) => {
  const initialState = selector(store.getState());
  const subject = new BehaviorSubject<U>(initialState);
  store.subscribe(() => subject.next(selector(store.getState())));
  return subject.pipe(distinct());
}