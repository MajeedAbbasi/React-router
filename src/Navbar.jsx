import React from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
const Navbar = () => {
  return (
    <div>
      <ul className="navbar">
        <li>
          <NavLink
            style={({ isActive }) => {
              return { color: isActive ? "red" : "black" };
            }}
            className=" navlink"
            to="/"
          >
            Home
          </NavLink>
        </li>
        <li>
          <NavLink
            style={({ isActive }) => {
              return { color: isActive ? "red" : "black" };
            }}
            className=" navlink"
            to="/about"
          >
            About
          </NavLink>
        </li>
        <li>
          <NavLink
            style={({ isActive }) => {
              return { color: isActive ? "red" : "black" };
            }}
            className=" navlink"
            to="/contact"
          >
            Contact
          </NavLink>
        </li>
        <li>
          <NavLink
            style={({ isActive }) => {
              return { color: isActive ? "red" : "black" };
            }}
            className=" navlink"
            to="/login"
          >
            Login
          </NavLink>
        </li>
        <li>
          <NavLink
            style={({ isActive }) => {
              return { color: isActive ? "red" : "black" };
            }}
            className=" navlink"
            to="/user/majeed"
          >
            Majeed
          </NavLink>
        </li>
        <li>
          <NavLink
            style={({ isActive }) => {
              return { color: isActive ? "red" : "black" };
            }}
            className=" navlink"
            to="/user/ali"
          >
            Ali
          </NavLink>
        </li>
        <li>
          <NavLink
            style={({ isActive }) => {
              return { color: isActive ? "red" : "black" };
            }}
            className=" navlink"
            to="filter"
          >
            Filter
          </NavLink>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
