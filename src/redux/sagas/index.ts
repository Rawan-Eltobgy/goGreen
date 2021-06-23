import {all, fork} from 'redux-saga/effects';

import vehiclesSaga from './vehicles';

/**
 * rootSaga
 */
export default function* rootSaga() {
  yield all([fork(vehiclesSaga)]);
}
