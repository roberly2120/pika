import React from 'react';
import { VStack, Text, Image, Button, Center, HStack, Heading, Box } from '@chakra-ui/react';
export default function Home() {
    return (
        <>
            <VStack>
                <Heading as="h1">
                    Welcome to the Olinguito Project
                </Heading>
                <HStack>
                    <Box border="1px" borderColor="gray.200" p={4} borderRadius="15px">

                    </Box>
                    <Box border="1px" borderColor="gray.200" p={4} borderRadius="15px">

                    </Box>
                </HStack>
            </VStack>
        </>
    )
}