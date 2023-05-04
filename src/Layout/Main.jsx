import React from "react";
import Header from "../Pages/Shared/Header/Header";
import Footer from "../Pages/Shared/Footer/Footer";
import { Outlet, useNavigation } from "react-router-dom";
import ScrollToTop from "../Pages/scroll/scrollToTop";
import { FidgetSpinner } from "react-loader-spinner";
import Spinner from "../Pages/Shared/Spinner/Spinner";

const Main = () => {
  const navigation = useNavigation();
  console.log(navigation.state);
  return (
    <div>
      <Header></Header>
      <ScrollToTop></ScrollToTop>
      <div>
        {navigation.state === "loading" && <Spinner></Spinner>}
        <Outlet />
      </div>

      <Footer></Footer>
    </div>
  );
};

export default Main;
