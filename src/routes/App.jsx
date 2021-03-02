import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { Home, Restaurants } from "../containers/";
import Layout from "../containers/main/Layout";
import RestaurantAdd from "../containers/restaurants/RestaurantAdd";

const App = () => {
  return (
    <BrowserRouter>
      {/* <AppContext.Provider value={initialState}> */}
      <Layout>
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
      </Layout>
      {/* </AppContext.Provider> */}
    </BrowserRouter>
  );
};
export default App;
