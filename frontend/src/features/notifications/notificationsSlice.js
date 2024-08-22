import { createSlice } from '@reduxjs/toolkit';
import { getNotifications, readNotifications } from './notificationAPI';

const notificationsSlice = createSlice({
    name: 'notifications',
    initialState: {
        notifications: [],
    },
    reducers: {
        addNotification: (state, action) => {
            state.notifications.push(action.payload);
        },
        clearNotifications: (state) => {
            state.notifications = [];
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(getNotifications.fulfilled, (state, action) => {
                state.notifications = action.payload;
            })
            .addCase(readNotifications.fulfilled, (state, action) => {
                state.notifications = state.notifications.map(notification => action.payload.id === notification.id ? action.payload : notification);
            })
    },
});

export const { addNotification, clearNotifications } = notificationsSlice.actions;

export default notificationsSlice.reducer;