import React from 'react';
import { VStack, Text, Image, Button, Center, HStack, Heading, Box, AspectRatio, useBreakpointValue } from '@chakra-ui/react';
import { useNavigate } from 'react-router-dom';
export default function Home() {
    const navigate = useNavigate();
    const textFontSize = "1.5rem";
    const StackComponent = useBreakpointValue({ base: VStack, md: HStack });
    return (
        <>
            <VStack>
                <Center alignContent="center">
                    <VStack>
                        <Heading as="h1" pt="20px" pb="20px">
                            Welcome to the Olinguito Project
                        </Heading>
                        <AspectRatio ratio={4 / 3} w="100%">
                            <Image src="./cute-ollie-image.jpg" borderRadius="15px"/>
                        </AspectRatio>
                    </VStack>
                </Center>
                <StackComponent ml="25px" mr="25px" mt="25px">
                    <Box border="1px" borderColor="gray.200" p={4} borderRadius="15px">
                        <VStack>
                            <Text fontSize={textFontSize} fontWeight="bold">
                                I'm an Olinguito! I'm one of a very rare species that was only discovered in 2013.
                            </Text>
                            <Text fontSize={textFontSize}>
                                Check out every recorded sighting of my brothers and sisters on the Locations page!
                            </Text>
                            <Button colorScheme='teal' onClick={() => navigate('/heatmap')}>
                                Olinguito Locations
                            </Button>
                        </VStack>
                    </Box>
                    <Box border="1px" borderColor="gray.200" p={4} borderRadius="15px" mb="20px">
                        <VStack>
                            <Text fontSize={textFontSize} fontWeight="bold">
                                Seeking Mating Partners!
                            </Text>
                            <Text fontSize={textFontSize}>
                                Learn more about me on the Bio page!
                            </Text>
                            <Button colorScheme='teal' onClick={() => navigate('/bio')}>
                                Go To Bio
                            </Button>
                        </VStack>
                    </Box>
                </StackComponent>
            </VStack>
        </>
    )
}
