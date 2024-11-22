import React from 'react';
import {spacing} from '../../theme/spacing';
import {moderateScale} from '../../utils';
import {Box} from '../Box';
import {Text} from '../Text';

type DetailsItemProps = {
  title: string;
  value: string;
  dl?: boolean;
};
export const DetailsItem = ({title, value, dl = false}: DetailsItemProps) => {
  return (
    <Box
      gap="n"
      backgroundColor="white"
      borderRadius={spacing.n}
      paddingVertical="m"
      paddingHorizontal="n"
      flexDirection={dl ? 'column' : 'row'}
      justifyContent="space-between">
      <Text color="black" variant="medium" fontSize={moderateScale(15)}>
        {title}
      </Text>
      <Text color="black" variant="regular" fontSize={moderateScale(14)}>
        {value}
      </Text>
    </Box>
  );
};
