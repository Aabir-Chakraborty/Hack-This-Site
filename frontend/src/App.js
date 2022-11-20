import React from "react";
import { Routes, Route } from "react-router-dom";

import Login from "./pages/Login";
import Question from "./pages/Question";

export default function App() {
    return (
        <>
            <Routes>
                <Route path="/" element={<Login />} />
                <Route path="/question/:id" element={<Question />} />
            </Routes>
        </>
    );
}
