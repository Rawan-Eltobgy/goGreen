import React, {useEffect} from 'react';
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';
import LinearGradient from 'react-native-linear-gradient'
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
    <View style={styles.container}>
      {/* <View style={styles.vehicleMainDetailsContainer}> */}
      <LinearGradient pointerEvents="none" colors={[colors.greenGradient, colors.limeGreen]} style={styles.vehicleMainDetailsContainer}>
      <Text>Navigate</Text>

</LinearGradient>
      {/* </View> */}
      <TouchableOpacity>
        <Text>Navigate</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 10,
    flex: 1,
    alignItems: 'center',
  },
  vehicleMainDetailsContainer: {
    backgroundColor: colors.limeGreen,
    borderRadius: 20,
    height: 100,
    width: 100
  },
});
export default VehicleDetails;
