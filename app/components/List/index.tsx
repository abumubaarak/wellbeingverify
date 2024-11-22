import {FirebaseFirestoreTypes} from '@react-native-firebase/firestore';
import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {Pressable} from 'react-native';
import FastImage from 'react-native-fast-image';
import {StackNavigation} from '../../navigation';
import {Box} from '../Box';
import {Text} from '../Text';
import {$widthHeight} from './styles';

export const ListItem = ({item}: FirebaseFirestoreTypes.DocumentData) => {
  const navigation = useNavigation<StackNavigation>();

  const onPress = () => {
    navigation.navigate('Details', {
      doctor: item,
    });
  };
  return (
    <Box gap="l">
      <Pressable
        onPress={onPress}
        style={({pressed}) => [
          pressed
            ? {
                opacity: 0.4,
              }
            : {},
        ]}
        key={item}>
        <Box flex={1} gap="n" alignItems="center" flexDirection="row">
          <FastImage
            style={[$widthHeight]}
            source={{
              uri: item.selfie,
              priority: FastImage.priority.normal,
            }}
            resizeMode={FastImage.resizeMode.cover}
          />
          <Box gap="n">
            <Text variant="semiBold">{item.fullName}</Text>
            <Text>{item.specialty}</Text>
          </Box>
        </Box>
      </Pressable>
    </Box>
  );
};
