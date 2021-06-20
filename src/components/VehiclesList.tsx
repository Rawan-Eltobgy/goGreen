import React, {useState} from 'react';
import {Text, TouchableOpacity, View} from 'react-native-ui-lib';
import {FlatList, StyleSheet} from 'react-native';
import {useDispatch} from 'react-redux';
import {VehicleListItem} from '../components';
import {
  responsiveHeight,
  responsiveWidth,
  responsiveScreenFontSize,
  generateShortId
} from '../utils';
import {colors} from '../config/styles';

type VehiclesListProps = {
  data?: Array<Object>;
};
function VehiclesList({data}: VehiclesListProps) {
  //   const {brand, model, version} = data;


  return (
    <View marginV-20 centerH>
      {data ? (
        <FlatList
          data={data}
          renderItem={({item,index}) => <VehicleListItem vehicle={item} currentIndex={index} />}
          // style={{marginTop: 10}}
          keyExtractor={() => generateShortId()}
          // style={{ flex: 1 }}
          showsVerticalScrollIndicator={false}
          contentContainerStyle={styles.containerContentStyle}
          ItemSeparatorComponent={() => <View marginV-15 />}
        />
      ) : (
        <View center>
          <Text>No data found !</Text>
        </View>
      )}
    </View>
  );
}
const styles = StyleSheet.create({
  containerContentStyle: {
    flexGrow: 1,
    flexDirection: 'column',
    flexWrap: 'wrap',
    paddingBottom: 8,
  },
});

export default VehiclesList;
