import { configureStore } from '@reduxjs/toolkit';
import HomePageReducer from './reducers/home-page-reducer';

export const setupStore = () => {
  return configureStore({
    reducer: {
      HomePageReducer,
    },
  });
};

export type AppStore = ReturnType<typeof setupStore>;
export type RootState = ReturnType<AppStore['getState']>;
export type AppDispatch = AppStore['dispatch'];
