import React, { use } from "react";
import { FaSignInAlt, FaUserPlus } from "react-icons/fa";
import { NavLink } from "react-router";
import { AuthContext } from "../../../contexts/AuthConterxts/AuthContext";

const Navbar = () => {
  const { user, logOut } = use(AuthContext);

  const navItems = (
    <>
      <li className="hover:bg-primary rounded-md transition m-0.5">
        <NavLink
          to="/"
          className="flex items-center gap-2 px-3 py-2 rounded-md text-primary hover:text-white"
        >
          Home
        </NavLink>
      </li>
      <li className="hover:bg-primary rounded-md transition m-0.5">
        <NavLink
          to="/courses"
          className="flex items-center gap-2 px-3 py-2 rounded-md text-primary hover:text-white"
        >
          Courses
        </NavLink>
      </li>
      <li className="hover:bg-primary rounded-md transition m-0.5">
        <NavLink
          to="/my-courses"
          className="flex items-center gap-2 px-3 py-2 rounded-md text-primary hover:text-white"
        >
          My courses
        </NavLink>
      </li>
    </>
  );

  const handleLogOut = () => {
    logOut()
      .then((result) => {
        console.log(result);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div className="navbar bg-base-100 shadow-sm">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {" "}
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />{" "}
            </svg>
          </div>
          <ul
            tabIndex="-1"
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
          >
            {navItems}
          </ul>
        </div>
        <a className="btn btn-ghost text-xl font-extrabold text-primary">
          Course<span className="text-secondary">Master</span>
        </a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">{navItems}</ul>
      </div>
      <div className="navbar-end">
        <div className="hidden lg:flex items-center gap-2">
          {user ? (
            // user logged in → show logout or profile
            <button
              onClick={() => handleLogOut()}
              className="btn btn-sm btn-error"
            >
              Logout
            </button>
          ) : (
            // user not logged in → show login + signup
            <>
              <NavLink
                to="/login"
                className={({ isActive }) =>
                  `btn btn-sm flex items-center gap-2 ${
                    isActive ? "btn-primary text-white" : "btn-accent"
                  }`
                }
              >
                <FaSignInAlt />
                Login
              </NavLink>

              <NavLink
                to="/signup"
                className={({ isActive }) =>
                  `btn btn-sm flex items-center gap-2 ${
                    isActive ? "btn-primary text-white" : "btn-accent"
                  }`
                }
              >
                <FaUserPlus />
                Sign Up
              </NavLink>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
