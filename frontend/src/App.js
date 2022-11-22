import { useEffect } from "react";
import { Routes, Route, useNavigate } from "react-router-dom";
import { Provider } from "react-redux";

import Login from "./pages/Login";
import Rounds from "./pages/Rounds";
import Question from "./pages/Question";

import store from "./store/index";

function ReturnBack() {
    useEffect(() => {
        window.history.back();
    }, []);

    return <></>;
}


export default function App() {
    const nav = useNavigate();

    // useEffect(() => {
    //     if (!isAuthenticated && !token) {
    //         return nav("/");
    //     } else {
    //         return;
    //     }
    // }, [isAuthenticated, token]);

    return (
        <>
            <Provider store={store}>
                <Routes>
                    <Route path="/" element={<Login />} />
                    <Route path="/round/:rno" element={<Rounds />} />
                    <Route path="/question/:id" element={<Question />} />
                    <Route path="*" element={<ReturnBack />} />
                </Routes>
            </Provider>
        </>
    );
}
