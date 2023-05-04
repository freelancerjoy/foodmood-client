import React from "react";
import { NavLink } from "react-router-dom";

const ActiveLink = ({ to, children }) => {
  console.log(to, children);
  return (
    <div>
      <NavLink
        to={to}
        className={({ isActive }) =>
          isActive ? "font-bold text-rose-600" : "hover:text-rose-500"
        }>
        {children}
      </NavLink>
    </div>
  );
};

export default ActiveLink;
