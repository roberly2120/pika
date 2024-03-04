import React from 'react';
import { Box, Text, Image, VStack, HStack, Link, Heading, Center } from '@chakra-ui/react';
export default function Bio() {
    return (
        <>
            <Center mt="40px">
                <VStack w="85%" align="stretch">
                    <HStack spacing={4} align="stretch" w="100%">
                        <Box border="1px" borderColor="gray.200" p={4} borderRadius="15px"> {/* profile picture. name and age. location. funny quote? */}
                            <Image src="../Olinguito-Bio-Image.jpg" borderRadius="15px" />
                            <Text fontSize="2rem">
                                Oliver Olinguito, 5 (in Olinguito years)
                            </Text>
                            <Text fontSize="1.5rem">
                                Cloud Forests, Ecuador
                            </Text>
                            <Text fontSize="1.3rem">
                                "If you have fruit in your pocket, I will find it" - Me
                            </Text>
                        </Box>
                        <Box border="1px" borderColor="gray.200" p={4} flex={1} borderRadius="15px"> {/* about me section*/}
                            <Heading as="h2" size="lg">
                                About Me
                            </Heading>
                            <Text fontSize="1.5rem">
                                Name's Ollie, a self-taught acrobat of the treetops and a night-time ninja (or so I like to think). I'm a late bloomer in the animal kingdom fame game – scientists only spotted me hanging out in the Andean cloud forests recently. Talk about being fashionably late to the party!

                                I spend most nights dining on a lavish spread of fruits (I'm a bit of a fig fanatic) and the occasional insect, because who doesn't like a bit of protein with their sweets? My hobbies include perfecting the art of the silent pounce, napping in tree hollows (they're like the five-star hotels of the forest), and composing songs that only other Olinguitos appreciate.

                                I'm a small package, but what I lack in size, I make up for in fluff. My fur coat is the envy of the forest; it's like wearing a cloud, only warmer. And speaking of clouds, I literally live in one. The misty cloud forest is my home, and I wouldn't trade it for the world. Well, maybe for a lifetime supply of berries...

                                Also, fun fact: I'm quite the tree whisperer. You'll often find me having deep, meaningful conversations with the local flora. They're great listeners, especially the ancient oaks.
                            </Text>
                        </Box>
                    </HStack>
                    <HStack spacing={4} align="stretch" w="100%">
                        <Box border="1px" borderColor="gray.200" p={4} flex={1} borderRadius="15px"> {/* interests and hobbies */}
                            <Heading as="h2" size="lg">
                                Interests and Hobbies
                            </Heading>
                            <VStack align="start">
                                <Text fontSize="1.5rem">- Midnight strolls through the misty forests</Text>
                                <Text fontSize="1.5rem">- Climbing trees (the taller, the better!)</Text>
                                <Text fontSize="1.5rem">- Gourmet fruit tasting, especially figs and berries</Text>
                                <Text fontSize="1.5rem">- Star gazing from the highest branches</Text>
                                <Text fontSize="1.5rem">- Playing 'tag' with my nocturnal friends</Text>
                            </VStack>
                        </Box>
                        <Box border="1px" borderColor="gray.200" p={4} flex={1} borderRadius="15px"> {/* looking for... */}
                            <Heading as="h2" size="lg">
                                Looking For...
                            </Heading>
                            <Text fontSize="1.5rem">
                                I'm looking for a partner who doesn't want to spent time together. As an Olinguito, the most romantic thing I can think of is a partner who will mate with me and then rear our young to maturity while I get a little "me" time. Forever. I'm willing to share my fruit! But only if you bring your own fruit and you don't take any of my fruit. I am unwilling to share my fruit. I'm just a guy who wants to breed seasonally in the night and then retreat back to my figs and berries. 
                            </Text>
                        </Box>
                    </HStack>
                    <Box border="1px" borderColor="gray.200" p={4} borderRadius="15px"> {/* fun facts*/}
                        <Heading as="h2" size="lg" textAlign="center">
                            Fun Facts
                        </Heading>
                        <VStack align="center" spacing={4}>
                            <Text fontSize="1.5rem" textAlign="center">
                                I'm the first new carnivorous mammal discovered in the Western Hemisphere in 35 years.
                            </Text>
                            <Text fontSize="1.5rem" textAlign="center">
                                I'm a nocturnal animal, but not a weird way.
                            </Text>
                            <Text fontSize="1.5rem" textAlign="center">
                                I'm a solitary animal, no roommates.
                            </Text>
                            <Text fontSize="1.5rem" textAlign="center">
                                I'm a frugivore, which means I eat mostly fruit.
                            </Text>
                            <Text fontSize="1.5rem" textAlign="center">
                                I'm a tree-dweller. I be up in them trees. 
                            </Text>
                        </VStack>
                    </Box>
                    <Box border="1px" borderColor="gray.200" p={4} borderRadius="15px"> {/* contact me*/}
                        <Heading as="h2" size="lg">
                            Contact Me
                        </Heading>
                        <Text fontSize="1.8rem">
                            I will contact YOU if I'm interested.
                        </Text>
                    </Box>
                </VStack>
            </Center>
        </>
    )

}