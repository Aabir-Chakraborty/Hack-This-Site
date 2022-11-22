import React from "react";
import { useParams } from "react-router-dom";
import { ArrowLeftCircleIcon } from "@heroicons/react/24/solid"

import "../styles/questions.css"

const fetchDataText = {
    text: `Lorem ipsum dolor sit amet consectetur adipisicing elit. A at vel recusandae quos sed rem blanditiis vero harum, enim aliquid in perspiciatis nisi? Quasi accusantium eaque placeat! Tempora, blanditiis distinctio?
    Modi, natus ad ipsam perspiciatis sapiente repellat, libero debitis, vitae obcaecati quos officiis ipsa porro.Quo, exercitationem voluptatum inventore ipsa magnam sequi soluta, quibusdam ea nihil, temporibus maxime atque officia.
        Dolores, non.Quibusdam quam nulla laudantium laboriosam, sit molestias cumque.Placeat ullam rem vel explicabo libero facilis, tempore quam quisquam quo quia nihil quis officia enim sunt in rerum.Recusandae.
            Mollitia, explicabo corrupti? Placeat dolorum tempore expedita dignissimos quibusdam libero adipisci iusto, earum, inventore quis, alias repudiandae? Soluta, nostrum perferendis.Quia repellat delectus debitis dolores tempora quas dignissimos perspiciatis at.
    Animi veniam rem dolores doloremque voluptatem nisi saepe dolore error fugit quas distinctio et exercitationem earum similique, non doloribus iusto, repellat nihil odio voluptates, neque aspernatur eum ipsa! Adipisci, obcaecati!`
}


export default function Question() {
    const param = useParams();


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
                        {fetchDataText.text}
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