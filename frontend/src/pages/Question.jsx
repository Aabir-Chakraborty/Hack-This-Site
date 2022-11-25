import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux"
import { ArrowLeftCircleIcon, } from "@heroicons/react/24/solid";

import { completeOneQuestion } from "../store/roundSlice";


export default function Question() {
    const [quesName, setQuesName] = useState("");
    const [question, setQuestion] = useState("");
    const [linkName, setLinkName] = useState("");
    const [answer, setAnswer] = useState("");
    const [correct, setCorrect] = useState(false);

    const param = useParams();  // the param object now has the data 

    const authState = useSelector(state => state.auth);
    const dispatch = useDispatch();

    useEffect(() => {
        const getData = async () => {
            let response;
            try {
                response = await fetch(`https://hello-n46uubabta-uc.a.run.app//api/v1/questions/round/${param.rno}/question/${param.id}`, {
                    method: "GET",
                    headers: {
                        'Authorization': `Bearer ${authState.token}`,
                        'Content-type': "application/json",
                    },
                }).then(response => response.json()).catch(e => {
                    throw e
                })
                setQuesName(response.name);
                if (response.question) setQuestion(response.question);
                if (response.link) setLinkName(response.link);
            } catch (err) {
                console.log(err);
            }
        }
        getData();
    }, [])


    const answerInputHandler = e => {
        setAnswer(e.target.value);
    }


    const answerSubmitHandler = async e => {
        e.preventDefault();
        let url;
        url = `https://hello-n46uubabta-uc.a.run.app/api/v1/answers/round/${param.rno}/answer/${param.id}`;
        const methodDataObject = {
            method: "POST",
            headers: {
                'Content-type': "application/json",
                'Authorization': `Bearer ${authState.token}`
            },
            body: JSON.stringify({
                answer: answer
            }),
        }
        try {
            const sendAnswer = await fetch(url, methodDataObject).then(res => res.json()).catch(err => {
                throw err
            })
            console.log(sendAnswer);
            // correct field, status -> request recieved
            if (sendAnswer.correct) {
                setCorrect(true);
                dispatch(completeOneQuestion());
            }
            setAnswer("");
        } catch (err) {
            console.log(err);
        }
    }

    return (
        <>
            <main id="questions" className="flex flex-col gap-14 py-28">
                <div className="flex justify-center mx-11">
                    <ArrowLeftCircleIcon onClick={() => window.history.back()} className="h-12 transition hover:scale-110 cursor-pointer" style={{ color: 'rgb(255,255,255,0.8)' }} />
                    <h1 className="text-white w-full text-4xl text-center  pr-12 ">{quesName}</h1>
                </div>
                {!!question &&
                    <div className="rounded mx-auto px-3 w-[38rem] py-1" style={{
                        backgroundColor: "rgb(255,255,255,0.3)"
                    }}>
                        <p className="px-2 py-2 w-fit text-white">
                            {question}
                        </p>
                    </div>
                }
                {!!linkName &&
                    <>
                        <a href={linkName} target={"blank"} className="border text-center w-fit mx-auto py-2 px-5 font-semibold text-xl transition-all hover:bg-white hover:text-black rounded-md text-white">Visit the link: {linkName}</a>
                    </>
                }
                <div className="mx-auto my-8  flex flex-col justify-center align-middle gap-8 ">
                    <label className="text-white text-3xl -mb-4">Enter the flag here</label>
                    <input type="text" style={{
                        background: "rgba(255,255,255,0.3)"

                    }}
                        value={answer}
                        onChange={answerInputHandler}
                        className="text-xl z-10 text-white rounded-md w-[38rem] px-3 py-2 focus:outline-none" />
                    <button onClick={answerSubmitHandler} className="rounded-lg active:outline-none focus:outline-none px-7 py-2 w-fit mx-auto transition-all bg-gradient-to-tr hover:scale-110 text-white from-red-700  to-pink-800 ">
                        Submit
                    </button>
                    {!correct && <span style={{
                        backgroundColor: "rgba(255,255,255,0.4)"
                    }} className="text-2xl text-center mt-2 px-4 py-2 rounded-lg w-fit mx-auto text-green-800">Correct</span>}
                </div>
            </main>
        </>
    )

}