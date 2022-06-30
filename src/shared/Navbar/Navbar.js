import { signOut } from "firebase/auth";
import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { Link } from "react-router-dom";
import { auth } from "../../firebase.init";
import chondoLogo from "../../imgs/Chondo Logo.svg";

const Navbar = () => {
  const [user] = useAuthState(auth);
  const logout = () => {
    signOut(auth);
  };
  return (
    <div className="bg-pink-200">
      <div className="navbar shadow-xl px-3 md:px-20">
        <div className="navbar-center ">
          <div className="dropdown">
            <label tabIndex="0" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </label>
            <ul
              tabIndex="0"
              className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
            >
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/blogs">Blogs</Link>
              </li>
              {user ? (
                <li>
                  <Link to="/addblog">Add a new blog</Link>
                </li>
              ) : (
                ""
              )}
            </ul>
          </div>
          <Link to="/" className="btn btn-ghost  text-xl uppercase">
            <img className="w-12" src={chondoLogo} alt="" />
          </Link>
        </div>
        <div className="navbar hidden lg:flex">
          <ul className="menu menu-horizontal p-0 uppercase">
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/blogs">Blogs</Link>
            </li>
            {user ? (
              <li>
                <Link to="/addblog">Add a new blog</Link>
              </li>
            ) : (
              ""
            )}
          </ul>
        </div>
        <div className="navbar-end">
          {user ? (
            <button onClick={logout} className="btn btn-xs btn-outline">
              Logout
            </button>
          ) : (
            <Link to="/login">
              <button className="btn btn-xs">Login</button>
            </Link>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
