import {
  faArrowRightFromBracket,
  faUser,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { signOut } from "firebase/auth";
import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { Link, useNavigate } from "react-router-dom";
import { auth } from "../../firebase.init";
import useAdmin from "../../hooks/useAdmin";
import chondoLogo from "../../imgs/Chondo Main Logo.svg";
import "./Navbar.css";

const Navbar = () => {
  const [user] = useAuthState(auth);
  const navigate = useNavigate(auth);
  const [admin] = useAdmin(user);
  const logout = () => {
    signOut(auth);
    navigate("/");
  };
  return (
    <div className="bg-accent nav-container">
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
        </div>
        <div className="navbar  mx-auto hidden lg:flex">
          <ul className="menu menu-horizontal mx-auto p-0 uppercase">
            <Link to="/" className="mx-auto  text-xl uppercase">
              <img className="w-10" src={chondoLogo} alt="" />
            </Link>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/blogs">Blogs</Link>
            </li>
            {admin && user && (
              <>
                <li>
                  <Link to="/addblog">Add a new blog</Link>
                </li>
                <li>
                  <Link to="/managechondo">Manage Chondo</Link>
                </li>
                <li>
                  <Link to="/makeadmin">Make Admin</Link>
                </li>
              </>
            )}

            {user ? (
              <button onClick={logout}>
                <FontAwesomeIcon
                  className="ring-2 rounded-full p-1 mx-2 ring-black h-3"
                  icon={faArrowRightFromBracket}
                ></FontAwesomeIcon>
              </button>
            ) : (
              ""
            )}
          </ul>
        </div>
        <div className="w-full text-end block md:hidden">
          {user ? (
            <button onClick={logout} className="btn btn-xs btn-outline">
              Logout
            </button>
          ) : (
            ""
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
