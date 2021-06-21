import React, {useState} from 'react';
import {View, Text, FlatList, StyleSheet} from 'react-native';
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
    <View style={styles.container}>
      {data ? (
        <FlatList
          data={data}
          renderItem={({item, index}) => (
            <VehicleListItem vehicle={item} currentIndex={index} />
          )}
          keyExtractor={() => generateShortId()}
          showsVerticalScrollIndicator={false}
          contentContainerStyle={styles.containerContentStyle}
          ItemSeparatorComponent={() => <View style={styles.separator} />}
        />
      ) : (
        <View>
          <Text>No data found !</Text>
        </View>
      )}
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginVertical: 20,
  },
  containerContentStyle: {
    // flexGrow: 1,
    flexDirection: 'column',
    flexWrap: 'wrap',
    paddingBottom: 8,
  },
  separator: {
    marginVertical: 10
  }
});

export default VehiclesList;
