import { createSlice } from '@reduxjs/toolkit';
import { getProjects } from './projectGetAPI';

const initialState = {
    data: [],
};

const projectSlice = createSlice({
    name: 'project',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(getProjects.fulfilled, (state, action) => {
                state.data = action.payload;
            })
    },
});

export default projectSlice.reducer;