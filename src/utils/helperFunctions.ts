import {Dimensions} from 'react-native';
import ShortId from './shortId';
import {constants} from '../config';

export const generateShortId = () => {
  const uid = new ShortId();
  return uid.randomUUID(8);
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
