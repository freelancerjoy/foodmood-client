import React, { useContext, useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { AuthContext } from "../../../Provider/AuthProvider";
import RecipeCard from "./RecipeCard";
import { FidgetSpinner } from "react-loader-spinner";

const Recipe = () => {
  const { chefs } = useContext(AuthContext);
  const [loader, setLoder] = useState(true);

  useEffect(() => {
    if (chefs.length == 0) {
      setLoder(false);
    } else {
      setLoder(true);
    }
  });

  const recipes = useLoaderData();

  const chef = chefs.find((chef) => chef?.id === recipes[0]?.recipe_id);

  console.log(recipes);
  console.log(chef);
  return (
    <div>
      <div className="bg-rose-50">
        {" "}
        <div className="grid grid-cols-1 lg:grid-cols-2 lg:text-left text-center lg:pb-0 mb-8 pb-5 w-10/12 mx-auto ">
          <div>
            <img
              className="w-5/6 m-auto  rounded-full"
              src={chef?.img}
              alt=""
            />
          </div>
          <div className="py-5 ">
            <h1
              className="text-4xl font-bold pb-3
          ">
              {chef?.name}
            </h1>
            <p>
              <span className="font-bold">Likes :</span> {chef?.likes}
            </p>
            <p className="my-2">
              {" "}
              <span className="font-bold">Number of Recipe :</span>{" "}
              {recipes.length}
            </p>
            <p className="my-2">
              <span className="font-bold">Experience of : </span>
              {chef?.exparince}
            </p>
            <p>
              <span className="font-bold">Bio : </span> {chef?.bio}
            </p>
          </div>
        </div>
      </div>
      {loader ? (
        <div className="lg:w-10/12 w-full grid grid-cols-1 lg:grid-cols-2 m-auto">
          {recipes?.map((recipe) => (
            <RecipeCard recipe={recipe}></RecipeCard>
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
  );
};

export default Recipe;
