import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {Button} from 'react-native';
import {Box, Screen, Text} from '../../components';
import {StackNavigation} from '../../navigation/AppStackParamList';
import {moderateScale} from '../../utils';

export const Home = () => {
  const navigation = useNavigation<StackNavigation>();
  const onPress = () => {
    navigation.navigate('Details');
  };
  return (
    <Screen useAlignment>
      <Box mt="ll">
        <Text variant="mSemiBold" fontSize={moderateScale(32)}>
          {'Pending\nVerification'}
        </Text>
        <Button title="Details" onPress={onPress} />
      </Box>
    </Screen>
  );
};
