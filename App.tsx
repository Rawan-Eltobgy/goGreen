import React from 'react';
import 'react-native-gesture-handler';
import {Provider} from 'react-redux';
import {NavigationContainer} from '@react-navigation/native';

import {Router} from './src/router';

const App = () => {
  return <NavigationContainer>{<Router />}</NavigationContainer>;
};

export default App;