import { ActionCreator } from './action-schema';

export type Dispatcher<A extends ActionCreator<string, any, any[]>> = (...p: Parameters<A>) => void;
