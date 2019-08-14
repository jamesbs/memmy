import { createAction } from '../core/create-action';
import { props } from '../core/props';
import { Token } from '@memmy/model';

export const loginSuccessful = createAction(
  '[Login page] Login Successful',
  props<Token>()
);
