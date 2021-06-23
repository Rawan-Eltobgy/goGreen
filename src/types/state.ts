import {Dispatch} from 'redux';

export interface UsersState {
  isAuthenticated: boolean;
  loginToken: string;
}
export interface Vehicle {
  id: string;
  brand: string;
  model: string;
  version: string;
  category: string;
  connectorType: string;
  recommendedCharger: string;
  chargeSpeedInKw?: number;
  helpUrl: string;
  imageUrl: string;
  autochargeCapable?: boolean;
  externalParameters?: Object;
  chargeCurve?: string;
}

export interface VehiclesState {
  vehicles: Vehicle[];
  error: string;
  isLoading: boolean;
}

export interface WithDispatch {
  dispatch: Dispatch;
}
