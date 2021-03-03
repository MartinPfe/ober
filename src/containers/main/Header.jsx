import { ChevronDownIcon } from "@chakra-ui/icons";
import {
  Box,
  Button,
  Flex,
  Heading,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Text,
} from "@chakra-ui/react";
import React from "react";
import { Link } from "react-router-dom";
import AuthApi from "../../api/AuthApi";
import useUser from "../../hooks/useUser";

const Header = () => {
  const user = useUser();

  return (
    <Flex
      as="nav"
      align="center"
      justify="space-between"
      wrap="wrap"
      padding="1.5rem"
      bg="teal.500"
    >
      <Flex align="center" mr={5}>
        <Heading as="h1" size="lg" letterSpacing={"-.1rem"} color="white">
          <Link to={"/"}>Ober</Link>
        </Heading>
      </Flex>

      <Box display={{ sm: "block", md: "block" }} mt={{ base: 4, md: 0 }}>
        <Flex justify="space-between" as="nav" align="center">
          {user ? (
            <>
              <Box p={2}>
                <Text fontSize="2xl">{user && user.displayName}</Text>
              </Box>
              <Menu>
                <MenuButton as={Button} rightIcon={<ChevronDownIcon />}>
                  Acciones
                </MenuButton>
                <MenuList>
                  <MenuItem>
                    <Link to="/Restaurants">Restaurantes</Link>
                  </MenuItem>
                  <MenuItem onClick={AuthApi.signOut}>Cerrar sesión</MenuItem>
                </MenuList>
              </Menu>{" "}
            </>
          ) : (
            <Button onClick={AuthApi.signIn}>Iniciar sesión</Button>
          )}
        </Flex>
      </Box>
    </Flex>
    // <Box w="100%" p={4}>
    //   {user ? (
    //     <SimpleGrid columns={2} spacing={10}>
    //       <Box> {user.displayName} </Box>
    //       <Box>
    //         <Button onClick={AuthApi.signOut}>Cerrar sesión</Button>
    //       </Box>
    //     </SimpleGrid>
    //   ) : (
    //     <button onClick={AuthApi.signIn}>Iniciar sesión</button>
    //   )}
    // </Box>
  );
};

export default Header;
