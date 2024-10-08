import { createAsyncThunk } from '@reduxjs/toolkit';
import { accountsAxios } from 'app/config';
import { addError, addNotification, setLoading } from 'features/global/GlobalSlice';
import { handleError } from 'utils/errorHandler';

export const editAccountImage = createAsyncThunk(
    'account/editAccountImage',
    async (file, { dispatch, rejectWithValue }) => {
        try {
            dispatch(setLoading(true));
            const token =
                localStorage.getItem("authToken") ?? sessionStorage.getItem("authToken");
            const formData = new FormData();
            formData.append('image', file);

            const response = await accountsAxios.post(
                `profile-images/upload-profile-image/`,
                formData,
                {
                    headers: {
                        Authorization: `Token ${token}`,
                        'Content-Type': 'multipart/form-data',
                    },
                }
            );

            dispatch(addNotification("Profile image updated successfully."));
            return response.data;
        } catch (err) {
            dispatch(addError(handleError(err)));
            return rejectWithValue(handleError(err));
        } finally {
            dispatch(setLoading(false));
        }
    }
);