import {ActionTypes} from 'literals';
import {
  FetchDataFailure,
  FetchDataSuccess,
  FetchDataRequest,
  FetchDataRequestPayload,
  FetchDataFailurePayload,
  FetchDataSuccessPayload,
} from '../../types/actions';

export const fetchDataRequest = (
  payload: FetchDataRequestPayload,
): FetchDataRequest => ({
  type: ActionTypes.FETCH_DATA_REQUEST,
  payload,
});

export const fetchDataSuccess = (
  payload: FetchDataSuccessPayload,
): FetchDataSuccess => ({
  type: ActionTypes.FETCH_DATA_SUCCESS,
  payload,
});

export const fetchDataFailure = (
  payload: FetchDataFailurePayload,
): FetchDataFailure => ({
  type: ActionTypes.FETCH_DATA_FAILURE,
  payload,
});
