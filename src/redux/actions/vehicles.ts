import {
  FETCH_DATA_REQUEST,
  FETCH_DATA_SUCCESS,
  FETCH_DATA_FAILURE,
  EMPTY_DATA_REQUEST
} from '../store/actionTypes';
import {
  EmptyDataRequest,
  FetchDataFailure,
  FetchDataSuccess,
  FetchDataRequest,
  FetchDataRequestPayload,
  FetchDataFailurePayload,
  FetchDataSuccessPayload,
} from '../../types/actions';

export const emptyDataRequest = (): EmptyDataRequest => ({
  type: EMPTY_DATA_REQUEST,
});

export const fetchDataRequest = (
  payload: FetchDataRequestPayload,
): FetchDataRequest => ({
  type: FETCH_DATA_REQUEST,
  payload,
});

export const fetchDataSuccess = (
  payload: FetchDataSuccessPayload,
): FetchDataSuccess => ({
  type: FETCH_DATA_SUCCESS,
  payload,
});

export const fetchDataFailure = (
  payload: FetchDataFailurePayload,
): FetchDataFailure => ({
  type: FETCH_DATA_FAILURE,
  payload,
});
