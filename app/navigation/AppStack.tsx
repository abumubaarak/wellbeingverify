import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';
import {Home} from '../screens';
import {Details} from '../screens/Details';
import {AppStackParamList} from './AppStackParamList';
export const AppStack = () => {
  const Stack = createNativeStackNavigator<AppStackParamList>();

  return (
    <Stack.Navigator
      initialRouteName="Home"
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="Details" component={Details} />
    </Stack.Navigator>
  );
};
