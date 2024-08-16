import { configureStore } from '@reduxjs/toolkit';
import globalReducer from 'features/global/GlobalSlice'
import mainReducer from 'features/main/mainSlice'
import accountReducer from 'features/account/accountSlice'
import projectReducer from 'features/project/projectSlice'

export const store = configureStore({
  reducer: {
    global: globalReducer,
    main: mainReducer,
    account: accountReducer,
    project: projectReducer,
  },
});
