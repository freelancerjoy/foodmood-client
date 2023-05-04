import React from "react";
import Header from "../Pages/Shared/Header/Header";
import Footer from "../Pages/Shared/Footer/Footer";
import { Outlet, useNavigation } from "react-router-dom";
import ScrollToTop from "../Pages/scroll/scrollToTop";
import { FidgetSpinner } from "react-loader-spinner";

const Main = () => {
  const navigation = useNavigation();
  console.log(navigation.state);
  return (
    <div>
      <Header></Header>
      <ScrollToTop></ScrollToTop>
      <div>
        {navigation.state === "loading" && (
          <div className="flex justify-center py-12">
            <FidgetSpinner
              visible={true}
              height="80"
              width="80"
              ariaLabel="dna-loading"
              wrapperStyle={{}}
              wrapperClass="dna-wrapper"
              ballColors={["#ff0000", "#00ff00", "#0000ff"]}
              backgroundColor="#F4442E"
            />
          </div>
        )}

        <Outlet />
      </div>

      <Footer></Footer>
    </div>
  );
};

export default Main;
