import { createAsyncThunk } from '@reduxjs/toolkit';
import { Axios } from 'app/config';
import { addError, addNotification, setLoading } from 'features/global/GlobalSlice';

export const loginAccount = createAsyncThunk(
    'account/loginAccount',
    async (userData, { dispatch, rejectWithValue }) => {
        try {
            dispatch(setLoading(true));
            const response = await Axios.post(`/accounts/login/`, userData);
            dispatch(addNotification("Login success."))
            return response.data;
        } catch (err) {
            console.log(err)
            dispatch(addError(err.message));
            return rejectWithValue(err.message);
        } finally {
            dispatch(setLoading(false));
        }
    }
);

export const loginWithToken = createAsyncThunk(
    'account/loginWithToken',
    async (token, { dispatch, rejectWithValue }) => {
        try {
            dispatch(setLoading(true));
            const response = await Axios.post(
                `/accounts/login/token-login/`,
                {},
                {
                    headers: {
                        Authorization: `Bearer ${token}`,
                    },
                }
            );
            dispatch(addNotification("Login with token success."));
            return response.data;
        } catch (err) {
            return rejectWithValue(err.message);
        } finally {
            dispatch(setLoading(false));
        }
    }
);