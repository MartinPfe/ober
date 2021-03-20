import { Box, Button, Flex, Image, Text, useToast } from "@chakra-ui/react";
import React from "react";
import { Link } from "react-router-dom";
import QRGenerator from "../../components/QRGenerator";
import useUser from "../../hooks/useUser";
import RestaurantApi from "../api";

const RestaurantCard = ({ restaurant, callbackFunc }) => {
  const user = useUser();
  const toast = useToast();

  const deleteRestaurant = () => {
    RestaurantApi.delete(user.uid, restaurant.id);
    showToast();
    callbackFunc();
  };

  const showToast = () => {
    toast({
      title: `Restaurante eliminado correctamente!`,
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
        {restaurant.name}
      </Text>
      <Text paddingBottom="2" align="center">
        {restaurant.address}
      </Text>

      <Box>
        <QRGenerator
          name={restaurant.name}
          userId={user.uid}
          restaurantId={restaurant.id}
        />
      </Box>
      <Flex justifyContent="space-between">
        <Link to={`/restaurants/add/${restaurant.id}`}>
          <Button bg="blue.300">Editar</Button>
        </Link>
        <Link to={`/menu/${user.uid}/${restaurant.id}`}>
          <Button bg="blue.300">Ver Menu</Button>
        </Link>
        <Button bg="red.300" onClick={deleteRestaurant}>
          Eliminar
        </Button>
      </Flex>
    </Box>
  );
};

export default RestaurantCard;
