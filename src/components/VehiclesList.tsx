import React, {useEffect, useState} from 'react';
import {
  ActivityIndicator,
  View,
  Text,
  FlatList,
  StyleSheet,
  RefreshControl,
  TextInput,
} from 'react-native';

import {useDispatch, useSelector} from 'react-redux';
import {VehicleListItem} from '../components';
import {fetchDataRequest} from '../redux/actions/vehicles';
import {
  responsiveHeight,
  responsiveWidth,
  responsiveScreenFontSize,
  generateShortId,
} from '../utils';
import {colors} from '../config/styles';
import {VehiclesState} from '../types/state';

function VehiclesList() {
  const [pages, setPages] = useState(0);
  const [currentPage, setCurrentPage] = useState(1);
  const [limit, setLimit] = useState(7);
  const [query, setQuery] = useState('');

  const dispatch = useDispatch();

  const vehiclesState: VehiclesState = useSelector(
      (state: any) => state.vehiclesReducer,
    ),
    vehiclesData = vehiclesState?.vehicles,
    error = vehiclesState?.error,
    isLoading = vehiclesState?.isLoading;

  useEffect(() => {
    const fetchData = async () => {
      await dispatch(
        fetchDataRequest({limit: limit, page: currentPage, filter: query}),
      );
    };
    fetchData();
  }, [currentPage, limit]);

  useEffect(() => {
    setCurrentPage(1);
    const delayDebounceFn = setTimeout(() => {
      dispatch(fetchDataRequest({limit: limit, page: 1, filter: query}));
    }, 2000);

    return () => clearTimeout(delayDebounceFn);
  }, [query]);

  const handleRefresh = () => {
    setCurrentPage(1);
    setPages(0);
  };


  function renderHeader() {
    return (
      <View style={styles.searchView}>
        <TextInput
          style={styles.inputStyle}
          placeholder="Search using brand or model"
          autoCapitalize="none"
          autoCorrect={false}
          value={query}
          onChangeText={queryText => setQuery(queryText)}
        />
      </View>
    );
  }
  return (
    <View style={styles.container}>
      {renderHeader()}
      {isLoading && currentPage === 1 ? (
        <ActivityIndicator style={{flex: 1}} />
      ) : (
        <>
          {vehiclesData?.length ? (
            <FlatList
              data={vehiclesData}
              renderItem={({item, index}) => (
                <VehicleListItem vehicle={item} currentIndex={index} />
              )}
              keyExtractor={item => item?.id + generateShortId()}
              showsVerticalScrollIndicator={false}
              contentContainerStyle={styles.containerContentStyle}
              ItemSeparatorComponent={() => <View style={styles.separator} />}
              onEndReached={(d: {distanceFromEnd: number}) => {
                if (d.distanceFromEnd > 0) {
                  setCurrentPage(prev => prev + 1);
                }
              }}
              onEndReachedThreshold={0.1}
              refreshControl={
                <RefreshControl
                  refreshing={isLoading}
                  onRefresh={handleRefresh}
                />
              }
            />
          ) : (
            <View style={styles.noDataFound}>
              <Text style={styles.noDataFoundText}>No data found !</Text>
            </View>
          )}
        </>
      )}
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginVertical: 20,
  },
  searchView: {
    // display: 'flex',
    borderRadius: 35,
    borderColor: colors.white,
    height: responsiveHeight(5.5),
    width: '100%',
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
    marginVertical: 20,
  },
  inputStyle: {
    height: responsiveHeight(5.5),
    paddingHorizontal: 20,
    color: colors.black,
    fontSize: responsiveScreenFontSize(14),
    textAlignVertical: 'center',
    paddingVertical: 0,
  },
  inputStyleFocused: {
    borderColor: colors.green,
  },
  containerContentStyle: {
    alignItems: 'center',
    flexDirection: 'column',
    paddingBottom: 5,
  },
  separator: {
    marginVertical: 10,
  },
  noDataFound: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  noDataFoundText: {
    fontSize: responsiveScreenFontSize(20),
    fontWeight: 'bold',
  },
});

export default VehiclesList;
