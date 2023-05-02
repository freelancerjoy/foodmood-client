import React, { useContext } from "react";
import { useLoaderData } from "react-router-dom";
import { AuthContext } from "../../../Provider/AuthProvider";
import RecipeCard from "./RecipeCard";

const Recipe = () => {
  const { chefs } = useContext(AuthContext);

  const recipes = useLoaderData();
  const chef = chefs.find((chef) => chef?.id === recipes[0]?.recipe_id);
  //   const { id, name, exparince, recipe, likes, img } = chef;
  console.log(recipes);
  console.log(chef);
  return (
    <div>
      <div className="bg-rose-50">
        {" "}
        <div className="flex items-center  w-10/12 mx-auto ">
          <div>
            <img className="w-5/6 rounded-full" src={chef?.img} alt="" />
          </div>
          <div>
            <h1
              className="text-4xl font-bold py-5
          ">
              {chef?.name}
            </h1>
            <p>Followers : {chef?.likes}</p>
            <p>Number of Recipe : {recipes.length}</p>
            <p>Experience of : {chef?.exparince}</p>
          </div>
        </div>
      </div>
      <div className="w-10/12 m-auto">
        {recipes?.map((recipe) => (
          <RecipeCard recipe={recipe}></RecipeCard>
        ))}
      </div>
    </div>
  );
};

export default Recipe;
