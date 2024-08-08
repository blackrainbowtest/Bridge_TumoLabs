import { configureStore } from '@reduxjs/toolkit';
import counterReducer from 'features/counter/counterSlice';
import globalReducer from 'features/global/GlobalSlice'
import mainReducer from 'features/main/mainSlice'
import accountReducer from 'features/account/accountSlice'

export const store = configureStore({
  reducer: {
    global: globalReducer,
    main: mainReducer,
    counter: counterReducer,
    account: accountReducer,
  },
});
