import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux"
import { ArrowLeftCircleIcon } from "@heroicons/react/24/solid"

import "../styles/questions.css"


export default function Question() {
    const [question, setQuestion] = useState("");
    const param = useParams();  // the param object now has the data 

    const authState = useSelector(state => state.auth)

    useEffect(() => {
        const getData = async () => {
            let response;
            try {
                response = await fetch(`http://localhost:8000/api/v1/questions/round/${param.rno}/question/${param.id}`, {
                    method: "GET",
                    headers: {
                        'Authorization': `Bearer ${authState.token}`,
                        'Content-type': "application/json",
                    },
                }).then(response => response.json()).catch(e => {
                    throw e
                })
                setQuestion(response.question);
            } catch (err) {
                console.log(err);
            }
        }
        getData();
    }, [])


    const answerSubmitHandler = e => {
        e.preventDefault();

    }

    return (
        <>
            <main id="questions" className="flex flex-col gap-14 py-28">
                <div className="flex justify-center mx-11">
                    <ArrowLeftCircleIcon onClick={() => window.history.back()} className="h-12 transition hover:scale-110 cursor-pointer" style={{ color: 'rgb(255,255,255,0.8)' }} />
                    <h1 className="text-white w-full text-4xl text-center ">Question name and number {param.id}</h1>
                </div>
                <div className="rounded mx-11 px-3 py-1" style={{
                    backgroundColor: "rgb(255,255,255,0.3)"
                }}>
                    <p className="px-2 py-2  text-white">
                        {question}
                    </p>
                </div>
                <div className="mx-auto my-8  flex flex-col justify-center align-middle gap-8 ">
                    <label className="text-white text-3xl -mb-4">Enter your solution here</label>
                    <input type="text" style={{
                        background: "rgba(255,255,255,0.3)"

                    }} className="text-xl z-10 text-white rounded-md w-[38rem] px-3 py-2 focus:outline-none" />
                    <button onClick={answerSubmitHandler} className="rounded-lg active:outline-none focus:outline-none px-7 py-2 w-fit mx-auto transition-all bg-gradient-to-tr hover:scale-110 text-white from-red-700  to-pink-800 ">
                        Submit
                    </button>
                </div>
            </main>
        </>
    )

}