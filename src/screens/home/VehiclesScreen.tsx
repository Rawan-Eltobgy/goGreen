import React from 'react';
import {StyleSheet, SafeAreaView} from 'react-native';
import {VehiclesList} from '../../components';
function VehiclesScreen() {
  return (
    <SafeAreaView style={styles.container}>
      <VehiclesList />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginHorizontal: 10,
  },
});

export default VehiclesScreen;
