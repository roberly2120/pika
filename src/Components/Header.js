import React from 'react';
import { Flex, IconButton, Icon, Box, Heading, Button, useColorMode, Link } from '@chakra-ui/react';
import { Link as RouterLink } from 'react-router-dom';
import { FaSun, FaMoon } from 'react-icons/fa';

export default function Header() {
  const { colorMode, toggleColorMode } = useColorMode();
  const SwitchIcon = colorMode === 'light' ? FaMoon : FaSun;

  return (
    <Flex as="nav" align="center" justify="space-between" wrap="wrap" padding="1.5rem" bg="teal.500" color="white">
      <Flex align="center" mr={5}>
        <Heading as="h1" size="lg" letterSpacing={"tighter"}>
          Pika
        </Heading>
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
          _hover={{ textDecor: 'none', boxShadow: '0 0 2px rgba(0, 0, 0, 0.5)'}}>
          Bio
        </Link>

        {/* need to change this to an icon or something more sleek  */}
        {/* <Button bg="transparent" border="1px" onClick={toggleColorMode} ml="4">
          {colorMode === "light" ? "Dark" : "Light"} Mode
        </Button> */}
        <IconButton 
            aria-label="Toggle theme"
            icon={<Icon as={SwitchIcon} />}
            onClick={toggleColorMode}
            size="md"
            colorScheme="teal"
            variant="ghost"
        />

      </Box>
    </Flex>
  );
}
