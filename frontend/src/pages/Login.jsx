import React from "react";

import LoginForm from "../components/LoginForm";

import astro from "../assets/astro-chill.png"

function Login() {

    return (
        <main id="login">
            <h1 id="top-header" className="text-white text-7xl text-center pt-20" style={{
                fontFamily: ["Franklin Gothic Medium"],
            }} >PREPARE TO TAKE OFF🚀</h1>
            <section className="flex justify-around mt-24 ">
                <div className="ml-16 ">
                    <img src={astro} alt="Astro hovering" className="" />
                </div>
                <LoginForm />
            </section>
        </main>
    )
}
export default Login;