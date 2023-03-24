import { configureStore } from '@reduxjs/toolkit';

import { globalLoaderReducer } from './reducers/global-loader/reducer';

export const store = configureStore({
  reducer: {
    globalLoader: globalLoaderReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
