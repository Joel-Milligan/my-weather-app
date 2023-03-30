import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React, { useEffect } from 'react';
import { Provider, useDispatch, useSelector } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';

import { GlobalLoader } from './components/GlobalLoader';
import { GlobalLoaderActions } from './reducers/global-loader/reducer';
import { deviceLocation } from './reducers/location/reducer';
import { AppDispatch, persistor, RootState, store } from './store';
import { Tab1StackNavigatorParamList, Tab2StackNavigatorParamList } from './views/nav-types';
import { Screen1 } from './views/screen1';
import { Screen2 } from './views/screen2';
import { Screen3 } from './views/screen3';
import { Screen4 } from './views/screen4';
import { Screen5 } from './views/screen5';
import { Screen6 } from './views/screen6';

const Stack = createNativeStackNavigator<Tab1StackNavigatorParamList>();

function Tab1Stack() {
  return (
    <Stack.Navigator initialRouteName="Screen1" screenOptions={{ animation: 'slide_from_right' }}>
      <Stack.Screen name="Screen1" component={Screen1} options={{ title: 'Screen 1' }} />
      <Stack.Screen name="Screen2" component={Screen2} options={{ title: 'Screen 2' }} />
      <Stack.Screen name="Screen3" component={Screen3} options={{ title: 'Screen 3' }} />
    </Stack.Navigator>
  );
}

const SettingsStack = createNativeStackNavigator<Tab2StackNavigatorParamList>();

function Tab2Stack() {
  return (
    <SettingsStack.Navigator initialRouteName="Screen4" screenOptions={{ animation: 'slide_from_right' }}>
      <SettingsStack.Screen name="Screen4" component={Screen4} options={{ title: 'Screen 4' }} />
      <SettingsStack.Screen name="Screen5" component={Screen5} options={{ title: 'Screen 5' }} />
    </SettingsStack.Navigator>
  );
}

const Tab = createBottomTabNavigator();

function RootContainer() {
  const globalLoaderState = useSelector((state: RootState) => state.globalLoader);
  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    dispatch(deviceLocation());
  }, [dispatch]);

  return (
    <>
      <NavigationContainer>
        <Tab.Navigator screenOptions={{ headerShown: false }}>
          <Tab.Screen name="Tab1" component={Tab1Stack} options={{ title: 'Tab 1' }} />
          <Tab.Screen name="Tab2" component={Tab2Stack} options={{ title: 'Tab 2' }} />
          <Tab.Screen name="Tab3" component={Screen6} options={{ title: 'Screen 6', headerShown: true }} />
        </Tab.Navigator>
      </NavigationContainer>
      <GlobalLoader
        show={globalLoaderState.show}
        message={globalLoaderState.message}
        cancelMessage={globalLoaderState.cancelMessage}
        onDismiss={() => dispatch(GlobalLoaderActions.hide())}
      />
    </>
  );
}

export default function App() {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <RootContainer />
      </PersistGate>
    </Provider>
  );
}
