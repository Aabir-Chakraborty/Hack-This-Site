import { useState, useEffect } from "react";
import { useSelector } from "react-redux"

let resData;



function Form({ setFlag }) {
    const [data, setData] = useState("");
    const [answer, setAnswer] = useState("");
    const [correctAnswers, setCorrectAnswers] = useState(0);

    const authState = useSelector(state => state.auth);

    async function getData() {
        resData = await fetch(`http://localhost:8000/api/v1/questions/round/1/question/11`, {
            method: "GET",
            headers: {
                'Content-type': 'application/json',
                'Authorization': `Bearer ${authState.token}`
            }
        }).then(res => res.json())
        setData(resData.data);
    }

    useEffect(() => {
        getData();
    }, [])

    const answerSubmitHandler = async e => {
        e.preventDefault();
        resData = await fetch(`http://localhost:8000/api/v1/answers/round/1/answer/11`, {
            method: "POST",
            headers: {
                "Content-type": "application/json",
                "Authorization": `Bearer ${authState.token}`
            },
            body: JSON.stringify({
                question: data,
                correctAnswers,
                answer
            })
        }).then(res => res.json())
        setAnswer("");
        console.log(resData);
        if (resData.result) {
            setCorrectAnswers(num => num + 1);
            setFlag(resData.flag);
        }
        getData()
    }

    return (
        <form onSubmit={answerSubmitHandler} className="flex flex-col w-fit mx-auto gap-10">
            <label className="text-white mt-44 text-3xl text-center">{data}</label>
            <input type="number" value={answer} onChange={e => setAnswer(e.target.value)} className="text-white text-center px-3 py-1 rounded-lg w-[22rem] outline-none text-2xl" style={{
                backgroundColor: "rgb(255,255,255,0.3)"
            }} />
            <button className="bg-white text-black rounded-md transition-all hover:text-white hover:bg-black px-4 py-3 w-fit mx-auto">Send the answer</button>
        </form>
    )
}



export default function RootFinder() {
    const [flag, setFlag] = useState("");

    return (
        <main id="rounds">
            <Form setFlag={setFlag} />
            <h3 className="text-white text-2xl text-center w-fit mx-auto mt-24 px-4 py-3 rounded-xl " style={{
                backgroundColor: "rgba(255,255,255,0.2)"
            }}>{flag}</h3>
        </main>
    )
}