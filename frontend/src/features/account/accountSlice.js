import { createSlice } from '@reduxjs/toolkit';
import { registerAccount } from './accountRegisterAPI';

const initialState = {
    isAuthenticated: false,
    account: null,
};

const accountSlice = createSlice({
    name: 'account',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(registerAccount.fulfilled, (state, action) => {
                state.account = action.payload;
            })
    },
});

export default accountSlice.reducer;