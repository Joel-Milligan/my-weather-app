import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';

import { ScreensParamList } from './views/nav-types';
import { Screen1 } from './views/screen1';
import { Screen2 } from './views/screen2';
import { Screen3 } from './views/screen3';

const Stack = createNativeStackNavigator<ScreensParamList>();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Screen1" screenOptions={{ animation: 'slide_from_right' }}>
        <Stack.Screen name="Screen1" component={Screen1} options={{ title: 'Screen 1' }} />
        <Stack.Screen name="Screen2" component={Screen2} options={{ title: 'Screen 2' }} />
        <Stack.Screen name="Screen3" component={Screen3} options={{ title: 'Screen 3' }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
