import React, { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../../../Provider/AuthProvider";
import ActiveLink from "../ActiveRoute/ActiveLink";

const Header = () => {
  const { user, logOut } = useContext(AuthContext);
  // User log out handler
  const handlelogOut = () => {
    logOut();
  };
  return (
    <div className=" bg-rose-50">
      <div className=" w-11/12 m-auto">
        <div className="lg:flex text-center  lg:justify-between items-center py-5 md:flex-row">
          <h3 className="text-2xl font-bold border border-spacing-3 rounded-md border-rose-600 p-2 max-w-sm">
            FoodMood
          </h3>
          <nav className="lg:flex m-auto md:flex-row pt-2 md:mt-0 md:space-y-2 space-y-3 lg:space-y-0 lg:space-x-8 text-gray-600 my-2">
            <ActiveLink to="/">Home</ActiveLink>
            <ActiveLink to="/blog">Blog</ActiveLink>
          </nav>
          <Link to="/login">
            <div className="flex justify-center md:my-0 my-8">
              {user ? (
                <div className="flex lg:flex-row flex-col items-center gap-6">
                  <span title={user?.displayName} className="inline-block">
                    <img
                      className="rounded-full w-12 h-12"
                      src={user?.photoURL}
                      alt="user image"
                    />
                  </span>
                  <Link too="/">
                    <button
                      onClick={handlelogOut}
                      className="btn rounded-full md:px-8 bg-rose-500">
                      Logout
                    </button>
                  </Link>
                </div>
              ) : (
                <button className="btn bg-rose-500 rounded-full md:px-8">
                  Login
                </button>
              )}
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Header;
