import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export type Unit = 'Celcius' | 'Farenheit' | 'Kelvin';

export interface SettingsState {
  units: Unit;
}

export const DEFAULT_SETTINGS_STATE: SettingsState = {
  units: 'Celcius',
};

export const settingsSlice = createSlice({
  name: 'settings',
  initialState: DEFAULT_SETTINGS_STATE,
  reducers: {
    setUnits: (state, action: PayloadAction<Unit>) => {
      state.units = action.payload;
    },
  },
});

export const SettingsActions = settingsSlice.actions;
export const settingsReducer = settingsSlice.reducer;
