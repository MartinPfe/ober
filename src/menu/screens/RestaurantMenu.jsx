import { Box } from "@chakra-ui/layout";
import React, { useState } from "react";
import { useParams } from "react-router";
import ProductsApi from "../../products/api";
import MenuApi from "../api";
import CategoryMenu from "./CategoryMenu";

const RestaurantMenu = () => {
  const { userId, restaurantId } = useParams();

  const [categories, setCategories] = useState([]);

  const [products, setProducts] = useState([]);

  React.useEffect(() => {
    if (restaurantId != null) {
      MenuApi.get(userId, restaurantId, (restaurant) => {
        console.log("restaurante:", restaurant);
        setCategories(restaurant.categories);
      });
    }
  }, [userId, restaurantId]);

  React.useEffect(() => {
    console.log("userId:", userId);

    ProductsApi.getAll(userId, (data) => {
      console.log("data:", data);
      setProducts(data);
    });
  }, [userId]);

  return (
    <Box>
      {categories.map((categoryId) => (
        <CategoryMenu
          userId={userId}
          key={categoryId}
          categoryId={categoryId}
          products={products.filter((p) => p.categoryId === categoryId)}
        />
      ))}
    </Box>
  );
};

export default RestaurantMenu;
