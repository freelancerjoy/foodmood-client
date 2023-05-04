import React, { useContext, useEffect, useState } from "react";
import { FidgetSpinner } from "react-loader-spinner";
import ChefCardSingle from "./ChefcardSingle";
import { AuthContext } from "../../../Provider/AuthProvider";

const ChefCard = () => {
  // Get data from Authcontext : fetch all chefs
  const { chefs } = useContext(AuthContext);
  // Spinner using data fetch loadtime
  const [loader, setLoder] = useState(true);
  // when chefs array is empty Starting spinner
  useEffect(() => {
    if (chefs.length == 0) {
      setLoder(false);
    } else {
      setLoder(true);
    }
  }),
    [chefs];
  return (
    <div>
      <div className="pt-10">
        <h2 className="text-4xl font-bold text-center text-rose-700">
          Our Chefs
        </h2>
        <p className="text-center mt-2 text-slate-400">
          The flavor of the dish was excellent, but the texture was a bit off.
          Could you try adjusting the cooking.
        </p>
      </div>
      <div>
        {loader ? (
          <div className="grid md:grid-cols-2 grid-cols-1 lg:grid-cols-3 gap-8 py-10 w-11/12 justify-center mx-auto">
            {chefs.map((chef) => (
              <ChefCardSingle key={chef.id} chef={chef}></ChefCardSingle>
            ))}
          </div>
        ) : (
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
      </div>
    </div>
  );
};

export default ChefCard;
