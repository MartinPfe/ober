import { Button } from "@chakra-ui/button";
import { Box, Flex, HStack, Text } from "@chakra-ui/layout";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import useUser from "../../hooks/useUser";
import ProductsApi from "../api";
import ProductCard from "./ProductCard";

const ProductsScreen = () => {
  const user = useUser();

  const [Products, setProducts] = useState([]);

  const updateProducts = () => {
    if (user != null) {
      ProductsApi.getAll(user.uid, (products) => {
        setProducts(products);
      });
    }
  };

  React.useEffect(() => {
    if (user != null) {
      ProductsApi.getAll(user.uid, (products) => {
        console.log(products);
        setProducts(products);
      });
    }
  }, [user]);

  return (
    <Box>
      <Flex justifyContent="space-between">
        <Text fontSize="3xl">Productos </Text>
        <Link to="/products/add">
          {" "}
          <Button bgColor="green.300">Agregar producto</Button>
        </Link>
      </Flex>
      <HStack col={1} spacing="24px">
        {Products.map((product) => (
          <ProductCard
            callbackFunc={updateProducts}
            key={product.id}
            product={product}
          />
        ))}
      </HStack>
    </Box>
  );
};
export default ProductsScreen;
