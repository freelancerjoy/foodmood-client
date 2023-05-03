import React from "react";
import Header from "../Pages/Shared/Header/Header";
import Footer from "../Pages/Shared/Footer/Footer";
import { Outlet, useNavigation } from "react-router-dom";
import ScrollToTop from "../Pages/scroll/scrollToTop";

const Main = () => {
  const navigation = useNavigation();
  return (
    <div>
      <Header></Header>
      <div>{navigation.state === "loading" ? "loading" : ""}</div>
      <ScrollToTop></ScrollToTop>
      <Outlet></Outlet>
      <Footer></Footer>
    </div>
  );
};

export default Main;
