import {ViewStyle} from 'react-native';
import {ImageStyle} from 'react-native-fast-image';
import {colors} from '../../theme';
import {spacing} from '../../theme/spacing';

export const $imageViewer: ViewStyle = {
  position: 'absolute',
  top: 1,
  bottom: 1,
  zIndex: 5,
  backgroundColor: 'red',
  flex: 1,
};
export const $container: ViewStyle = {
  flex: 1,
};
export const $image: ImageStyle = {
  height: 200,
  borderRadius: 10,
};
export const $button: ViewStyle = {
  borderTopRightRadius: spacing.l,
  borderTopLeftRadius: spacing.l,
  shadowColor: colors.black,
  shadowOffset: {
    width: 0,
    height: 1,
  },
  shadowOpacity: 0.22,
  shadowRadius: 2.22,
  elevation: 10,
};
