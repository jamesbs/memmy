import { ActionCreator, Creator, Store } from '@ngrx/store';
import { RootState } from './store/root';
import { Injectable } from '@angular/core';

export type Dispatcher<A extends ActionCreator<string, Creator>>
  = (...p: Parameters<A>) => void;

@Injectable({
  providedIn: 'root',
})
export class DispatchService {
  constructor(private store: Store<RootState>) { }

  createDispatcher<A extends ActionCreator<string, Creator>>(actionCreator: A): Dispatcher<A> {
    return (...p) => {
      // type arguments don't line up somehow
      this.store.dispatch(actionCreator(...p) as any);
    };
  }
}
