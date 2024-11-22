import {RouteProp, useNavigation, useRoute} from '@react-navigation/native';
import React from 'react';
import Gallery from 'react-native-awesome-gallery';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {Box, Dismiss} from '../../components';
import {AppStackParamList, StackNavigation} from '../../navigation';
import {$imageViewer} from '../styles';

export const ImageViewer = () => {
  const {params} = useRoute<RouteProp<AppStackParamList, 'ImageViewer'>>();
  const navigation = useNavigation<StackNavigation>();

  const {images, startAt} = params;
  const insets = useSafeAreaInsets();

  return (
    <Box zIndex={1} flex={1} backgroundColor="black">
      <Box zIndex={10} position="absolute" top={insets.top}>
        <Dismiss />
      </Box>
      <Gallery
        style={$imageViewer}
        initialIndex={startAt}
        onSwipeToClose={() => navigation.goBack()}
        data={images}
        onIndexChange={newIndex => {
          console.log(newIndex);
        }}
      />
    </Box>
  );
};
