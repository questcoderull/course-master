import React from "react";
import { NavLink, Outlet } from "react-router";

const AuthLayout = () => {
  return (
    <div className="max-w-11/12 mx-auto my-5.5">
      <div className="ml-11">
        <NavLink to="/">
          <button className="btn btn-primary">Home</button>
        </NavLink>
      </div>
      <Outlet></Outlet>
    </div>
  );
};

export default AuthLayout;
