import {useIsFocused} from '@react-navigation/native';
import {FlashList} from '@shopify/flash-list';
import React, {useEffect} from 'react';
import {Box, ListItem, Screen, Text} from '../../components';
import {CircularLoader} from '../../components/Loader';
import {useFirestore} from '../../hooks';
import {moderateScale} from '../../utils';

export const Home = () => {
  const {data, isLoading, pendingVerificationDoctor} = useFirestore();
  const isFocus = useIsFocused();

  useEffect(() => {
    if (isFocus) {
      (async () => {
        await pendingVerificationDoctor();
      })();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isFocus]);

  return (
    <Screen useAlignment>
      <Box mt="ll" flex={1}>
        <Text variant="mSemiBold" fontSize={moderateScale(32)}>
          {'Pending\nVerification'}
        </Text>
        <Box mt="ml" flex={1}>
          {isLoading ? (
            <Box flex={1} alignItems="center" justifyContent="center">
              <CircularLoader isLoading={true} />
            </Box>
          ) : (
            <FlashList
              data={data}
              estimatedItemSize={200}
              renderItem={({item}) => <ListItem item={item} />}
            />
          )}
        </Box>
      </Box>
    </Screen>
  );
};
