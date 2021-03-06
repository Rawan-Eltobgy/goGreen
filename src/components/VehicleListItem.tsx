import React from 'react';
import {Image, Text, StyleSheet, View, TouchableOpacity} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import Icon from 'react-native-vector-icons/SimpleLineIcons';
import {
  responsiveHeight,
  responsiveWidth,
  responsiveScreenFontSize,
} from '../utils';
import {colors} from '../config/styles';
import {Vehicle} from '../types/state';

type VehiclesListProps = {
  vehicle: Vehicle;
  currentIndex: number;
};
function VehicleListItem({vehicle, currentIndex}: VehiclesListProps) {
  const {brand, imageUrl, model, version} = vehicle;
  const navigation = useNavigation();

  return (
    <View style={styles.containerContent}>
      <View style={styles.imageContainer}>
        {imageUrl && (
          <Image
            style={styles.vehicleImage}
            source={{uri: `${imageUrl}`}}
            resizeMode="center"
          />
        )}
      </View>
      <View style={styles.detailsContainer}>
        <Text style={styles.brandText}>{brand}</Text>
        <Text style={styles.modelText}>{model}</Text>
        <View style={styles.energyContainer}>
          <Icon.Button
            name="energy"
            backgroundColor={colors.limeGreen}
            color="#fff"
            size={15}>
            <Text style={styles.versionText}>{version}</Text>
          </Icon.Button>
        </View>
        <TouchableOpacity
          style={styles.showMoreContainer}
          onPress={() => {
            navigation.navigate('VehicleDetails', {
              vehicle,
              currentIndex,
            });
          }}>
          <Text style={styles.moreText}>View Details</Text>
          <Icon name="arrow-right-circle" color={colors.black} size={15} />
        </TouchableOpacity>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  containerContent: {
    flexDirection: 'row',
    width: '95%',
    backgroundColor: colors.white,
    borderRadius: responsiveWidth(5),
    shadowColor: colors.black,
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
    justifyContent: 'center',
    borderRadius: responsiveWidth(5),
    shadowColor: colors.black,
    shadowOffset: {
      width: 0,
      height: 6,
    },
    shadowOpacity: 0.37,
    shadowRadius: 7.5,
    elevation: 15,
  },
  vehicleImage: {
    width: responsiveWidth(40),
    height: responsiveHeight(15),
    borderRadius: responsiveWidth(5),
  },
  detailsContainer: {
    flex: 1,
    paddingHorizontal: 15,
    paddingVertical: 15,
  },
  brandText: {
    fontSize: responsiveScreenFontSize(16),
    fontWeight: 'bold',
    letterSpacing: 1,
  },
  modelText: {
    fontSize: responsiveScreenFontSize(14),
    color: colors.tabsTextColor,
    marginBottom: 5,
  },
  versionText: {
    fontSize: responsiveScreenFontSize(14),
    color: colors.white,
  },
  energyContainer: {
    marginVertical: 5,
  },
  showMoreContainer: {
    flexDirection: 'row',
    marginTop: 10,
  },
  moreText: {
    fontSize: responsiveScreenFontSize(12),
    fontWeight: 'bold',
    color: colors.black,
    marginRight: 10,
  },
});

export default VehicleListItem;
