import React from "react";
import { FaFacebook, FaGoogle, FaInstagram } from "react-icons/fa";

const Footer = () => {
  return (
    <div>
      <footer className="footer p-10 bg-rose-700 text-white">
        <div className="w-72">
          <span className="text-2xl font-semibold mb-3 text-white">
            About Us
          </span>
          <p>
            At FoodMood, we're passionate about creating delicious, high-quality
            food products that bring people together.
          </p>
          <span className="flex gap-9 my-3 text-2xl">
            <FaFacebook></FaFacebook>
            <FaGoogle></FaGoogle>
            <FaInstagram></FaInstagram>
          </span>
        </div>
        <div>
          <span className="text-2xl font-semibold mb-3 text-white">
            Quick Links
          </span>
          <a className="link link-hover">LAtest News</a>
          <a className="link link-hover">Recipes</a>
          <a className="link link-hover">Our Product</a>
          <a className="link link-hover">Our Author</a>
        </div>
        <div>
          <span className="text-2xl font-semibold mb-3 text-white">
            Recent Recipes
          </span>
          <div className="flex items-start gap-2">
            <img
              className="w-16 h-16"
              src="https://assets.bonappetit.com/photos/61b775620fb3fcc4cbf036c1/1:1/w_1920,c_limit/20211208%20Spaghetti%20Squash%20with%20Tomato%20Sauce%20and%20Mozarella%20LEDE.jpg"
              alt=""
            />
            <div>
              <p className="font-bold font-2xl"> BA's Best Ziti</p>
              <a className="link link-hover">
                These potato starch noodles <br /> from my book Tenderheart
              </a>
            </div>
          </div>
          <div className="flex items-start gap-2">
            <img
              className="w-16 h-16"
              src="https://assets.bonappetit.com/photos/631b47270d376dca32f93400/1:1/w_1920,c_limit/0909-seo-baked-ziti-lede.jpg"
              alt=""
            />
            <div>
              <p className="font-bold font-2xl"> Baked Ziti</p>
              <a className="link link-hover">
                In a surprise to absolutely <br /> no one, spaghetti squash
              </a>
            </div>
          </div>
        </div>
      </footer>
      <footer className="footer px-10 border-t bg-base-200 text-base-content border-base-300"></footer>
    </div>
  );
};

export default Footer;
