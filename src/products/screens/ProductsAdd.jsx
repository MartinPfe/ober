import {
  Box,
  Button,
  Flex,
  Input,
  NumberInput,
  NumberInputField,
  Select,
  Text,
  useToast,
} from "@chakra-ui/react";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { Link, useHistory, useParams } from "react-router-dom";
import CategoryApi from "../../categories/api";
import useUser from "../../hooks/useUser";
import ProductsApi from "../api";

const ProductsAdd = () => {
  const history = useHistory();
  const user = useUser();
  const toast = useToast();
  const [mensajeError, setMensajeError] = useState("");

  const [categories, setCategories] = useState([]);
  const { productId } = useParams();

  const { register, handleSubmit, setValue } = useForm();

  const onSubmit = (data) => {
    if (data.name.length < 3) {
      setMensajeError("Ingrese el nombre del producto");
      return false;
    }
    if (productId != null) {
      ProductsApi.update(user.uid, productId, data);
    } else {
      ProductsApi.add(user.uid, data);
    }
    showToast();
    setTimeout(() => {
      history.push("/products");
    }, 3);
  };

  const showToast = () => {
    toast({
      title: `Producto ${
        productId != null ? "Editado" : "Agregado"
      } correctamente!`,
      description: "Regreasando al menú.",
      status: "success",
      duration: 3000,
      isClosable: true,
    });
  };

  React.useEffect(() => {
    if (user != null) {
      if (productId != null) {
        ProductsApi.get(user.uid, productId, (product) => {
          console.log("product:", product);
          setValue("name", product.name);
          setValue("price", product.price);
          setValue("categoryId", product.categoryId);
        });
      }
    }
  }, [user, productId, setValue]);

  React.useEffect(() => {
    if (user != null) {
      CategoryApi.getAll(user.uid, (allCategories) => {
        setCategories(allCategories);
      });
    }
  }, [user]);

  return (
    <Box>
      <Text fontSize="3xl">
        {productId != null ? "Editar" : "Agregar"} producto{" "}
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

          <Box mb="6">
            <Select
              placeholder="Categoría"
              name="categoryId"
              id="categoryId"
              ref={register}
            >
              {categories.map((category) => {
                return (
                  <option key={category.id} value={category.id}>
                    {category.name}
                  </option>
                );
              })}
            </Select>
          </Box>

          <NumberInput placeholder="Precio" mb="6">
            <NumberInputField
              name="price"
              id="price"
              placeholder="Precio"
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
            <Link to="/products">
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
              {productId != null ? "Editar" : "Agregar"}
            </Button>
          </Flex>
        </Box>
      </form>
    </Box>
  );
};

export default ProductsAdd;
