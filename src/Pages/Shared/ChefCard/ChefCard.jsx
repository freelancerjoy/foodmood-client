import React from "react";
import { Link } from "react-router-dom";

const ChefCard = ({ chef }) => {
  const { id, name, exparince, recipe, likes, img } = chef;
  return (
    <div>
      <div className="card w-96 bg-base-100 shadow-xl">
        <figure>
          <img src={img} alt="chef" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">
            {name}
            <div className="badge bg-rose-600 badge-secondary">
              Experince of : {exparince}
            </div>
          </h2>
          <p>Numbers of Recipes : {recipe}</p>
          <p>Followers : {likes}</p>
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

export default ChefCard;
