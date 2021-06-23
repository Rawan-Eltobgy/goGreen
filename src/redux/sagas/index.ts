import { all, fork } from 'redux-saga/effects';

import vehicles from './vehicles';

/**
 * rootSaga
 */
export default function* rootSaga() {
  yield all([fork(vehicles), fork(vehicles)]);
}