import { Flex, Text } from "@chakra-ui/react";
import React from "react";

const Footer = () => {
  return (
    <Flex
      as="nav"
      align="center"
      justify="space-between"
      wrap="wrap"
      padding="1.5rem"
      h="18"
      bg="teal.500"
      color="white"
      position="flex-end"
    >
      <Text>Martín Pfeiffer</Text>
      <Text>Argentina</Text>
      <Text>STAGING AREA</Text>
    </Flex>
  );
};

export default Footer;
