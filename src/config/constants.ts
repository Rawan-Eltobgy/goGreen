import {Dimensions} from 'react-native';
const window = Dimensions.get('window');
const screen = Dimensions.get('screen');
export const constants = {
  // Sizes
  window,
  screen,
  picturePreview: {
    width: window.width * 0.45,
    height: window.height * 0.32,
  },
  picture: {
    width: window.width - 30,
    height: (1080 * window.width) / 788,
  },
};
