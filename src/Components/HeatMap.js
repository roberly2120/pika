import React, { useContext, useEffect, useState } from "react";
import MapContainer from "./MapContainer";
import { AppContext } from "../State";
import { Center, Button, Box, Image, Text, VStack, Heading } from "@chakra-ui/react";
import {
    Drawer,
    DrawerBody,
    DrawerFooter,
    DrawerHeader,
    DrawerOverlay,
    DrawerContent,
    DrawerCloseButton,
    useDisclosure,
} from '@chakra-ui/react'
import axios from "axios";

export default function HeatMap() {
    const { state, setState } = useContext(AppContext);
    const { occurrences, currentOccurrence } = state;
    const { isOpen, onOpen, onClose } = useDisclosure();
    let startTime
    const olinguitoID = 8365779

    const fetchAllOccurrences = async () => {
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
        if (occurrences.length === 0) {
            retrieveOccurences();
        }
    }, []);

    useEffect(() => {
        if (currentOccurrence) {
            onOpen()
        }
    }, [currentOccurrence, onOpen]);
    useEffect(() => {
        return () => {
            setState(prevState => ({ ...prevState, currentOccurrence: null }));
        }
    }, [])
    const retrieveOccurences = () => {
        fetchAllOccurrences().then(allOccurences => {
            setState({ ...state, occurrences: allOccurences });
        })
    }

    return (
        <div>
            <VStack>
                <Heading mt="50px">
                    Olinguito Occurrences
                </Heading>
                <Text fontSize="2rem">
                    Click on an icon to see details about the occurrence.
                </Text>
                <Text fontSize="1.2rem">
                    Some occurrences may not have images or other info.
                </Text>

            </VStack>


            <Center mt="50px" mb="100px">

                <MapContainer occurrences={occurrences} />
            </Center>

            <Drawer isOpen={isOpen} placement="right" onClose={onClose} size="lg">
                <DrawerOverlay />
                <DrawerContent>
                    <DrawerCloseButton />
                    <DrawerHeader>Occurrence Details</DrawerHeader>

                    <DrawerBody>
                        {/* Add content here based on currentOccurrence */}
                        {currentOccurrence && (
                            <VStack>
                                <Image
                                    src={currentOccurrence.media && currentOccurrence.media[0] && currentOccurrence.media[0].identifier
                                        ? currentOccurrence.media[0].identifier
                                        : '../olinguito.svg'}
                                    alt={currentOccurrence.media && currentOccurrence.media[0] && currentOccurrence.media[0].type
                                        ? currentOccurrence.media[0].type
                                        : 'Default Image'}
                                    height="400px"
                                    width="auto"
                                    borderRadius="15px"
                                />
                                <Box>
                                    <Text fontWeight="bold" fontSize="2rem">{`Country: ${currentOccurrence.country}`}</Text>
                                    <Text fontSize="1.2rem">
                                        {`Latitude: ${currentOccurrence.decimalLatitude}`}
                                    </Text>
                                    <Text fontSize="1.2rem">
                                        {`Longitude: ${currentOccurrence.decimalLongitude}`}
                                    </Text>
                                    <Text>
                                        {`Date Identified: ${currentOccurrence.dateIdentified === undefined ? 'Unknown' : currentOccurrence.dateIdentified}`}
                                    </Text>
                                    <Text>
                                        {`Identified by: ${currentOccurrence.identifiedBy === undefined ? 'Unknown' : currentOccurrence.identifiedBy}`}
                                    </Text>
                                </Box>
                            </VStack>
                        )}
                    </DrawerBody>

                    <DrawerFooter>
                        <Button variant="outline" mr={3} onClick={onClose}>
                            Close
                        </Button>
                    </DrawerFooter>
                </DrawerContent>
            </Drawer>
        </div>
    )

}