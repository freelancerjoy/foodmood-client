import React, { useContext } from "react";
import { useLoaderData } from "react-router-dom";
import { AuthContext } from "../../../Provider/AuthProvider";

const Recipe = () => {
  const { chefs } = useContext(AuthContext);

  const recipes = useLoaderData();
  const chef = chefs.find((chef) => chef.id === recipes[0]?.recipe_id);
  const { id, name, exparince, recipe, likes, img } = chef;
  console.log(recipes);
  console.log(chef);
  return (
    <div>
      <div className="flex items-center gap-20">
        <div>
          <img src={img} alt="" />
        </div>
        <div>
          <h1
            className="text-4xl font-bold
          ">
            {name}
          </h1>
          <p>Followers : {likes}</p>
          <p>Number of Recipe : {recipe}</p>
          <p>Experience of : {exparince}</p>
        </div>
      </div>
    </div>
  );
};

export default Recipe;
