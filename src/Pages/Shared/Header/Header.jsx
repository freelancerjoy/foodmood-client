import React from "react";
import { Link, NavLink } from "react-router-dom";

const Header = () => {
  return (
    <div className=" bg-rose-50">
      <div className=" w-11/12 m-auto">
        <div className="lg:flex text-center  lg:justify-between items-center py-5 md:flex-row">
          <h3 className="text-2xl font-bold">FoodMood</h3>
          <ul className="lg:flex m-auto md:flex-row md:space-y-2 lg:space-y-0 lg:space-x-8 text-gray-600 my-2">
            <li>
              <NavLink
                className={({ isActive }) =>
                  isActive ? "font-bold text-rose-600" : "hover:text-rose-500"
                }
                to="/">
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                className={({ isActive }) =>
                  isActive ? "font-bold text-rose-600 " : "hover:text-rose-500"
                }
                to="/blog">
                Blog
              </NavLink>
            </li>
          </ul>
          <NavLink>
            <p>User Profile</p>
            <button>Login</button>
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default Header;