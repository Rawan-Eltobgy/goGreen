import {all, call, delay, put, select, takeLatest} from 'redux-saga/effects';
import axios from 'axios';
import {
  FETCH_DATA_REQUEST,
  FETCH_DATA_SUCCESS,
  FETCH_DATA_FAILURE,
} from '../store/actionTypes';
import {fetchDataFailure, fetchDataSuccess} from '../actions';
import {settings} from '../../config';

/**
 * FetchingData
 */
interface IResponse {
  data?: any;
}

export function* fetchVehiclesDataAsync(action: any) {
  const {limit, page} = action.payload;
  const url = `${settings.API_URL}?limit=${limit}&page=${page}`;
  try {
    const response: IResponse = yield call(axios.get, url);
    let result = response.data;

    yield all([
      put(
        fetchDataSuccess({
          data: result,
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
  yield all([takeLatest(FETCH_DATA_REQUEST, fetchVehiclesDataAsync)]);
}
