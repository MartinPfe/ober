import React from "react";
import Footer from "./Footer";
import Header from "./Header";

const Layout = ({ children, props }) => {
  return (
    <>
      <Header />
      {children}

      {props?.hideLayout ? "" : <Footer />}
    </>
  );
};

export default Layout;
