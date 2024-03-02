import React, { useContext, useEffect } from "react";
import MapContainer from "./MapContainer";
import { AppContext } from "../State";
import { Center } from "@chakra-ui/react";


export default function HeatMap() {
    const { state, setState } = useContext(AppContext);

    // useEffect(() => {
    //     console.log(state);
    // }, []);

    return (
        <div>
            <Center>
                <MapContainer />
            </Center>
        </div>
    )
}