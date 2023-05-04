import React from "react";
import { FidgetSpinner } from "react-loader-spinner";
import { Outlet, useNavigation } from "react-router-dom";

const Spinner = ({ children }) => {
  const navigation = useNavigation();
  if (navigation.state === "loading") {
    return (
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
    );
  }
  return children;
};

export default Spinner;
