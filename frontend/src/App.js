import { useEffect } from "react";
import { Routes, Route, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

import Login from "./pages/Login";
import Rounds from "./pages/Rounds";
import Question from "./pages/Question";
import LeaderBoard from "./pages/Leaderboards";

function ReturnBack() {
    useEffect(() => {
        window.history.back();
    }, []);

    return <></>;
}

export default function App() {
    const authState = useSelector((state) => state.auth);
    const navigation = useNavigate();

    useEffect(() => {
        if (!authState.isAuthenticated) {
            navigation("/");
        }
    }, [authState.isAuthenticated]);

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
