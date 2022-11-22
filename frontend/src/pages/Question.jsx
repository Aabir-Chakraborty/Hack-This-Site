import React from "react";

import { useParams, Outlet } from "react-router-dom";

export default function Question() {
    const param = useParams();


    return (
        <>
            <h1 className="text-white text-center ">This is question number {param.id}</h1>
        </>
    )

}