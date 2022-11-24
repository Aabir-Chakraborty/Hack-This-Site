import { configureStore } from "@reduxjs/toolkit";

import authReducer from "./authSlice";
import roundReducer from "./roundSlice";

const store = configureStore({
    reducer: {
        auth: authReducer,
        round: roundReducer,
    },
});

export default store;
