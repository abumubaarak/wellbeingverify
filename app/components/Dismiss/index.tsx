import {useNavigation} from '@react-navigation/native';
import React, {useCallback} from 'react';
import {Pressable} from 'react-native';
import {ArrowLeft, Back} from '../../assets/svgs';
import {StackNavigation} from '../../navigation';
import {isAndroid, moderateScale} from '../../utils';
import {Box} from '../Box';
import {Text} from '../Text';
import {$button, $container, $widthHeightStyle} from './style';

type DismissProps = {
  wnh?: number;
  title?: string;
};
export const Dismiss = ({wnh = 40, title}: DismissProps) => {
  const navigation = useNavigation<StackNavigation>();

  const onPress = useCallback(() => {
    navigation?.goBack();
  }, [navigation]);

  return (
    <Box flexDirection="row" justifyContent="center" alignItems="center">
      <Box style={[$container, $widthHeightStyle(wnh)]}>
        <Pressable
          hitSlop={50}
          onPress={onPress}
          style={[$button, $widthHeightStyle(wnh)]}>
          {!isAndroid ? <ArrowLeft /> : <Back />}
        </Pressable>
      </Box>
      <Box flex={1} alignItems="center">
        <Text variant="medium" fontSize={moderateScale(18)}>
          {title}
        </Text>
      </Box>
      <Box flex={0.1} />
    </Box>
  );
};
