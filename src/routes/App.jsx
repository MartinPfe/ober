import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { Home, Restaurants } from "../containers/";
import Layout from "../containers/main/Layout";

const App = () => {
  return (
    <BrowserRouter>
      {/* <AppContext.Provider value={initialState}> */}
      <Layout>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/restaurants" component={Restaurants} />
        </Switch>
      </Layout>
      {/* </AppContext.Provider> */}
    </BrowserRouter>
  );
};
export default App;
