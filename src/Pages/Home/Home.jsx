import React from "react";
import banner from "../../assets/baanner.jpg";

const Home = () => {
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
    </div>
  );
};

export default Home;
