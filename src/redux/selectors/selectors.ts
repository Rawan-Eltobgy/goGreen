import {createSelector} from 'reselect';

import {AppState} from '../reducers/index';

const getPending = (state: AppState) => state.vehiclesReducer.isLoading;

const getData = (state: AppState) => state.vehiclesReducer.vehicles;

const getError = (state: AppState) => state.vehiclesReducer.error;

export const getDataSelector = createSelector(getData, data => data);

export const getPendingSelector = createSelector(
  getPending,
  isLoading => isLoading,
);

export const getErrorSelector = createSelector(getError, error => error);
