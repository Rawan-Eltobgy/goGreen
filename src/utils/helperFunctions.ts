import {Dimensions, PixelRatio, Platform, StatusBar} from 'react-native';
import DeviceInfo from 'react-native-device-info';
import ShortId from './shortId';
import {constants} from '../config';

export const generateShortId = () => {
  const uid = new ShortId();
  return uid.randomUUID(8);
};
export const removeElementFromArray = (array: any[], index: number): any[] => {
  if (index < 0) {
    return array;
  }
  let newArray: any[] = [];
  array?.map((_, elementIndex) => {
    if (elementIndex !== index) {
      newArray.push(array[elementIndex]);
    }
  });
  return newArray;
};

export const isEmpty = (Input: {}) => {
  return Input ? Object.keys(Input).length === 0 : true;
};

export const isIphoneX = () => {
  const model = DeviceInfo.getDeviceId();
  return (
    Platform.OS === 'ios' &&
    model.includes('Phone') && // an iPhone
    (Number.parseInt(model.split('Phone')[1].split(',')[0]) > 10 || // is an iPhone XS or newer
      (Number.parseInt(model.split('Phone')[1].split(',')[0]) === 10 &&
        [3, 6].includes(
          Number.parseInt(model.split('Phone')[1].split(',')[1]),
        ))) // iPhone X
  );
  // split iPhone version from model. ex: "iPhone11,6" => "iPhone XS Max"
};

export const responsiveScreenFontSize = (f: number) => {
  const {height, width} = Dimensions.get('screen');
  const FONT_CORRECTION_FACTOR = 7.648914810211301;
  const correctedValue = f / FONT_CORRECTION_FACTOR;
  return fontCalculation(height, width, correctedValue);
};

const fontCalculation = (height: number, width: number, val: number) => {
  const widthDimension = height > width ? width : height;
  const aspectRatioBasedHeight = (16 / 9) * widthDimension;
  return percentageCalculation(
    Math.sqrt(
      Math.pow(aspectRatioBasedHeight, 2) + Math.pow(widthDimension, 2),
    ),
    val,
  );
};

const percentageCalculation = (max: number, val: number) => max * (val / 100);

// get % of height
export const responsiveHeight = (height: number) => {
  return (constants.window.height * height) / 100;
};
// get % of width
export const responsiveWidth = (width: number) => {
  return (constants.window.width * width) / 100;
};
