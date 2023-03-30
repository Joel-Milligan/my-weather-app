import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import React, { useEffect } from 'react';
import Icon from 'react-native-vector-icons/FontAwesome5';
import { Provider, useDispatch, useSelector } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';

import { GlobalLoader } from './components/GlobalLoader';
import { GlobalLoaderActions } from './reducers/global-loader/reducer';
import { deviceLocation } from './reducers/location/reducer';
import { AppDispatch, persistor, RootState, store } from './store';
import { SettingsScreen } from './views/SettingsScreen';
import { WeatherScreen } from './views/WeatherScreen';

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
        <Tab.Navigator
          screenOptions={({ route }) => ({
            tabBarIcon: ({ color, size }) => {
              switch (route.name) {
                case 'WeatherScreen':
                  return <Icon name="cloud-sun-rain" size={size} color={color} />;
                case 'SettingsScreen':
                  return <Icon name="users-cog" size={size} color={color} />;
              }
            },
          })}
        >
          <Tab.Screen name="WeatherScreen" component={WeatherScreen} options={{ title: 'Weather' }} />
          <Tab.Screen name="SettingsScreen" component={SettingsScreen} options={{ title: 'Settings' }} />
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
