import {NavigationContainer} from '@react-navigation/native';
import {ThemeProvider} from '@shopify/restyle';
import React from 'react';
import {StatusBar} from 'react-native';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {AppStack} from './navigation/AppStack';
import {colors, theme} from './theme';
import {GestureHandlerRootView} from 'react-native-gesture-handler';

function App(): React.JSX.Element {
  return (
    <GestureHandlerRootView>
      <ThemeProvider theme={theme}>
        <StatusBar barStyle="dark-content" backgroundColor={colors.primary} />

        <SafeAreaProvider>
          <NavigationContainer>
            <AppStack />
          </NavigationContainer>
        </SafeAreaProvider>
      </ThemeProvider>
    </GestureHandlerRootView>
  );
}

export default App;
