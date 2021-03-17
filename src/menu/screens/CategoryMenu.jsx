import { Box, Text, Wrap, WrapItem } from "@chakra-ui/layout";
import React, { useState } from "react";
import CategoryApi from "../../categories/api";
import ProductMenu from "./ProductMenu";

const CategoryMenu = ({ userId, categoryId, products }) => {
  const [category, setCategory] = useState();

  React.useEffect(() => {
    if (categoryId != null) {
      CategoryApi.get(userId, categoryId, (category) => {
        console.log("category:", category);
        setCategory(category);
      });
    }
  }, [userId, categoryId]);

  console.log("categoryId:", categoryId);
  console.log("products:", products);
  return (
    <Box ml="8">
      <Text fontSize="3xl" fontWeight="bold">
        {category.name || ""}
      </Text>

      <Wrap mb="6">
        {products.map((product) => (
          <WrapItem mr="6">
            <ProductMenu product={product} />
          </WrapItem>
        ))}
      </Wrap>
    </Box>
  );
};

export default CategoryMenu;
