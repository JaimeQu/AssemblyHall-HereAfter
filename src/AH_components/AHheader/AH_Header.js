import React from "react";
import { NavLink, Link } from "react-router-dom";
import { ReactComponent as Logo } from "../../assets/AHLogo.svg";
// import { ReactComponent as Home } from "../../assets/";
// import { ReactComponent as Explore } from "../../assets/";
import "./AH_Header.css";
const Header = () => {
  return (
    <nav>
      <div className ="ah-header">
        <div className = "ah-svg">
          <Logo />
        </div>
        <div className = "ah-nav">
          <NavLink to="/">Home </NavLink>
          <NavLink to="/explore">About</NavLink>
          <button className = "button-header">Logout</button>
        </div>
      </div>
    </nav>
  );
};


export default Header;