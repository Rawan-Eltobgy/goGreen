import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';

import {VehiclesScreen, VehicleDetails} from '../screens';
import {VehicleFlowStackParamList} from '../types';

const VehicleFlowStack = createStackNavigator<VehicleFlowStackParamList>();

export function Router() {
  return (
    <VehicleFlowStack.Navigator
      initialRouteName="VehiclesScreen"
      headerMode="screen"
      screenOptions={{
        headerTransparent: true,
        headerTitle: '',
        headerTruncatedBackTitle: '',
        headerStyle: {
          height: 60,
          backgroundColor: 'transparent',
        },
      }}>
      <VehicleFlowStack.Screen
        name="VehiclesScreen"
        component={VehiclesScreen}
      />
      <VehicleFlowStack.Screen
        name="VehicleDetails"
        component={VehicleDetails}
        initialParams={{source: 'VehiclesScreen'}}
        options={{headerShown: false}}
      />
    </VehicleFlowStack.Navigator>
  );
}