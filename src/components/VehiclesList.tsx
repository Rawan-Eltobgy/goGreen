import React, {useEffect, useState} from 'react';
import {
  ActivityIndicator,
  View,
  Text,
  FlatList,
  StyleSheet,
  RefreshControl,
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
import {
  getPendingSelector,
  getDataSelector,
  getErrorSelector,
} from "../redux/selectors/selectors";

const VIEWABILITY_CONFIG = {
  minimumViewTime: 3000,
  viewAreaCoveragePercentThreshold: 100,
  waitForInteraction: true,
};

function VehiclesList() {
  const [hasMoreToLoad, setHasMoreToLoad] = useState(true);
  const [pages, setPages] = useState(0);
  const [currentPage, setCurrentPage] = useState(1);
  const [limit, setLimit] = useState(7);

  const dispatch = useDispatch();

  // const vehiclesState: VehiclesState = useSelector(
  //     (state: any) => state.vehiclesReducer,
  //   ),
  //   vehiclesData = vehiclesState?.vehicles,
  //   error = vehiclesState?.error,
  //   isLoading = vehiclesState?.isLoading;
  const isLoading = useSelector(getPendingSelector);
  const vehiclesData = useSelector(getDataSelector);
  const error = useSelector(getErrorSelector);

  useEffect(() => {
    const fetchData = async () => {
      await dispatch(fetchDataRequest({limit: limit, page: currentPage}));
    };
    fetchData();
  }, [currentPage, limit]);

  // useEffect(() => {
  //   if (vehicles.length > 0 && vehiclesData.length < limit) {
  //     setHasMoreToLoad(false);
  //   }
  // }, [vehiclesData]);

  const handleRefresh = () => {
    setCurrentPage(1);
    setPages(0);
  };

  return (
    <View style={styles.container}>
      {isLoading ? (
        <ActivityIndicator />
      ) : (
        <>
          {vehiclesData ? (
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
                if (d.distanceFromEnd > 0 && hasMoreToLoad) {
                  setCurrentPage(prev => prev + 1);
                }
              }}
              onEndReachedThreshold={1}
              refreshControl={
                <RefreshControl
                  refreshing={isLoading}
                  onRefresh={handleRefresh}
                />
              }
              removeClippedSubviews={true}
              viewabilityConfig={VIEWABILITY_CONFIG}
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
    alignItems: 'center',
    flexDirection: 'column',
    paddingBottom: 5,
  },
  separator: {
    marginVertical: 10,
  },
});

export default VehiclesList;
