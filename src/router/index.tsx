import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';

import {VehiclesScreen, VehicleDetails} from '../screens';
import {VehicleFlowStackParamList} from '../types';
import {colors} from '../config';

const VehicleFlowStack = createStackNavigator<VehicleFlowStackParamList>();

export function Router() {
  return (
    <VehicleFlowStack.Navigator
      initialRouteName="VehiclesScreen"
      headerMode="screen">
      <VehicleFlowStack.Screen
        name="VehiclesScreen"
        component={VehiclesScreen}
        options={{headerShown: false}}
      />
      <VehicleFlowStack.Screen
        name="VehicleDetails"
        component={VehicleDetails}
      />
    </VehicleFlowStack.Navigator>
  );
}
