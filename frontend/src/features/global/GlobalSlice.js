import { createSlice } from '@reduxjs/toolkit';
import { getCurrentFullUnixTime } from 'utils/base';

const initialState = {
    errors: [],
    notifications: [],
    loading: false,
};

const globalSlice = createSlice({
    name: 'global',
    initialState,
    reducers: {
        addError: (state, action) => {
            const time = getCurrentFullUnixTime()
            state.errors.push({ message: action.payload, timestamp: time });
        },
        removeError: (state, action) => {
            state.errors = state.errors.filter((error) => error.timestamp !== action.payload);
        },
        addNotification: (state, action) => {
            const time = getCurrentFullUnixTime()
            state.notifications.push({ message: action.payload, timestamp: time });
        },
        removeNotification: (state, action) => {
            state.notifications = state.notifications.filter((notification) => notification.timestamp !== action.payload);
        },
        setLoading: (state, action) => {
            state.loading = action.payload;
        },
    },
});

export const { addError, removeError, addNotification, removeNotification, setLoading } = globalSlice.actions;
export default globalSlice.reducer;