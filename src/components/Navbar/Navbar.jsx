import React from "react";
import { Routes, Route, Link, BrowserRouter as Router } from "react-router-dom";
import "./style.css";
import Logo from "../../assets/LOGO.svg";

const Navbar = () => {
  return (
    <>
      <nav>
        <div>
          <img src={Logo} alt="LOGO" srcset="" className="logo" />
        </div>

        <ul className="links">
          <Link to="/" style={{ textDecoration: "none" }}>
            <p>Home</p>
          </Link>
          <Link to="/about" style={{ textDecoration: "none" }}>
            <p>About </p>
          </Link>
          <Link to="/contact" style={{ textDecoration: "none" }}>
            <p>Contact</p>
          </Link>
          <Link to="./booking" style={{ textDecoration: "none" }}>
            <p>Booking</p>
          </Link>
        </ul>
        <div>
          <button className="btn">Sign In</button>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
