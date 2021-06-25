import {VehiclesActions} from 'types/actions';
import {VehiclesState} from 'types/state';
import {
  FETCH_DATA_REQUEST,
  FETCH_DATA_SUCCESS,
  FETCH_DATA_FAILURE,
  EMPTY_DATA_REQUEST,
} from '../store/actionTypes';

export const vehiclesState: VehiclesState = {
  vehicles: [],
  error: '',
  isLoading: false,
};

export default (state = vehiclesState, action: VehiclesActions) => {
  switch (action.type) {
    case EMPTY_DATA_REQUEST:
      return {
        ...state,
        vehicles: [],
        isLoading: true,
      };
    case FETCH_DATA_REQUEST:
      return {
        ...state,
        isLoading: true,
      };
    case FETCH_DATA_SUCCESS:
      const newData =
        state.vehicles.length === 0
          ? action.payload.data
          : [...state.vehicles, ...action.payload.data];
      return {
        ...state,
        vehicles: newData,
        isLoading: false,
        error: '',
      };
    case FETCH_DATA_FAILURE:
      return {
        ...state,
        error: action.payload.error,
        isLoading: false,
      };
    default:
      return {
        ...state,
      };
  }
};
