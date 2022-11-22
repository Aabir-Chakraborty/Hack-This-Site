import { useContext, useEffect } from "react";
import { Routes, Route, useNavigate } from "react-router-dom";

import Login from "./pages/Login";
import Rounds from "./pages/Rounds";
import Question from "./pages/Question";

import AuthContextProvider, { AuthContext } from "./context/AuthContext";

function ReturnBack() {
    useEffect(() => {
        window.history.back();
    }, []);

    return <></>;
}

export default function App() {
    const { isAuthenticated, token } = useContext(AuthContext);

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
            <AuthContextProvider>
                <Routes>
                    <Route path="/" element={<Login />} />
                    <Route path="/round">
                        <Route path=":rno" element={<Rounds />}>
                            <Route path="question/:id" element={<Question />} />
                        </Route>
                    </Route>
                    <Route path="*" element={<ReturnBack />} />
                </Routes>
            </AuthContextProvider>
        </>
    );
}
