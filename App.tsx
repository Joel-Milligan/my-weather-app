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
import { WeatherScreen } from './views/WeatherScreen';
import { WeatherTabStackNavigatorParamList } from './views/nav-types';

const WeatherStack = createNativeStackNavigator<WeatherTabStackNavigatorParamList>();

function WeatherTabStack() {
  return (
    <WeatherStack.Navigator initialRouteName="WeatherScreen" screenOptions={{ animation: 'slide_from_right' }}>
      <WeatherStack.Screen name="WeatherScreen" component={WeatherScreen} options={{ title: 'Weather' }} />
    </WeatherStack.Navigator>
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
          <Tab.Screen name="Weather" component={WeatherTabStack} options={{ title: 'Weather' }} />
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
