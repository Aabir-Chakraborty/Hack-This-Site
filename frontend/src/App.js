import { useEffect } from "react";
import { Routes, Route, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";

import Login from "./pages/Login";
import Rounds from "./pages/Rounds";
import Question from "./pages/Question";
import LeaderBoard from "./pages/Leaderboards";

import { completeOneQuestion, qualifyNextRound } from "./store/roundSlice";

function ReturnBack() {
    useEffect(() => {
        window.history.back();
    }, []);

    return <></>;
}

export default function App() {
    const authState = useSelector((state) => state.auth);
    const roundState = useSelector((state) => state.round);
    const navigation = useNavigate();
    const dispatch = useDispatch();

    useEffect(() => {
        if (!authState.isAuthenticated) {
            navigation("/");
        }
    }, [authState.isAuthenticated]);

    useEffect(() => {
        if (roundState.roundNumber !== 3 && roundState.quesClear === 3) {
            dispatch(qualifyNextRound());
        } else if (roundState.quesClear === 4) {
            dispatch(qualifyNextRound());
        }
    }, [roundState]);

    return (
        <>
            <Routes>
                <Route path="/" element={<Login />} />
                <Route path="/round/:rno" element={<Rounds />}></Route>
                <Route path="/round/:rno/question/:id" element={<Question />} />
                <Route path="/leaderboard" element={<LeaderBoard />} />
                <Route path="*" element={<ReturnBack />} />
            </Routes>
        </>
    );
}
