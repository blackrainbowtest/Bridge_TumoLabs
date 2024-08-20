import { createAsyncThunk } from '@reduxjs/toolkit';
import { accountsAxios } from 'app/config';
import { addError, addNotification, setLoading } from 'features/global/GlobalSlice';
import { handleError } from 'utils/errorHandler';

export const registerAccount = createAsyncThunk(
    'account/registerAccount',
    async (userData, { dispatch, rejectWithValue }) => {
        try {
            dispatch(setLoading(true));
            alert()
            const response = await accountsAxios.post(`registration/`, userData);
            dispatch(addNotification("Registration success."));
            return response.data;
        } catch (err) {
            dispatch(addError(handleError(err)));
            return rejectWithValue(handleError(err));
        } finally {
            dispatch(setLoading(false));
        }
    }
);