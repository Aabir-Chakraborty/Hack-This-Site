import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom"
import { FlagIcon } from "@heroicons/react/24/solid";

import "../styles/rounds.css";

export default function Rounds() {
    const [isPrevDisabled, setPrevDisabled] = useState(false);
    const [isNextDisabled, setNextDisabled] = useState(false);
    const roundParam = useParams();

    useEffect(() => {
        if (roundParam.rno === '1') {
            setPrevDisabled(true);
        }
        else if (roundParam.rno === '4') {
            setNextDisabled(true);
        } else {
            setPrevDisabled(false);
            setNextDisabled(false);
        }
    }, [roundParam])


    return (
        <main id="rounds" className="pt-32 gap-14 flex flex-col">
            <div className="flex flex-col gap-4">
                <h1 className="text-white font-semibold text-6xl text-center">ROUND {roundParam.rno}</h1>
                <div className="h-28 w-28 rounded-full scale-90 mx-auto" style={{ backgroundColor: "#ce6e6e" }}>
                    <FlagIcon className="h-20 relative top-5 left-4" />
                </div>
                <div className="text-white flex flex-row justify-evenly mt-7">
                    <Link to={'/question/1'} className="ques-links">Ques-1</Link>
                    <Link to={'/question/2'} className="ques-links">Ques-2</Link>
                    <Link to={'/question/3'} className="ques-links">Ques-3</Link>
                    <Link to={'/question/4'} className="ques-links">Ques-4</Link>
                </div>
            </div>
            <div className="flex flex-row justify-around mt-9">
                <button disabled={isPrevDisabled} className={`text-black text-lg font-semibold bg-gradient-to-tr  from-pink-500 to-red-500 rounded-xl px-9 py-3 ${isPrevDisabled && 'cursor-not-allowed'}`}>
                    {isPrevDisabled ?
                        <span>Previous round</span>
                        :
                        <Link to={`/round/${+roundParam.rno - 1}`} >Previous round</Link>
                    }
                </button>
                <button disabled={isNextDisabled} className={`text-black text-lg font-semibold bg-gradient-to-tr from-pink-500 to-red-500 rounded-xl px-9 py-3 ${isNextDisabled && "cursor-not-allowed"}`}>
                    {isNextDisabled ?
                        <span>Next round</span> :
                        <Link to={`/round/${+roundParam.rno + 1}`} >Next page</Link>
                    }
                </button>
            </div>
        </main>
    )
}