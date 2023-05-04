import React from "react";
import banner from "../../../assets/baanner.jpg";

// Slider section Home page Displayed

const Slider = () => {
  return (
    <div className="carousel w-full">
      <div id="slide1" className="carousel-item py-5 lg:py-0 relative w-full">
        <div className="absolute lg:top-40 top-10 left-20 lg:left-28 ">
          <h1 className="lg:text-5xl md:text-4xl md:font-bold font-semibold text-2xl lg:font-bold ">
            Good food choices <br /> are good investments.
          </h1>
          <p className=" md:block hidden md:py-5 py-2 md:pr-[500px] pr-[200px] lg:pr-[700px]">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. <br />{" "}
            Etiam et purus a odio finibus bibendum amet leo.
          </p>
          <button className="btn rounded-full lg:mt-0 mt-5 bg-rose-500 lg:px-10 px-5 text-white">
            See More
          </button>
        </div>
        <div>
          <img src={banner} className="w-full" />
        </div>
        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
          <a href="#slide1" className="btn btn-circle">
            ❮
          </a>
          <a href="#slide2" className="btn btn-circle">
            ❯
          </a>
        </div>
      </div>
      <div id="slide2" className="carousel-item relative w-full">
        <div className="absolute lg:top-40 top-10 left-20 lg:left-28 ">
          <h1 className="lg:text-5xl md:text-4xl md:font-bold font-semibold text-2xl lg:font-bold ">
            Good food choices <br /> are good investments.
          </h1>
          <p className=" md:block hidden md:py-5 py-2 md:pr-[500px] pr-[200px] lg:pr-[700px]">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. <br />{" "}
            Etiam et purus a odio finibus bibendum amet leo.
          </p>
          <button className="btn rounded-full lg:mt-0 mt-5 bg-rose-500 lg:px-10 px-5 text-white">
            See More
          </button>
        </div>
        <div>
          <img src={banner} className="w-full" />
        </div>
        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
          <a href="#slide2" className="btn btn-circle">
            ❮
          </a>
          <a href="#slide1" className="btn btn-circle">
            ❯
          </a>
        </div>
      </div>
    </div>
  );
};

export default Slider;
