import { createStore, combineReducers } from 'redux';
import { rootReducer } from './root';

export default createStore(
  combineReducers(rootReducer),
)
