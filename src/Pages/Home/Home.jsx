import React, { useContext, useEffect, useState } from "react";
import banner from "../../assets/baanner.jpg";
import ChefCard from "../Shared/ChefCard/ChefCard";
import { AuthContext } from "../../Provider/AuthProvider";

const Home = () => {
  const { chefs } = useContext(AuthContext);

  console.log(chefs);
  return (
    <div>
      <div className="carousel w-full">
        <div id="slide1" className="carousel-item py-5 lg:py-0 relative w-full">
          <div className="absolute lg:top-40  left-28 ">
            <h1 className="lg:text-5xl md:text-4xl md:font-bold font-semibold text-2xl lg:font-bold ">
              Good food choicesbr <br /> are good investments.
            </h1>
            <p className=" md:py-5 py-2 md:pr-[500px] pr-[200px] lg:pr-[700px]">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. <br />{" "}
              Etiam et purus a odio finibus bibendum amet leo.
            </p>
            <button className="btn bg-rose-500 px-10 text-white">
              See More
            </button>
          </div>
          <div>
            <img src={banner} className="w-full" />
          </div>
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide3" className="btn btn-circle">
              ❮
            </a>
            <a href="#slide2" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>
        <div id="slide2" className="carousel-item relative w-full">
          <div>
            <h1 className="absolute lg:top-40 md:top-20  left-20 text-5xl font-bold">
              Good food choicesbr <br /> are good investments.
            </h1>
          </div>
          <div>
            <img src={banner} className="w-full" />
          </div>
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide1" className="btn btn-circle">
              ❮
            </a>
            <a href="#slide3" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>
      </div>
      <div>
        <div className="pt-10">
          <h2 className="text-4xl font-bold text-center text-rose-700">
            Our Chefs
          </h2>
          <p className="text-center text-slate-400">
            The flavor of the dish was excellent, but the texture was a bit off.
            Could you try adjusting the cooking.
          </p>
        </div>
        <div className="grid grid-cols-3 gap-16 py-10 w-11/12 m-auto">
          {chefs.map((chef) => (
            <ChefCard key={chef.id} chef={chef}></ChefCard>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;
