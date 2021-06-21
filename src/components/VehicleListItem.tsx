import React, {useState} from 'react';
import {Image, Text, StyleSheet, View} from 'react-native';
import {useDispatch} from 'react-redux';
import Icon from 'react-native-vector-icons/SimpleLineIcons';
import {
  responsiveHeight,
  responsiveWidth,
  responsiveScreenFontSize,
  generateShortId,
} from '../utils';
import {colors} from '../config/styles';

type VehiclesListProps = {
  vehicle: Object; //to add a specific type later
  currentIndex: number;
};
function VehicleListItem({vehicle, index}: VehiclesListProps) {
  const {brand, imageUrl, model, version} = vehicle;

  return (
    <View style={styles.containerContent}>
      <View style={styles.imageContainer}>
        <Image
          style={styles.vehicleImage}
          source={{uri: `${imageUrl}`}}
          resizeMode="center"
        />
      </View>
      <View style={styles.detailsContainer}>
        <Text style={styles.brandText}>{brand}</Text>
        <Text style={styles.modelText}>{model}</Text>
        <Icon.Button name="energy" backgroundColor="#fff" solid>
    <Text style={{ fontFamily: 'Arial', fontSize: 15 }}>
     {version}
    </Text>
  </Icon.Button>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  containerContent: {
    flex: 1,
    flexDirection: 'row',
    width: '100%',
    backgroundColor: colors.white,
    borderRadius: responsiveWidth(5),
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  imageContainer: {
    backgroundColor: colors.white,
    borderRadius: responsiveWidth(5),
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 6,
    },
    shadowOpacity: 0.37,
    shadowRadius: 7.49,

    elevation: 12,
  },
  vehicleImage: {
    width: responsiveWidth(40),
    height: responsiveHeight(15),
    borderRadius: responsiveWidth(5),
  },
  detailsContainer: {
    flex: 1,
    paddingHorizontal: 15,
    paddingVertical: 10
    // justifyContent: 'center' 
  },
  brandText: {
    fontSize: responsiveScreenFontSize(16),
    fontWeight: 'bold',
    letterSpacing: 1,
    // lineHeight: responsiveScreenFontSize(14)
  },
  modelText: {
    fontSize: responsiveScreenFontSize(14),
    color: colors.tabsTextColor,
    // fontWeight: 'bold',
  },
});

export default VehicleListItem;
