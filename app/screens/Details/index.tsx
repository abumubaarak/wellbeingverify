import React from 'react';
import {Dismiss, Screen} from '../../components';

export const Details = () => {
  // const navigation = useNavigation<StackNavigation>();

  return (
    <Screen useAlignment backgroundColor="grey">
      <Dismiss title="Doctor Information" />
    </Screen>
  );
};
