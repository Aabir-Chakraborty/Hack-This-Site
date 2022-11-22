import { createSlice } from "@reduxjs/toolkit";

const authSlice = createSlice({
    name: "auth",
    initialState: {
        token: "",
        isAuthenticated: false,
    },
    reducers: {
        setAuthenticate: (state, action) => {
            const expireDateStamp = new Date().setDate(
                new Date().getDate() + 2
            );
            const expireDate = new Date(expireDateStamp).toUTCString();
            document.cookie = `userToken=${action.payload.jwtToken} expires=${expireDate} SameSite=Lax`;
            state.isAuthenticated = true;
            state.token = action.payload.jwtToken;
        },
    },
});

export const { setAuthenticate } = authSlice.actions;

export default authSlice.reducer;
