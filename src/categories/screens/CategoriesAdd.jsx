import { Box, Button, Flex, Input, Text, useToast } from "@chakra-ui/react";
import React, { useRef, useState } from "react";
import { Link, useHistory, useParams } from "react-router-dom";
import useUser from "../../hooks/useUser";
import CategoryApi from "../api";

const CategoriesAdd = () => {
  const form = useRef(null);
  const history = useHistory();
  const user = useUser();
  const toast = useToast();
  const [mensajeError, setMensajeError] = useState("");

  const { categoryId } = useParams();

  const initialState = {
    form: {
      name: "",
      address: "",
    },
  };

  const [currentCategory, setCurrentCategory] = useState(initialState);

  const handleSubmit = () => {
    const formData = new FormData(form.current);
    const formCategory = {
      name: formData.get("name"),
      address: formData.get("address"),
    };

    if (formCategory.name.length < 3) {
      setMensajeError("Ingrese el nombre de la categoria");
      return false;
    }

    if (categoryId != null) {
      CategoryApi.update(user.uid, categoryId, formCategory);
    } else {
      CategoryApi.add(user.uid, formCategory);
    }
    showToast();
    setTimeout(() => {
      history.push("/categories");
    }, 3);
  };

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
        CategoryApi.get(user.uid, categoryId, (category) => {
          const updatedState = {
            form: {
              name: category.name,
              address: category.address,
            },
          };

          setCurrentCategory(updatedState);
        });
      }
    }
  }, [user, categoryId]);

  const handleChange = (e) => {
    setCurrentCategory({
      form: {
        ...currentCategory.form,
        [e.target.name]: e.target.value,
      },
    });
  };

  return (
    <Box>
      <Text fontSize="3xl">Nuevo categoría </Text>
      <form ref={form}>
        <Box width="360px">
          <Input
            type="text"
            name="name"
            id="name"
            placeholder="Nombre"
            mb="6"
            value={currentCategory.form.name || ""}
            onChange={handleChange}
          />

          <Text
            fontSize="xl"
            mb="6"
            color="red"
            display={mensajeError !== "" ? "block" : "none"}
          >
            {mensajeError}
          </Text>

          <Flex col="2" justifyContent="space-between">
            <Link to="/categorys">
              <Button bg="blue.400" fontWeight="bold" color="white">
                Volver
              </Button>
            </Link>
            <Button
              type="button"
              bg="green.400"
              fontWeight="bold"
              color="white"
              onClick={handleSubmit}
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
