import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

import { WeatherData } from './types';
import { Locality } from '../location/reducer';
import { SettingsState } from '../settings/reducer';

export const weatherApi = createApi({
  reducerPath: 'weather',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://api.openweathermap.org/data/2.5/',
  }),
  endpoints: (builder) => ({
    getWeatherByLocality: builder.query<WeatherData, { locality: Locality; settings: SettingsState }>({
      query: ({ locality, settings }) => {
        const units =
          settings.units === 'Celcius' ? 'metric' : settings.units === 'Farenheit' ? 'imperial' : 'standard';
        return `weather?lat=${locality.latitude}&lon=${locality.longitude}&units=${units}&appid=13512ed766d43b2287298257e6d3dfa1`;
      },
    }),
  }),
});

export const { useGetWeatherByLocalityQuery } = weatherApi;
