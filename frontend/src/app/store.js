import { configureStore } from '@reduxjs/toolkit';
import counterReducer from '../features/counter/counterSlice';
import globalReducer from 'features/global/GlobalSlice'
import mainReducer from 'features/main/mainSlice'

export const store = configureStore({
  reducer: {
    global: globalReducer,
    main: mainReducer,
    counter: counterReducer,
  },
});
