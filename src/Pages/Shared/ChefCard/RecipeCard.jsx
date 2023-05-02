import { Rating } from "@smastrom/react-rating";
import React from "react";
import { FcCheckmark } from "react-icons/fc";
import "@smastrom/react-rating/style.css";

const RecipeCard = ({ recipe }) => {
  const { id, recepe_name, coocking_method, rating, ingredients, recipe_img } =
    recipe;
  const handleClick = (event) => {
    event.currentTarget.disabled = true;
  };
  return (
    <div className="w-11/12 mx-auto py-5">
      <div className="card lg:card-side grid grid-cols-2 bg-base-100 shadow-xl">
        <div className="card-body">
          <h2 className="card-title text-3xl">{recepe_name}</h2>
          <ul>
            <p className="mb-2 font-bold">Ingredients</p>
            {ingredients.map((ingredient) => (
              <li className="flex items-center gap-2">
                <FcCheckmark></FcCheckmark>
                {ingredient}
              </li>
            ))}
          </ul>
          <p>
            <span className="font-bold">Cooking Method : </span>
            {coocking_method}
          </p>
          <Rating style={{ maxWidth: 180 }} value={rating} readOnly />

          <div className="card-actions justify-end">
            <button
              onClick={handleClick}
              className="btn btn-primary bg-rose-500">
              Favourite
            </button>
          </div>
        </div>
        <figure>
          <img className="img-full" src={recipe_img} alt="Album" />
        </figure>
      </div>
    </div>
  );
};

export default RecipeCard;
