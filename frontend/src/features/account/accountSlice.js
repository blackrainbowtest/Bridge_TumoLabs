import { createSlice } from '@reduxjs/toolkit';
import { registerAccount } from './accountRegisterAPI';
import { loginAccount, loginWithToken } from './accountLoginAPI';
import { logoutAccount } from './accountLogoutAPI';
import { editAccountImage } from './accountProfileEditAPI';

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
            .addCase(editAccountImage.fulfilled, (state, action) => {
                state.account = {...state.account, profile_image: action.payload}
            })
    },
});

export default accountSlice.reducer;