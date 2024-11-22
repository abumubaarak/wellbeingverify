import {ImageStyle} from 'react-native-fast-image';
import {spacing} from '../../theme/spacing';
import {moderateScale} from '../../utils';

export const $widthHeight: ImageStyle = {
  width: moderateScale(55),
  height: moderateScale(55),
  borderRadius: spacing.borderRadius,
};
