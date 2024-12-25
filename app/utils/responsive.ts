import {Dimensions, I18nManager, Platform} from 'react-native';

const {width, height} = Dimensions.get('window');

const guidelineBaseWidth = 375;
const guidelineBaseHeight = 812;

export const isAndroid = Platform.OS === 'android' ? true : false;
export const isRTL = I18nManager.isRTL ? true : false;
const horizontalScale = (size: number) => (width / guidelineBaseWidth) * size;
const verticalScale = (size: number) => (height / guidelineBaseHeight) * size;
const moderateScale = (size: number, factor = 0.5) =>
  size + (horizontalScale(size) - size) * factor;
export function delay(duration: number) {
  return new Promise(resolve => setTimeout(resolve, duration));
}
export const MONTH_NAMES = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December',
];
export const formatDate = (dob: Date) => {
  if (!dob || (dob instanceof Date && isNaN(dob.getTime()))) {
    return ' ';
  }
  const dateObj = new Date(dob);

  return `${
    MONTH_NAMES[dateObj.getMonth()]
  } ${dateObj.getDate()}, ${dateObj.getFullYear()}`;
};
export {horizontalScale, moderateScale, verticalScale};
