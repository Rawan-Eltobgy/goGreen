
import {VehiclesActions} from 'types/actions';
import {VehiclesState} from 'types/state';
import {
  FETCH_DATA_REQUEST,
  FETCH_DATA_SUCCESS,
  FETCH_DATA_FAILURE,
} from '../store/actionTypes';

export const vehicleState: VehiclesState = {
  vehicles: [],
  error: '',
  isLoading: false,
};

export default (state = vehicleState, action: VehiclesActions) => {
  switch (action.type) {
    case FETCH_DATA_REQUEST:
      return {
        ...state,
        isLoading: true,
      };
    case FETCH_DATA_SUCCESS:
      return {
        ...state,
        vehicles: action.payload.data,
        isLoading: false,
        error: null,
      };
    case FETCH_DATA_FAILURE:
      return {
        ...state,
        vehicles: [],
        error: action.payload.error,
        isLoading: false,
      };
    default:
      return {
        ...state,
      };
  }
};
