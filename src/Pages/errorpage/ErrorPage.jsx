import React from "react";
import Header from "../Shared/Header/Header";
import Footer from "../Shared/Footer/Footer";
import { useRouteError } from "react-router-dom";
import errorImg from "../../assets/error.jpg";

const ErrorPage = () => {
  const error = useRouteError();
  console.log(error);
  return (
    <div>
      <Header></Header>
      <div className="text-center max-w-md mx-auto py-12">
        <img className="w-full" src={errorImg} alt="" />
        <h1 className="text-2xl font-bold text-rose-600">
          {/* {error.error.message} */}
        </h1>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default ErrorPage;
