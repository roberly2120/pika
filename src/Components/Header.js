import React, { useContext, useEffect } from 'react';
import { Flex, IconButton, Icon, Box, Heading, Button, useColorMode, Link, Spacer, Image } from '@chakra-ui/react';
import { Link as RouterLink } from 'react-router-dom';
import { AppContext } from '../State';
import { FaSun, FaMoon } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';

export default function Header() {
    const { colorMode, toggleColorMode } = useColorMode();
    const SwitchIcon = colorMode === 'light' ? FaMoon : FaSun;
    const { state, setState } = useContext(AppContext);
    const navigate = useNavigate();


    const colorToggle = () => {
        // this is counter-intuitive because the color mode is toggled before the state is updated
        const newIsDarkMode = colorMode ==='light';
        setState(prevState => ({ ...prevState, isDarkMode: newIsDarkMode }));
        toggleColorMode();
    }


    return (
        <Flex as="nav" align="center" justify="space-between" wrap="wrap" padding="1.5rem" bg="teal.500" color="white">
            <Flex align="center" mr={5} onClick={() => navigate('/')} _hover={{ cursor: 'pointer' }}>
                <Heading as="h1" size="lg" letterSpacing={"tighter"}>
                    Olinguito
                </Heading>
                <Spacer width="1px" />
                <Image src='../olinguito.svg' alt="Olinguito" boxSize="50px" />
            </Flex>

            <Box display={{ base: "block", md: "block" }} mt={{ base: 4, md: 0 }}>
                {/* Navigation Links */}
                <Link as={RouterLink} to="/" p="2" fontSize="xl" borderRadius="md" mr="5px"
                    _hover={{ textDecor: 'none', boxShadow: '0 0 2px rgba(0, 0, 0, 0.5)' }}>
                    Home
                </Link>
                <Link as={RouterLink} to="/heatmap" p="2" fontSize="xl" borderRadius="md" ml="5px" mr="5px"
                    _hover={{ textDecor: 'none', boxShadow: '0 0 2px rgba(0, 0, 0, 0.5)' }}>
                    Locations
                </Link>
                <Link as={RouterLink} to="/bio" p="2" fontSize="xl" borderRadius="md" ml="5px" mr="25px"
                    _hover={{ textDecor: 'none', boxShadow: '0 0 2px rgba(0, 0, 0, 0.5)' }}>
                    Bio
                </Link>
                <IconButton
                    aria-label="Toggle theme"
                    icon={<Icon as={SwitchIcon} />}
                    onClick={colorToggle}
                    size="md"
                    colorScheme="teal"
                    variant="ghost"
                />
            </Box>
        </Flex>
    );
}
