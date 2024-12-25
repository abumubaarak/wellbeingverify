import {RouteProp, useNavigation, useRoute} from '@react-navigation/native';
import React, {useState} from 'react';
import {ActivityIndicator, Pressable, ScrollView} from 'react-native';
import FastImage from 'react-native-fast-image';
import {Box, DetailsItem, Dismiss, Screen, Text} from '../../components';
import {AppStackParamList, StackNavigation} from '../../navigation';
import socket from '../../services/socket';
import {colors} from '../../theme';
import {spacing} from '../../theme/spacing';
import {delay, formatDate, moderateScale} from '../../utils';
import {$button, $container, $image} from '../styles';

export const Details = () => {
  const navigation = useNavigation<StackNavigation>();
  const {params} = useRoute<RouteProp<AppStackParamList, 'Details'>>();
  const {doctor} = params;
  const [isLoading, setLoading] = useState(false);

  const onPress = (position: number) => {
    navigation.navigate('ImageViewer', {
      images: [doctor.selfie, doctor.qualification],
      startAt: position,
    });
  };
  const goBack = async () => {
    await delay(2000);
    setLoading(false);
    navigation.goBack();
  };

  const accept = async () => {
    setLoading(true);

    socket.emit(
      'accept',
      {
        doctorID: doctor.uid,
      },
      async (response: any) => {
        const {sent} = response;
        if (sent) {
          await goBack();
        }
      },
    );
  };

  const reject = () => {
    setLoading(true);

    socket.emit(
      'reject',
      {
        doctorID: doctor.uid,
      },
      async (response: any) => {
        const {sent} = response;
        if (sent) {
          await goBack();
        }
      },
    );
  };
  return (
    <Screen backgroundColor="grey">
      <Box
        flex={1}
        paddingHorizontal="l"
        pointerEvents={isLoading ? 'none' : 'auto'}>
        <Dismiss title="Doctor Information" />
        <ScrollView style={$container}>
          <Box mt="l" flex={1} gap="l" pb="ll">
            <DetailsItem title="Full name" value={doctor.fullName} />
            <DetailsItem title="Email" value={doctor.email} />
            <DetailsItem title="Gender" value={doctor.gender} />
            <DetailsItem dl={true} title="Bio" value={doctor.bio} />
            <DetailsItem title="DOB" value={formatDate(doctor.dob)} />
            <DetailsItem title="Specialty" value={doctor.specialty} />
            <Box>
              <Text variant="medium" fontSize={moderateScale(15)}>
                Selfie & Qualification
              </Text>
              <Box flexDirection="row" pt="n" gap="s">
                <Pressable style={$container} onPress={() => onPress(0)}>
                  <FastImage
                    style={$image}
                    source={{
                      uri: doctor.selfie,
                      priority: FastImage.priority.normal,
                    }}
                    resizeMode={FastImage.resizeMode.cover}
                  />
                </Pressable>
                <Pressable style={$container} onPress={() => onPress(1)}>
                  <FastImage
                    style={$image}
                    source={{
                      uri: doctor.qualification,
                      priority: FastImage.priority.normal,
                    }}
                    resizeMode={FastImage.resizeMode.cover}
                  />
                </Pressable>
              </Box>
            </Box>
          </Box>
        </ScrollView>
      </Box>
      <Box height={100} backgroundColor="white" style={$button}>
        <Box
          paddingHorizontal="l"
          flexDirection="row"
          gap="n"
          borderTopRightRadius={10}
          borderTopLeftRadius={10}
          paddingVertical="l"
          justifyContent="flex-end">
          {isLoading ? (
            <Box flex={1} alignItems="center" pt="n">
              <ActivityIndicator color={colors.black} />
            </Box>
          ) : (
            <>
              <Pressable style={$container} onPress={reject}>
                <Box
                  backgroundColor="error"
                  height={55}
                  borderRadius={spacing.n}
                  justifyContent="center"
                  alignItems="center">
                  <Text
                    color="white"
                    variant="mBold"
                    fontSize={moderateScale(15)}>
                    Reject
                  </Text>
                </Box>
              </Pressable>
              <Pressable style={$container} onPress={accept}>
                <Box
                  backgroundColor={isLoading ? 'inputStroke' : 'black'}
                  height={55}
                  borderRadius={spacing.n}
                  justifyContent="center"
                  alignItems="center">
                  {isLoading ? (
                    <ActivityIndicator color={colors.black} />
                  ) : (
                    <Text
                      color="white"
                      variant="mBold"
                      fontSize={moderateScale(15)}>
                      Accept
                    </Text>
                  )}
                </Box>
              </Pressable>
            </>
          )}
        </Box>
      </Box>
    </Screen>
  );
};
