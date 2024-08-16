import { createAsyncThunk } from '@reduxjs/toolkit';
import { projectsAxios } from 'app/config';
import { addError, setLoading } from 'features/global/GlobalSlice';
import { handleError } from 'utils/errorHandler';

export const getProjects = createAsyncThunk(
    'project/getProjects',
    async (_, { dispatch, rejectWithValue }) => {
        try {
            dispatch(setLoading(true));            
            const response = await projectsAxios.get(
                `projects/`,
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