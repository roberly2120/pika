import React, { useContext, useEffect } from "react";
import { AppContext } from "../State";

export default function HeatMap() {
    const { state, setState } = useContext(AppContext);

    useEffect(() => {
        console.log(state);
    }, []);

    return (
        <div>
            <h1>HeatMap</h1>
        </div>
    )
}