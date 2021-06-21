import React, {useState} from 'react';
import {TextField} from 'react-native-ui-lib';
import {View, StyleSheet, TouchableOpacity} from 'react-native';
import {useDispatch} from 'react-redux';
import {VehiclesList} from '../../components'
import {
  responsiveHeight,
  responsiveWidth,
  responsiveScreenFontSize,
} from '../../utils';
import {colors} from '../../config/styles';
import vehiclesData from '../../vehicleList.json';
function VehiclesScreen({navigation}) {
  const [vehicleName, setVehicleName] = useState('');

  const onTyping = (movieCurrentName: React.SetStateAction<string>) => {
    setVehicleName(movieCurrentName);
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.searchView}>
        <TextField
          style={styles.inputStyle}
          placeholder="Search for your eco-friendly car"
          underlineColorAndroid="transparent"
          enableErrors={false}
          hideUnderline
          placeholderTextColor="#bbb"
          onChangeText={(event: any) => {
            onTyping(event);
          }}
          // onSubmitEditing={onSearch}
          returnKeyType="search"
          clearButtonMode="while-editing"
        />
      </TouchableOpacity>
      <VehiclesList data={vehiclesData} />
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginHorizontal: 15,
    marginVertical: 50
  },
  searchView: {
    borderRadius: 35,
    borderColor: colors.darkGrey,
    height: responsiveHeight(5.5),
    backgroundColor: '#ffffff',
    shadowColor: 'rgba(0, 0, 0, 0.07)',
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowRadius: 30,
    shadowOpacity: 1,
    borderStyle: 'solid',
    borderWidth: 1,
    elevation: 2,
  },
  inputStyle: {
    height: responsiveHeight(5.5),
    paddingHorizontal: 20,
    color: colors.secondary,
    fontSize: responsiveScreenFontSize(14),
    textAlignVertical: 'center',
  },
});

export default VehiclesScreen;
