import React, {useState} from 'react';
import {Text, TouchableOpacity, View} from 'react-native-ui-lib';
import {FlatList, StyleSheet} from 'react-native';
import {useDispatch} from 'react-redux';
import {
  responsiveHeight,
  responsiveWidth,
  responsiveScreenFontSize,
  generateShortId
} from '../utils';
import {colors} from '../config/styles';

type VehiclesListProps = {
  vehicle: Object; //to add a specific type later
  currentIndex: number;
};
function VehicleListItem({vehicle, index}: VehiclesListProps) {
    const {brand, imageUrl, model, version} = vehicle;


  return (
    <View marginV-20 centerH>
      <View>
        <Text>{brand}</Text>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  containerContentStyle: {
    flex: 1,
  },
});

export default VehicleListItem;
