import React from "react";
import { Link } from "react-router-dom";

const ChefCardSingle = ({ chef }) => {
  const { id, name, exparince, recipe, likes, img } = chef;
  return (
    <div>
      <div className="card lg:w-96 bg-base-100 shadow-xl">
        <figure>
          <img src={img} alt="chef" />
        </figure>
        <div className="card-body px-6 py-2">
          <h2 className="card-title justify-between">
            {name}
            <div className="badge">Experince of : {exparince}</div>
          </h2>
          <p>
            Numbers of Recipes : <span className="text-rose-500">{recipe}</span>
          </p>
          <p>
            Likes : <span className="text-rose-500">{likes}</span>
          </p>
          <div className="card-actions justify-center py-3">
            <Link to={`recipe/${id}`}>
              <button className="btn btn-wide bg-rose-500">View Recipes</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChefCardSingle;
