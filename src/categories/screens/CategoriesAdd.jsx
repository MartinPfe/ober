import {
  Box,
  Button,
  Flex,
  Input,
  NumberInput,
  NumberInputField,
  Text,
  useToast,
} from "@chakra-ui/react";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { Link, useHistory, useParams } from "react-router-dom";
import useUser from "../../hooks/useUser";
import CategoryApi from "../api";

const CategoriesAdd = () => {
  const history = useHistory();
  const user = useUser();
  const toast = useToast();
  const [mensajeError, setMensajeError] = useState("");

  const { register, handleSubmit, setValue } = useForm();

  const onSubmit = (data) => {
    if (data.name.length < 3) {
      setMensajeError("Ingrese el nombre de la categoria");
      return false;
    }

    if (categoryId != null) {
      CategoryApi.update(user.uid, categoryId, data);
    } else {
      CategoryApi.add(user.uid, data);
    }
    showToast();
    setTimeout(() => {
      history.push("/categories");
    }, 3);
  };

  const { categoryId } = useParams();

  const showToast = () => {
    toast({
      title: `Categorye ${
        categoryId != null ? "Editado" : "Agregado"
      } correctamente!`,
      description: "Regreasando al menú.",
      status: "success",
      duration: 9000,
      isClosable: true,
    });
  };

  React.useEffect(() => {
    if (user != null) {
      if (categoryId != null) {
        console.log("get");
        CategoryApi.get(user.uid, categoryId, (category) => {
          console.log("category:", category);
          setValue("name", category.name);
          setValue("basePrice", category.basePrice);
        });
      }
    }
  }, [user, categoryId, setValue]);

  return (
    <Box>
      <Text fontSize="3xl">
        {categoryId != null ? "Editar" : "Agregar"} categoría{" "}
      </Text>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Box width="360px">
          <Input
            type="text"
            name="name"
            id="name"
            placeholder="Nombre"
            mb="6"
            ref={register}
          />

          <NumberInput placeholder="Precio base" mb="6">
            <NumberInputField
              name="basePrice"
              id="basePrice"
              placeholder="Precio base"
              ref={register}
            />
          </NumberInput>

          <Text
            fontSize="xl"
            mb="6"
            color="red"
            display={mensajeError !== "" ? "block" : "none"}
          >
            {mensajeError}
          </Text>

          <Flex col="2" justifyContent="space-between">
            <Link to="/categories">
              <Button bg="blue.400" fontWeight="bold" color="white">
                Volver
              </Button>
            </Link>
            <Button
              type="submit"
              bg="green.400"
              fontWeight="bold"
              color="white"
            >
              {categoryId != null ? "Editar" : "Agregar"}
            </Button>
          </Flex>
        </Box>
      </form>
    </Box>
  );
};

export default CategoriesAdd;
