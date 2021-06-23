import {combineReducers} from 'redux';

import vehicles from '../reducers/vehicles';

const rootReducer = combineReducers({
  vehicles,
});

export type AppState = ReturnType<typeof rootReducer>;

export default rootReducer;
