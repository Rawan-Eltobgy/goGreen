import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
function VehiclesScreen({navigation}) {
  return (
    <View style={{padding: 50}}>
      <Text>First Screen</Text>
      <TouchableOpacity
        onPress={() => {
          navigation.navigate('VehicleDetails');
        }}>
        <Text>Navigate</Text>
      </TouchableOpacity>
    </View>
  );
}

export default VehiclesScreen;
