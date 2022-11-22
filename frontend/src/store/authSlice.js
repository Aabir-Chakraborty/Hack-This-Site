import { createSlice } from "@reduxjs/toolkit";

function getCookie(cName) {
    const name = cName + "=";
    const cDecoded = decodeURIComponent(document.cookie); //to be careful
    const cArr = cDecoded.split("; ");
    let res;
    cArr.forEach((val) => {
        if (val.indexOf(name) === 0) res = val.substring(name.length);
    });
    return res;
}

function initialState(cookieName) {
    let value = document.cookie.indexOf(`${cookieName}=`);
    if (value === -1) {
        return "";
    }
    return getCookie(cookieName);
}

// userToken

const authSlice = createSlice({
    name: "auth",
    initialState: {
        token: initialState("userToken"),
        isAuthenticated: !!initialState("userToken"),
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
