import { createAction } from '../core/create-action';
import { justType } from '../core/just-type';

export const logoutSuccessful = createAction('Logout Successful', justType)