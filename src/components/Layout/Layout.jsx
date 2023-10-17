import React from "react";
import Navbar from "./Navbar/Navbar";
import Footer from "./Footer/Footer";

const Layout = ({ children }) => {
  return (
    <>
      <div className="">
        <Navbar />
        <div className="">{children}</div>
        <Footer />
      </div>
    </>
  );
};

export default Layout;
