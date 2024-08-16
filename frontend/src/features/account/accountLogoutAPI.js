import { createAsyncThunk } from '@reduxjs/toolkit';
import { accountsAxios } from 'app/config';
import { addError, addNotification, setLoading } from 'features/global/GlobalSlice';
import { handleError } from 'utils/errorHandler';

export const logoutAccount = createAsyncThunk(
    'account/logoutAccount',
    async (token, { dispatch, rejectWithValue }) => {
        try {
            dispatch(setLoading(true));
            const response = await accountsAxios.post(`login/logout/`, {},
                {
                    headers: {
                        Authorization: `Token ${token}`,
                    },
                });
            dispatch(addNotification(response.data.message))
            return 0;
        } catch (err) {
            dispatch(addError(handleError(err)));
            return rejectWithValue(handleError(err));
        } finally {
            dispatch(setLoading(false));
        }
    }
);