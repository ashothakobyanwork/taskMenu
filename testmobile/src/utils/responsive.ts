import {Dimensions, PixelRatio, Platform} from 'react-native';

const iPhone13MiniHeigth = 812;
const iPhone13MiniWidth = 375;

const {height: screenHeight, width: screenWidth} = Dimensions.get('window');
const defaultAspectRatio = 16 / 9;
const currentScreenAspectRatio = screenHeight / screenWidth;

const IS_IOS = Platform.OS === 'ios';

const k = IS_IOS ? 1 : defaultAspectRatio < currentScreenAspectRatio ? 1 : 0.94;

export const getResponsiveHeight = (dinamicHeight: number): number => {
  const scaleFactor = screenHeight / iPhone13MiniHeigth;
  const result = Math.round(dinamicHeight * scaleFactor);
  return result;
};

export const getResponsiveWidth = (width: number): number => {
  return (screenWidth * width) / iPhone13MiniWidth;
};

export const getResponsiveValue = (size: number): number => {
  return PixelRatio.roundToNearestPixel(
    (screenWidth * size * k) / iPhone13MiniWidth,
  );
};
