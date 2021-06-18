import React from 'react';
import {Text, View} from 'react-native';
import 'react-native-gesture-handler';
import {Provider} from 'react-redux';
// import {NavigationContainer} from '@react-navigation/native';

// import {AppContainer} from './src/router';
// import store from './src/redux';

const App = () => {
  return (
    // <NavigationContainer>
    //   {
    //     <Provider store={store}>
    //       <AppContainer />
    //     </Provider>
    //   }
    // </NavigationContainer>
    <View style={{padding: 100}}>
      <Text>Hello world</Text>
      </View>
  );
};

export default App;