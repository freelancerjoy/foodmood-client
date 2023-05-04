import { Rating } from "@smastrom/react-rating";
import React from "react";
import { BsCheckLg } from "react-icons/bs";
import "@smastrom/react-rating/style.css";
import toast, { Toaster } from "react-hot-toast";

const RecipeCard = ({ recipe }) => {
  const { id, recepe_name, coocking_method, rating, ingredients, recipe_img } =
    recipe;
  const notify = () => toast.success("Faviourite your recipe");
  const handleClick = (event) => {
    notify();
    event.currentTarget.disabled = true;
  };
  return (
    <div className="w-11/12 mx-auto mt-5 mb-10  border-t-8">
      <div className="card lg:card-side bg-base-100 shadow-xl">
        <div className="card-body">
          <figure className="h-64 p-3">
            <img className="img-full rounded-md" src={recipe_img} alt="Album" />
          </figure>
          <h2 className="card-title text-3xl">{recepe_name}</h2>
          <ul>
            <p className="mb-2 font-bold">Ingredients</p>
            {ingredients.map((ingredient) => (
              <li className="flex items-center gap-2">
                <span className="text-rose-500">
                  <BsCheckLg></BsCheckLg>
                </span>
                {ingredient}
              </li>
            ))}
          </ul>
          <p>
            <span className="font-bold">Cooking Method : </span>
            {coocking_method}
          </p>
          <div className="flex items-center gap-2">
            <Rating style={{ maxWidth: 180 }} value={rating} readOnly />
            <span>{rating}</span>
          </div>

          <div className="card-actions justify-end">
            <button
              onClick={handleClick}
              className="btn rounded-full px-10 bg-rose-500">
              Favourite
            </button>
            <Toaster />
          </div>
        </div>
      </div>
    </div>
  );
};

export default RecipeCard;
