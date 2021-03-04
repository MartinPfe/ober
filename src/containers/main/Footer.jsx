import { Box, Flex, Text } from "@chakra-ui/react";
import React from "react";

const Footer = () => {
  return (
    <Box position="fixed" bottom={0} left={0} right={0}>
      <Flex
        align="center"
        justify="space-between"
        padding="1.5rem"
        bg="teal.500"
        color="white"
      >
        <Text>Martín Pfeiffer</Text>
        <Text>Argentina</Text>
        <Text>STAGING AREA</Text>
      </Flex>
    </Box>
  );
};

export default Footer;
