import type { StackScreenProps } from '@react-navigation/stack';

export type WeatherTabStackNavigatorParamList = {
  WeatherScreen?: never;
};

export type DefaultStackScreenProps<T extends keyof WeatherTabStackNavigatorParamList> = StackScreenProps<
  WeatherTabStackNavigatorParamList,
  T
>;

export type BottomTabNavigatorParamList = {
  WeatherTab?: WeatherTabStackNavigatorParamList;
  SettingsTab?: never;
};
