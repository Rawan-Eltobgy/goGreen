import {ActionTypes} from 'literals';
import {Action} from 'redux';
import {VehiclesState, Vehicle } from './state'


export interface FetchDataRequestPayload {
  page: string;
  limit: string;
}

export interface FetchDataSuccessPayload {
  data: Vehicle[];
}

export interface FetchDataFailurePayload {
  error: Error;
}

export interface FetchDataRequest extends Action {
  type: ActionTypes.FETCH_DATA_REQUEST; // !! here we assign the string literal type of the constant
  payload: FetchDataRequestPayload;
}

export interface FetchDataSuccess extends Action {
  type: ActionTypes.FETCH_DATA_SUCCESS; // !! here we assign the string literal type of the constant
  payload: FetchDataSuccessPayload;
}

export interface FetchDataFailure extends Action {
  type: ActionTypes.FETCH_DATA_FAILURE; // !! here we assign the string literal type of the constant
  payload: FetchDataFailurePayload;
}

export type VehiclesActions =
  | FetchDataSuccess
  | FetchDataFailure
  | FetchDataRequest;
