import { Box, Button, Flex, HStack, Text } from "@chakra-ui/react";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import useUser from "../../hooks/useUser";
import CategoryApi from "../api";

const CategoriesScreen = () => {
  const user = useUser();

  const [categories, setCategories] = useState([]);

  React.useEffect(() => {
    if (user != null) {
      CategoryApi.getAll(user.uid, (categories) => {
        console.log("categoryes:", categories);
        setCategories(categories);
      });
    }
  }, [user]);

  return (
    <Box>
      <Flex justifyContent="space-between">
        <Text fontSize="3xl">Categorias </Text>
        <Link to="/categories/add">
          {" "}
          <Button bgColor="green.300">Agregar categoria</Button>
        </Link>
      </Flex>
      <HStack col={1} spacing="24px">
        {categories.map((category) => (
          <Box key={category.id}>{category.name} </Box>
        ))}
      </HStack>
    </Box>
  );
};

export default CategoriesScreen;
