import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Image,
  Linking,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import {useNavigation, useRoute} from '@react-navigation/native';
import PowerIcon from 'react-native-vector-icons/SimpleLineIcons';
import RecommendedCharger from 'react-native-vector-icons/FontAwesome5';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {colors} from '../../config';
import {
  responsiveHeight,
  responsiveScreenFontSize,
  responsiveWidth,
} from '../../utils';

function VehicleDetails() {
  const navigation = useNavigation();
  const route = useRoute();
  const {vehicle} = route.params;
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
        <Icon name="arrow-back-ios" color={colors.black} size={25} />
      </TouchableOpacity>
    ),
  });

  const openLinkToWebsite = () => {
    Linking.openURL(helpUrl).catch(err => {
      console.error('Failed opening page because: ', err);
    });
  };

  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <Image
          style={styles.vehicleImage}
          source={{uri: `${imageUrl}`}}
          resizeMode="contain"
        />
      </View>
      <LinearGradient
        pointerEvents="none"
        locations={[0, 1.0]}
        start={{x: 0, y: 0}}
        end={{x: 1, y: 1}}
        colors={[colors.cyan, colors.limeGreen]}
        style={styles.vehicleMainDetailsContainer}>
        <View style={styles.vehicleDataContainer}>
          <View style={styles.titleContainer}>
            <Text style={styles.brandText}>{brand}</Text>
            <Text style={styles.modelText}>{model}</Text>
          </View>
          <View style={styles.specsContainer}>
            <PowerIcon.Button
              name="energy"
              backgroundColor="transparent"
              color="#fff"
              size={20}>
              <Text style={styles.versionText}>{version}</Text>
            </PowerIcon.Button>
            <Icon.Button
              name="electric-car"
              backgroundColor="transparent"
              color="#fff"
              size={20}>
              <Text style={styles.versionText}>{connectorType}</Text>
            </Icon.Button>
            <RecommendedCharger.Button
              name="charging-station"
              backgroundColor="transparent"
              color="#fff"
              size={20}>
              <Text style={styles.versionText}>{recommendedCharger}</Text>
            </RecommendedCharger.Button>
          </View>
        </View>
      </LinearGradient>
      <View style={styles.helpContainer}>
        <TouchableOpacity onPress={() => openLinkToWebsite()}>
          <Text style={styles.helpTitle}>NEED MORE HELP</Text>
          <Icon.Button
            name="live-help"
            backgroundColor={colors.cyanLight}
            color="#fff"
            size={25}
            onPress={() => openLinkToWebsite()}>
            <Text style={styles.versionText}>Visit our website</Text>
          </Icon.Button>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 15,
    flex: 1,
    alignItems: 'center',
    backgroundColor: colors.white,
  },
  imageContainer: {
    flex: 0.6,
    alignItems: 'flex-end',
    paddingVertical: '5%',
  },
  vehicleImage: {
    height: '100%',
    width: responsiveWidth(85),
  },
  vehicleMainDetailsContainer: {
    backgroundColor: colors.limeGreen,
    borderRadius: 20,
    height: responsiveHeight(20),
    width: responsiveWidth(90),
    flexDirection: 'row',
    justifyContent: 'center',
  },
  vehicleDataContainer: {
    flex: 1.2,
    flexDirection: 'column',
    marginVertical: '5%',
    marginHorizontal: 10,
    alignItems: 'center',
  },
  titleContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: 5,
  },
  brandText: {
    fontSize: responsiveScreenFontSize(28),
    fontWeight: 'bold',
    color: colors.white,
    textAlign: 'center',
  },
  modelText: {
    textAlign: 'center',
    fontSize: responsiveScreenFontSize(16),
    fontWeight: 'bold',
    color: colors.white,
    marginVertical: 5,
  },
  versionText: {
    fontSize: responsiveScreenFontSize(16),
    color: colors.white,
  },
  specsContainer: {
    flex: 1,
    flexDirection: 'row',
  },
  helpContainer: {
    flex: 0.38,
    justifyContent: 'flex-end',
    paddingVertical: 10,
  },
  helpTitle: {
    fontSize: responsiveScreenFontSize(24),
    color: colors.cyanLight,
    fontWeight: 'bold',
    marginVertical: '7%',
  },
});
export default VehicleDetails;
