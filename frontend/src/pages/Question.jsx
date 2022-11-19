import React from "react";

import { useParams, Link } from "react-router-dom";

export default function Question() {
    const param = useParams();

    return (
        <>
            <h1 className="text-white text-center ">This is question number {param.id}</h1>
            <Link to={`/question/${+param.id + 1}`} className="text-white text-2xl" >Next Question</Link>
        </>
    )

}