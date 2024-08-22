import { createAsyncThunk } from '@reduxjs/toolkit';
import { notificationsAxios } from 'app/config';
import { addError, setLoading } from 'features/global/GlobalSlice';
import { handleError } from 'utils/errorHandler';

export const getNotifications = createAsyncThunk(
    'notifications/getNotifications',
    async (_, { dispatch, rejectWithValue }) => {
        try {
            const token =
                localStorage.getItem("authToken") ?? sessionStorage.getItem("authToken");

            const response = await notificationsAxios.get(
                ``,
                {
                    headers: {
                        Authorization: `Token ${token}`,
                    },
                }
            );
            return response.data;
        } catch (err) {
            dispatch(addError(handleError(err)));
            return rejectWithValue(handleError(err));
        } finally {
            dispatch(setLoading(false));
        }
    }
);

export const readNotifications = createAsyncThunk(
    'notifications/readNotifications',
    async (id, { dispatch, rejectWithValue }) => {
        try {
            const token =
                localStorage.getItem("authToken") ?? sessionStorage.getItem("authToken");

            const response = await notificationsAxios.post(
                `${id}/mark_as_read/`,
                {},
                {
                    headers: {
                        Authorization: `Token ${token}`,
                    },
                }
            );
            return response.data;
        } catch (err) {
            dispatch(addError(handleError(err)));
            return rejectWithValue(handleError(err));
        } finally {
            dispatch(setLoading(false));
        }
    }
);