import { useState, useContext } from "react"
import { useNavigate } from "react-router-dom"

import { AuthContext } from "../context/AuthContext";


export default function LoginForm() {
    const [teamName, setTeamName] = useState("");
    const [teamPassword, setTeamPassword] = useState("");

    const [errorMessage, setErrorMessage] = useState("");

    const tokenCtx = useContext(AuthContext)

    const nav = useNavigate();

    const teamNameChangeHandler = e => {
        if (errorMessage !== "") {
            setErrorMessage("");
        }
        setTeamName(e.target.value);
    }
    const teamPasswordChangeHandler = e => {
        if (errorMessage !== "") {
            setErrorMessage("");
        }
        setTeamPassword(e.target.value);
    }


    const handleFormSubmit = async (e) => {
        e.preventDefault();

        // http://localhost:8000/api/v1/

        try {
            let resData = await fetch("http://localhost:8000/api/v1/users/login/", {
                method: "POST",
                headers: {
                    'content-type': "application/json",
                },
                body: JSON.stringify({
                    teamName: teamName,
                    password: teamPassword
                })
            }).then(msg => msg.json())
            if (resData.status === "failed") {
                throw resData.message
            }

            // setUserToken(resData.token)
            tokenCtx.setUserToken(resData.token);

            nav("/round/1");  // navigate to questions page
        } catch (err) {
            setErrorMessage(err);
        }
    }

    return (
        <div className="text-white shadow-lg rounded-lg w-fit flex my-auto">
            <form action="" onSubmit={handleFormSubmit} className="py-7 px-8 flex flex-col gap-4 ">
                <div className="flex flex-col gap-3 ">
                    <label className="text-3xl">Team name</label>
                    <input type="text" value={teamName} onChange={teamNameChangeHandler} style={{
                        background: "rgba(255,255,255,0.3)"

                    }} className="text-xl border text-white border-black rounded-md w-[36rem] px-3 py-2 focus:outline-none" />
                </div>
                <div className="flex flex-col gap-3 ">
                    <label className="text-3xl">Password</label>
                    <input type="password" value={teamPassword} onChange={teamPasswordChangeHandler} style={{
                        background: "rgba(255,255,255,0.3)"
                    }} className="text-xl border text-white border-black rounded-md w-[36rem] px-3 py-2 bg focus:outline-none" />
                </div>
                <span className="text-red-500 text-lg text-end">{errorMessage}</span>
                <div className="mt-4 mx-auto">
                    <button className="transition-all bg-red-900 text-white border-none hover:bg-red-800 active:bg-red-900 rounded-full border px-6 py-2 text-2xl focus:outline-none">Initiate Launch !!</button>
                </div>
            </form>
        </div>
    )
}