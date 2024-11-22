import {FirebaseFirestoreTypes} from '@react-native-firebase/firestore';
import {NavigationProp} from '@react-navigation/native';

type Images = {
  uri: string;
};
export type AppStackParamList = {
  Home: undefined;
  ImageViewer: {images: Images[]; startAt: number};
  Details: {doctor: FirebaseFirestoreTypes.DocumentData};
};
export type StackNavigation = NavigationProp<AppStackParamList>;
