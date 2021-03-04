import { Box, Button, Flex, Input, Text, useToast } from "@chakra-ui/react";
import React, { useRef, useState } from "react";
import { Link, useHistory, useParams } from "react-router-dom";
import RestaurantApi from "../../api/RestaurantApi";
import useUser from "../../hooks/useUser";

const RestaurantAdd = () => {
  const form = useRef(null);
  const history = useHistory();
  const user = useUser();
  const toast = useToast();
  const [mensajeError, setMensajeError] = useState("");

  const { restaurantId } = useParams();

  const initialState = {
    form: {
      name: "",
      address: "",
    },
  };

  const [currentRestaurant, setCurrentRestaurant] = useState(initialState);

  const handleSubmit = () => {
    const formData = new FormData(form.current);
    const formRestaurant = {
      name: formData.get("name"),
      address: formData.get("address"),
    };

    if (formRestaurant.name.length < 3) {
      setMensajeError("Ingrese el nombre del restaurante");
      return false;
    }

    if (formRestaurant.address.length < 3) {
      setMensajeError("Ingrese la dirección del restaurante");
      return false;
    }

    if (restaurantId != null) {
      RestaurantApi.update(user.uid, restaurantId, formRestaurant);
    } else {
      RestaurantApi.add(user.uid, formRestaurant);
    }
    showToast();
    setTimeout(() => {
      history.push("/restaurants");
    }, 3);
  };

  const showToast = () => {
    toast({
      title: `Restaurante ${
        restaurantId != null ? "Editado" : "Agregado"
      } correctamente!`,
      description: "Regreasando al menú.",
      status: "success",
      duration: 9000,
      isClosable: true,
    });
  };
  React.useEffect(() => {
    if (user != null) {
      if (restaurantId != null) {
        RestaurantApi.get(user.uid, restaurantId, (restaurant) => {
          const updatedState = {
            form: {
              name: restaurant.name,
              address: restaurant.address,
            },
          };

          setCurrentRestaurant(updatedState);
        });
      }
    }
  }, [user, restaurantId]);

  const handleChange = (e) => {
    setCurrentRestaurant({
      form: {
        ...currentRestaurant.form,
        [e.target.name]: e.target.value,
      },
    });
  };

  return (
    <Box>
      <Text fontSize="3xl">Nuevo restaurante </Text>
      <form ref={form}>
        <Box width="360px">
          <Input
            type="text"
            name="name"
            id="name"
            placeholder="Nombre"
            mb="6"
            value={currentRestaurant.form.name || ""}
            onChange={handleChange}
          />
          <Input
            type="text"
            name="address"
            placeholder="Dirección"
            mb="6"
            id="address"
            value={currentRestaurant.form.address || ""}
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
            <Link to="/restaurants">
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
              {restaurantId != null ? "Editar" : "Agregar"}
            </Button>
          </Flex>
        </Box>
      </form>
    </Box>
  );
};

export default RestaurantAdd;
