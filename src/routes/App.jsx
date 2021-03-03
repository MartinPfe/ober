import { Flex } from "@chakra-ui/react";
import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { Home, Restaurants } from "../containers/";
import Layout from "../containers/main/Layout";
import RestaurantAdd from "../containers/restaurants/RestaurantAdd";
const App = () => {
  return (
    <BrowserRouter>
      <Layout>
        <Flex height="auto">
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/restaurants" component={Restaurants} />
            <Route exact path="/restaurants/add" component={RestaurantAdd} />
            <Route
              exact
              path="/restaurants/add/:restaurantId"
              component={RestaurantAdd}
            />
          </Switch>
        </Flex>
      </Layout>
    </BrowserRouter>
  );
};
export default App;
