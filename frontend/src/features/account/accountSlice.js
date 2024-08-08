import { createSlice } from '@reduxjs/toolkit';
import { registerAccount } from './accountRegisterAPI';
import { loginAccount, loginWithToken } from './accountLoginAPI';

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
            .addCase(loginAccount.fulfilled, (state, action) => {
                state.account = action.payload;
                state.isAuthenticated = true;
            })
            .addCase(loginWithToken.fulfilled, (state, action) => {
                state.account = action.payload;
                state.isAuthenticated = true;
            })
    },
});

export default accountSlice.reducer;