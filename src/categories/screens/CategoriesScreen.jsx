import {
  Box,
  Button,
  Flex,
  Table,
  Tbody,
  Td,
  Text,
  Th,
  Thead,
  Tr,
  useToast,
} from "@chakra-ui/react";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import useUser from "../../hooks/useUser";
import CategoryApi from "../api";

const CategoriesScreen = () => {
  const user = useUser();
  const toast = useToast();

  const [categories, setCategories] = useState([]);

  React.useEffect(() => {
    if (user != null) {
      CategoryApi.getAll(user.uid, (categories) => {
        setCategories(categories);
      });
    }
  }, [user]);

  const deleteCategory = (categoryToDelete) => {
    console.log("Borrando", categoryToDelete);
    CategoryApi.delete(user.uid, categoryToDelete.id);
    showToast();
  };

  const showToast = () => {
    toast({
      title: `Categoría eliminada correctamente!`,
      status: "success",
      duration: 2000,
      isClosable: true,
    });
  };

  return (
    <Box>
      <Flex justifyContent="space-between">
        <Text fontSize="3xl">Categorias </Text>
        <Link to="/categories/add">
          {" "}
          <Button bgColor="green.300">Agregar categoria</Button>
        </Link>
      </Flex>

      <Box borderRadius="md" borderWidth="1px">
        <Table variant="simple">
          <Thead>
            <Tr>
              <Th>Id</Th>
              <Th>Nombre</Th>
              <Th>Precio base</Th>
              <Th></Th>
            </Tr>
          </Thead>
          <Tbody>
            {categories.map((category) => (
              <Tr key={category.id}>
                <Td>{category.id}</Td>
                <Td>{category.name}</Td>
                <Td>{category.basePrice}</Td>
                <Td>
                  <Link to={`/categories/add/${category.id}`}>
                    <Button bg="blue.300">Editar</Button>
                  </Link>
                  <Button bg="red.300" onClick={() => deleteCategory(category)}>
                    Eliminar
                  </Button>
                </Td>
              </Tr>
            ))}
          </Tbody>
        </Table>
      </Box>
    </Box>
  );
};

export default CategoriesScreen;
