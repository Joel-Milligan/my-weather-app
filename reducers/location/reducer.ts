import { createAsyncThunk, createSlice, SerializedError } from '@reduxjs/toolkit';
import { LatLng } from 'react-native-maps';

import { getDeviceLocation } from '../../api/location';

export type Locality = LatLng;

export interface LocationDetails {
  locality: Locality;
}

export interface LocationState {
  myLocation?: LocationDetails;
  error?: SerializedError;
}

export const DEFAULT_LOCATION_STATE: LocationState = {
  myLocation: undefined,
};

export const deviceLocation = createAsyncThunk('location/getDeviceLocation', async () => {
  const loc = await getDeviceLocation();
  return loc;
});

export const locationSlice = createSlice({
  name: 'location',
  initialState: DEFAULT_LOCATION_STATE,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(deviceLocation.fulfilled, (state, action) => {
        state.myLocation = {
          locality: {
            latitude: action.payload.coords.latitude,
            longitude: action.payload.coords.longitude,
          },
        };
        state.error = undefined;
      })
      .addCase(deviceLocation.pending, (state, _) => {
        state.myLocation = undefined;
        state.error = undefined;
      })
      .addCase(deviceLocation.rejected, (state, action) => {
        state.myLocation = undefined;
        state.error = action.error;
      });
  },
});

export const locationActions = locationSlice.actions;

export const locationReducer = locationSlice.reducer;
