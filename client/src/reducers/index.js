import { combineReducers } from 'redux';

import auth from './auth';
import pins from './pins';

export const reducers = combineReducers({ auth, pins });
