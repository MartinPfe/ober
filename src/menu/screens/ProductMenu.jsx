import { Image } from "@chakra-ui/image";
import { Box, Center, Text } from "@chakra-ui/layout";
import React from "react";

const ProductMenu = ({ product }) => {
  return (
    <Box
      maxW="sm"
      borderWidth="1px"
      borderRadius="lg"
      overflow="hidden"
      alignContent="center"
    >
      <Image
        s
        alt="Cerveza"
        src="https://lh3.googleusercontent.com/p/AF1QipNdqcbOJFRpynTxwQUTQHUFnECHeneC5tcmWFI0=s1600-h380"
      ></Image>
      <Center>
        <Text mt="1" fontWeight="semibold" fontSize="2xl">
          {product.name}
        </Text>{" "}
      </Center>
      <Center>
        <Text mt="1" fontWeight="semibold" fontSize="xl">
          {" "}
          ${product.price}
        </Text>
      </Center>
    </Box>
  );
};

export default ProductMenu;
