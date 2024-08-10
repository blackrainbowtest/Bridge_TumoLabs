import { createSlice } from '@reduxjs/toolkit';
import { registerAccount } from './accountRegisterAPI';
import { loginAccount, loginWithToken } from './accountLoginAPI';
import { logoutAccount } from './accountLogoutAPI';

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
                state.account = action.payload.user;
                state.isAuthenticated = true;
            })
            .addCase(loginWithToken.fulfilled, (state, action) => {
                state.account = action.payload.user;
                state.isAuthenticated = true;
            })
            .addCase(logoutAccount.fulfilled, (state, action) => {
                state.account = null;
                state.isAuthenticated = false;
                localStorage.removeItem("authToken")
                sessionStorage.removeItem("authToken")
            })
    },
});

export default accountSlice.reducer;