import { Flex } from "@chakra-ui/react";
import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import CategoriesAdd from "../categories/screens/CategoriesAdd";
import CategoriesScreen from "../categories/screens/CategoriesScreen";
import { Home, Restaurants } from "../containers/";
import Layout from "../containers/main/Layout";
import RestaurantAdd from "../containers/restaurants/RestaurantAdd";
import RestaurantMenu from "../menu/screens/RestaurantMenu";
import ProductsAdd from "../products/screens/ProductsAdd";
import ProductsScreen from "../products/screens/ProductsScreen";
const App = () => {
  return (
    <BrowserRouter>
      <Layout>
        <Flex display="flex" flexGrow flexDirection="column" p="6">
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/restaurants" component={Restaurants} />
            <Route exact path="/restaurants/add" component={RestaurantAdd} />
            <Route
              exact
              path="/restaurants/add/:restaurantId"
              component={RestaurantAdd}
            />
            <Route exact path="/categories" component={CategoriesScreen} />
            <Route exact path="/categories/add" component={CategoriesAdd} />
            <Route
              exact
              path="/categories/add/:categoryId"
              component={CategoriesAdd}
            />
            <Route exact path="/products" component={ProductsScreen} />
            <Route exact path="/products/add" component={ProductsAdd} />
            <Route
              exact
              path="/products/add/:productId"
              component={ProductsAdd}
            />
          </Switch>
        </Flex>
      </Layout>
      <Route
        exact
        path="/menu/:userId/:restaurantId"
        component={RestaurantMenu}
      />
    </BrowserRouter>
  );
};
export default App;
