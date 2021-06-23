import {all, call, delay, put, select, takeLatest} from 'redux-saga/effects';
import axios from 'axios';

import {ActionTypes} from 'literals';
import {fetchDataFailure, fetchDataSuccess} from '../actions';
import {settings} from 'config';

/**
 * FetchingData
 */
interface IResponse {
  data?: any;
}

export function* fetchDataAsync(action: any) {
  const state = yield select();
  const {limit, page} = state;
  const url = `${settings.API_URL}?limit=${limit}&page=${page}`;
  console.log('limit, page: ', limit, page);
  try {
    const response: IResponse = yield call(axios.get, url);
    console.log('response: ', response);
    let result = response.data;

    yield all([
      put(
        fetchDataSuccess({
          vehicles: result,
        }),
      ),
    ]);
  } catch (e) {
    yield put(
      fetchDataFailure({
        error: e,
      }),
    );
  }
}

/**
 * Vehicle Sagas
 */
export default function* root() {
  yield all([takeLatest(ActionTypes.FETCH_DATA_REQUEST, fetchDataAsync)]);
}
