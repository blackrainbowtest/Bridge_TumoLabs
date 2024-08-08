import { createAsyncThunk } from '@reduxjs/toolkit';
import { Axios } from 'app/config';
import { addError, setLoading } from 'features/global/GlobalSlice';

export const registerAccount = createAsyncThunk(
    'account/registerAccount',
    async (userData, { dispatch, rejectWithValue }) => {
        try {
            dispatch(setLoading(true));
            const response = await Axios.post(`/accounts/registration/`, userData);

            return response.data;
        } catch (err) {
            dispatch(addError(err.message));
            return rejectWithValue(err.message);
        } finally {
            dispatch(setLoading(false));
        }
    }
);