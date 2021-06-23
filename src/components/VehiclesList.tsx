import React, {useEffect, useState} from 'react';
import {
  ActivityIndicator,
  View,
  Text,
  FlatList,
  StyleSheet,
  RefreshControl,
  Dimensions,
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
// import vehiclesData from '../vehicleList.json';
import {VehiclesState} from '../types/state';
import {render} from '@testing-library/react';

// type VehiclesListProps = {
//   data?: Array<Object>;
//   loading: boolean;
// };
const VIEWABILITY_CONFIG = {
  minimumViewTime: 3000,
  viewAreaCoveragePercentThreshold: 100,
  waitForInteraction: true,
};

function VehiclesList() {
  //   const {brand, model, version} = data;
  const [vehicles, setVehicles] = useState([]);
  const [hasMoreToLoad, setHasMoreToLoad] = useState(true);
  const [pages, setPages] = useState(0);
  const [currentPage, setCurrentPage] = useState(1);
  const [limit, setLimit] = useState(7);
  const dispatch = useDispatch();

  const vehiclesState: VehiclesState = useSelector(
      (state: any) => state.vehiclesReducer,
    ),
    vehiclesData = vehiclesState?.vehicles,
    error = vehiclesState?.error,
    isLoading = vehiclesState?.isLoading;

  useEffect(() => {
    console.log(
      'currentPage, pages',
      typeof currentPage,
      typeof pages,
      currentPage,
      pages,
    );
    const fetchData = async () => {
      await dispatch(fetchDataRequest({limit: limit, page: currentPage}));
    };
    fetchData();
  }, [currentPage, limit]);

  useEffect(() => {
    console.log("log this shit: ",vehicles, vehiclesData)

    if (vehicles.length > 0 && vehiclesData.length < limit) {
      setHasMoreToLoad(false);
    }
    if (vehicles.length === 0) {
      setVehicles(vehiclesData);
    } else {
      setVehicles([...vehicles, ...vehiclesData]);
    }
  }, [vehiclesData]);

  const handleRefresh = () => {
    setCurrentPage(1);
    setPages(0);
  };

  const loadMoreResults = () => {
    console.log('LOAD MORE RESULTS');
    setCurrentPage(currentPage => currentPage + 1);
  };

  //get current page data
  const indexOfLastItem = currentPage * limit;
  const indexOfFirstItem = indexOfLastItem - limit;
  const currentItems = vehicles.slice(indexOfFirstItem, indexOfLastItem);
  // console.log(
  //   'current Items, index of first, indexOf lat, pages, currentPage: ',
  //   // currentItems,
  //   // indexOfFirstItem,
  //   // indexOfLastItem,
  //   // pages,
  //   // currentPage,
  //   vehiclesData,
  //   isLoading,
  //   error,
  //   vehiclesState,
  //   vehiclesData,
  //   hasMoreToLoad,
  // );
  console.log("My current vehicle: ", vehicles)
  return (
    <View style={styles.container}>
      {isLoading ? (
        <ActivityIndicator />
      ) : (
        <>
          {vehicles ? (
            <FlatList
              data={vehicles}
              renderItem={({item, index}) => (
                <VehicleListItem vehicle={item} currentIndex={index} />
              )}
              keyExtractor={() => generateShortId()}
              showsVerticalScrollIndicator={false}
              contentContainerStyle={styles.containerContentStyle}
              ItemSeparatorComponent={() => <View style={styles.separator} />}
              onEndReached={(d: {distanceFromEnd: number}) => {
                if (d.distanceFromEnd > 0 && hasMoreToLoad) {
                  console.log('onEndReached');
                  loadMoreResults();
                }
              }}
              onEndReachedThreshold={0.1}
              refreshControl={
                <RefreshControl
                  refreshing={isLoading}
                  onRefresh={handleRefresh}
                />
              }
              removeClippedSubviews={false}
              // viewabilityConfig={VIEWABILITY_CONFIG}
            />
          ) : (
            <View>
              <Text>No data found !</Text>
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
  containerContentStyle: {
    // flex: 1,
    alignItems: 'center',
    flexDirection: 'column',
    paddingBottom: 5,
  },
  separator: {
    marginVertical: 10,
  },
});

export default VehiclesList;
