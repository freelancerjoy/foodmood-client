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
          <a className="link link-hover">Terms of use</a>
          <a className="link link-hover">Privacy policy</a>
          <a className="link link-hover">Cookie policy</a>
        </div>
      </footer>
      <footer className="footer px-10 py-4 border-t bg-base-200 text-base-content border-base-300"></footer>
    </div>
  );
};

export default Footer;
