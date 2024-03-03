import React, { useContext, useEffect, useState} from "react";
import MapContainer from "./MapContainer";
import { AppContext } from "../State";
import { Center, Button } from "@chakra-ui/react";
import axios from "axios";

export default function HeatMap() {
    const { state, setState } = useContext(AppContext);
    const { occurrences } = state;
    let startTime
    const olinguitoID = 8365779

    const fetchAllOccurrences = async () => {
        startTime = Date.now();
        let offset = 0;
        const limit = 300;
        let endOfRecords = false;
        let allOccurrences = [];
    
        while (!endOfRecords) {
            const response = await axios.get(`https://api.gbif.org/v1/occurrence/search?taxonKey=${olinguitoID}&limit=${limit}&offset=${offset}`);
            allOccurrences = allOccurrences.concat(response.data.results);
            endOfRecords = response.data.endOfRecords;
            offset += limit;
        }
        const filteredOccurrences = allOccurrences.filter(occurrence =>
            occurrence.decimalLatitude !== undefined && occurrence.decimalLongitude !== undefined
            );
        return filteredOccurrences;
    }
    
    useEffect(() => {
        if(occurrences.length === 0) {
            retrieveOccurences();
        }
        
    }, []);

    const retrieveOccurences = () => {
        fetchAllOccurrences().then(allOccurences => {
            const endTime = Date.now();
            const duration = (endTime - startTime) / 1000
            // console.log(`Duration: ${duration} seconds`)
            setState({ ...state, occurrences: allOccurences });
            console.log(state.occurrences)
        })
    }

    return (
        <div>
            <Center mt="50px">
                <MapContainer occurrences={occurrences}/>
            </Center>
        </div>
    )
}