import {combineReducers} from 'redux';

import vehiclesReducer from '../reducers/vehicles';

const rootReducer = combineReducers({
  vehiclesReducer,
});

export type AppState = ReturnType<typeof rootReducer>;

export default rootReducer;
