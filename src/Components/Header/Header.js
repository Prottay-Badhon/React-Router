import React from "react";
import { Link, NavLink } from "react-router-dom";

const Header = () => {
  let activeStyle = {
    textDecoration: "none",
    color: "red",
  };
  return (
    <div>
      <h1>Welcome to my fancy router app</h1>
      <nav>
       
            <NavLink
              to="/home"
              style={({ isActive }) => (isActive ? activeStyle : undefined)}
            >
              Home
            </NavLink>
         
            <NavLink
              to="/about"
              style={({ isActive }) => (isActive ? activeStyle : undefined)}
            >
              About
            </NavLink>
         
            <NavLink
              to="/friends"
              style={({ isActive }) => (isActive ? activeStyle : undefined)}
            >
              Friends
            </NavLink>
            <NavLink
              to="/posts"
              style={({ isActive }) => (isActive ? activeStyle : undefined)}
            >
              Posts
            </NavLink>
          
      </nav>
    </div>
  );
};

export default Header;
