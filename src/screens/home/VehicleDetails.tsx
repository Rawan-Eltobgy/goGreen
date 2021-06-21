import React, {useEffect} from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import {useNavigation, useRoute} from '@react-navigation/native';
import Icon from 'react-native-vector-icons/Ionicons';
import {colors} from '../../config';

function VehicleDetails() {
  const navigation = useNavigation();
  const route = useRoute();
  const {vehicle, currentIndex} = route.params;
  const {
    imageUrl,
    brand,
    model,
    version,
    connectorType,
    recommendedCharger,
    helpUrl,
  } = vehicle;

  navigation.setOptions({
    title: brand,
    headerTitleStyle: {fontSize: 20},
    headerRight: () => null,
    headerLeft: () => (
      <TouchableOpacity
        onPress={() => {
          navigation.goBack();
        }}
        style={{paddingHorizontal: 25, paddingVertical: 5}}>
          <Icon name="chevron-back" color={colors.black} size={25} />
      </TouchableOpacity>
    ),
  });

  return (
    <View style={{flex: 1, alignItems: 'center'}}>
      <Text>Hello WoHGHGrld</Text>
      <TouchableOpacity>
        <Text>Navigate</Text>
      </TouchableOpacity>
    </View>
  );
}

export default VehicleDetails;
