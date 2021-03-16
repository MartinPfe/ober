import { Box, Button, Flex, Image, Text, useToast } from "@chakra-ui/react";
import React from "react";
import { Link } from "react-router-dom";
import useUser from "../../hooks/useUser";
import ProductsApi from "../api";

const ProductCard = ({ product, callbackFunc }) => {
  const user = useUser();
  const toast = useToast();

  const deleteProduct = () => {
    ProductsApi.delete(user.uid, product.id);
    showToast();
    callbackFunc();
  };

  const showToast = () => {
    toast({
      title: `Producto eliminado correctamente!`,
      status: "success",
      duration: 9000,
      isClosable: true,
    });
  };
  return (
    <Box p="4" maxW="320px" rounded="sm" shadow="lg">
      <Image
        borderRadius="md"
        src="https://lh3.googleusercontent.com/p/AF1QipNdqcbOJFRpynTxwQUTQHUFnECHeneC5tcmWFI0=s1600-h380"
      />
      <Text
        fontSize="xl"
        fontWeight="600"
        paddingBottom="2"
        pt="5"
        align="center"
      >
        {product.name}
      </Text>
      <Text paddingBottom="2" align="center">
        {product.address}
      </Text>

      <Flex justifyContent="space-between">
        <Link to={`/products/add/${product.id}`}>
          <Button bg="blue.300">Editar</Button>
        </Link>
        <Button bg="red.300" onClick={deleteProduct}>
          Eliminar
        </Button>
      </Flex>
    </Box>
  );
};

export default ProductCard;
