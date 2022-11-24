import { createSlice } from "@reduxjs/toolkit";

const checkQuesClear = () => {
    let value = localStorage.getItem("ques");
    if (value) {
        return +value;
    }
    return 0;
};

const checkRoundClear = () => {
    let value = localStorage.getItem("rounds");
    if (value) {
        return +value;
    }
    return 1;
};

// global state to manage number of rounds cleared
const roundSlice = createSlice({
    name: "round",
    initialState: {
        roundNumber: checkRoundClear(),
        quesClear: checkQuesClear(),
    },
    reducers: {
        completeOneQuestion: (state, action) => {
            state.quesClear = state.quesClear + 1;
            localStorage.setItem("ques", state.quesClear);
        },
        qualifyNextRound: (state, action) => {
            state.roundNumber = state.roundNumber + 1;
            localStorage.setItem("rounds", state.roundNumber);
        },
    },
});

export const { qualifyNextRound, completeOneQuestion } = roundSlice.actions;

export default roundSlice.reducer;
