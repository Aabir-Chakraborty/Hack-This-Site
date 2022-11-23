import React, { useEffect, useState } from "react";
import { ArrowLeftCircleIcon } from "@heroicons/react/24/solid"



function LeaderBoard() {
    const [playerData, setPlayerData] = useState([])

    useEffect(() => {
        let getData = async () => {
            let data = await fetch("http://localhost:8000/api/v1/user/leaderboard").then(res => res.json())
            console.log(data.users);
            setPlayerData(data.users);
        }
        getData();
    }, [])

    return (
        <main id="questions" className="py-32">
            <div className="flex justify-center mx-11 mb-14">
                <ArrowLeftCircleIcon onClick={() => window.history.back()} className="h-12 transition hover:scale-110 cursor-pointer" style={{ color: 'rgb(255,255,255,0.8)' }} />
                <h1 className="text-white w-full text-4xl text-center  pr-12 ">Leaderboards</h1>
            </div>
            <div className="mx-auto text-white rounded-lg w-[40em] " style={{
                backgroundColor: "rgba(255,255,255,0.2)"
            }}>
                <div className="grid grid-cols-3 text-center  py-2">
                    <h1 className="text-3xl">Rank</h1>
                    <h2 className="text-3xl">Team Name</h2>

                    <h2 className="text-3xl">Total Flags</h2>
                </div>
                {playerData.map((ele, i) =>
                    <div className="grid  py-2 grid-cols-3 text-center">
                        <span className="text-2xl">{i + 1}</span>
                        <span className="text-white text-2xl">{ele.teamName}</span>

                        <h3 className="text-2xl">{ele.totalFlags}</h3>
                    </div>

                )}
            </div>
        </main>
    )
}
export default LeaderBoard;