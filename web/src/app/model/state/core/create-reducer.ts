import { Reducer, AnyAction } from 'redux';
import { ReducerSchema } from './reducer-schema';
import { on } from './on';
import { logoutSuccessful } from '../action/logout';

export function createReducer<S>(initialState: S, ...reducers: ReducerSchema<any, string, any, any[]>[]) {
    const reducerMap = reducers.reduce<{ [key: string]: Reducer<S, any> }>((reducerMap: any, schema) => {
      return {
        ...reducerMap,
        [schema.type]: schema.reducer
      }
    }, {});

    return (state = initialState, action: AnyAction) => {
      if(reducerMap[action.type] !== undefined) {
        return reducerMap[action.type](state, action);
      }

      return state;
    } 
  }
