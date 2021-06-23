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
import {useDispatch} from 'react-redux';
import {VehicleListItem} from '../components';
import {fetchDataRequest} from '../redux/actions/vehicles';
import {
  responsiveHeight,
  responsiveWidth,
  responsiveScreenFontSize,
  generateShortId,
} from '../utils';
import {colors} from '../config/styles';
import vehiclesData from '../vehicleList.json';

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
  const [loading, setLoading] = useState(false);
  const [pages, setPages] = useState(0);
  const [currentPage, setCurrentPage] = useState(1);
  const [limit, setLimit] = useState(7);
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      const res = await dispatch(
        fetchDataRequest({limit: limit, page: currentPage}),
      );
      console.log("Vehicle List result: ",res);
      const PAGES = Math.round(vehiclesData.length / limit);
      setPages(PAGES);
      setVehicles(vehiclesData);
      setLoading(false);
    };
    if (currentPage <= pages || (pages === 0 && currentPage === 1)) {
      fetchData();
    } else {
      console.log('exiting');
      return;
    }
  }, [currentPage, limit]);

  if (loading) {
    //trigger a spinner
  }
  const fetchActiveItems = (params: any) => {
    console.log('fetching active Items');
    setLoading(true);
    // dispatch(API.fetchData(params));
  };
  const handleRefresh = () => {
    setLoading(false);
    setCurrentPage(1);
    setPages(0);
  };

  const loadMoreResults = () => {
    console.log('LOAD MORE RESULTS');
    if (currentPage < pages) {
      setCurrentPage(currentPage => currentPage + 1);
    }
    //check the total number of pages
    // if (currentPage <= pages) {
    //   // const params = {
    //   //   data: {
    //   //     active: 1,
    //   //   },
    //   //   metadata: {
    //   //     pagination: {
    //   //       page: nextPage,
    //   //       limit: PAGINATION_LIMIT,
    //   //     },
    //   //   },
    //   //   restartPagination: false,
    //   // };

    //   fetchActiveItems();
    // }
  };

  //get current page data
  const indexOfLastItem = currentPage * limit;
  const indexOfFirstItem = indexOfLastItem - limit;
  const currentItems = vehicles.slice(indexOfFirstItem, indexOfLastItem);
  // console.log(
  //   'current Items, index of first, indexOf lat, pages, currentPage: ',
  //   currentItems,
  //   indexOfFirstItem,
  //   indexOfLastItem,
  //   pages,
  //   currentPage,
  // );
  return (
    <View style={styles.container}>
      {currentItems ? (
        <FlatList
          data={currentItems}
          renderItem={({item, index}) => (
            <VehicleListItem vehicle={item} currentIndex={index} />
          )}
          keyExtractor={() => generateShortId()}
          showsVerticalScrollIndicator={false}
          contentContainerStyle={styles.containerContentStyle}
          ItemSeparatorComponent={() => <View style={styles.separator} />}
          onEndReached={(d: {distanceFromEnd: number}) => {
            if (d.distanceFromEnd > 0) {
              console.log('onEndReached');
              loadMoreResults();
            }
          }}
          onEndReachedThreshold={0.1}
          refreshControl={
            <RefreshControl refreshing={loading} onRefresh={handleRefresh} />
          }
          removeClippedSubviews={false}
          // viewabilityConfig={VIEWABILITY_CONFIG}
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
