import { Box, Button, Flex, HStack, Text } from "@chakra-ui/react";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import useUser from "../../hooks/useUser";
import RestaurantApi from "../api";
import RestaurantCard from "./RestaurantCard";
const RestaurantList = () => {
  const user = useUser();

  const [Restaurants, setRestaurants] = useState([]);

  const updateRestaurantes = () => {
    if (user != null) {
      RestaurantApi.getAll(user.uid, (restaurants) => {
        console.log("restaurantes:", restaurants);
        setRestaurants(restaurants);
      });
    }
  };

  React.useEffect(() => {
    if (user != null) {
      RestaurantApi.getAll(user.uid, (restaurants) => {
        console.log("restaurantes:", restaurants);
        setRestaurants(restaurants);
      });
    }
  }, [user]);

  return (
    <Box>
      <Flex justifyContent="space-between">
        <Text fontSize="3xl">Restaurantes </Text>
        <Link to="/restaurants/add">
          {" "}
          <Button bgColor="green.300">Agregar Restaurante</Button>
        </Link>
      </Flex>
      <HStack col={1} spacing="24px">
        {Restaurants.map((restaurant) => (
          <RestaurantCard
            user={user}
            callbackFunc={updateRestaurantes}
            key={restaurant.id}
            restaurant={restaurant}
          />
        ))}
      </HStack>
    </Box>
  );
};

export default RestaurantList;
