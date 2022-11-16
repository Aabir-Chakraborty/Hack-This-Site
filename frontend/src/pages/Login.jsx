import React from "react";

import "../styles/login.module.css"

function Login() {

    const handleFormSubmit = (e) => {
        e.preventDefault();
    }


    return (
        <div className="mx-auto border shadow-lg rounded-lg w-fit flex my-36">
            <form action="" onSubmit={handleFormSubmit} autoComplete={false} autoSave={false} className="py-7 px-8 flex flex-col gap-4 ">
                <div className="flex flex-col gap-3 ">
                    <label htmlFor="userEmail" className="text-3xl">Enter your preferred email</label>
                    <input type="email" className="text-xl border border-black rounded-md w-[36rem] px-3 py-2 focus:outline-none" />
                </div>
                <div className="flex flex-col gap-3 ">
                    <label htmlFor="userPass" className="text-3xl">Enter your password</label>
                    <input type="password" id="userPass" className="text-xl border border-black rounded-md w-[36rem] px-3 py-2 focus:outline-none" />
                </div>
                <div className="mt-4">
                    <button className="border border-black transition-all bg-blue-900 text-white hover:bg-blue-800 active:bg-blue-900 rounded-md w-full py-1 text-2xl focus:outline-none">Submit</button>
                </div>
            </form>
        </div>
    )
}
export default Login;