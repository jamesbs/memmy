import { createAction, props } from '@ngrx/store';
import { Token } from '@memmy/model';

export const loginSuccessful = createAction(
  '[Login page] Login Successful',
  props<Token>()
);
