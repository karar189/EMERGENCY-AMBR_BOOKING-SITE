import React from "react";
import "./style.css";
import car from "../../assets/ambuu.svg";
import { Routes, Route, Link, BrowserRouter as Router } from "react-router-dom";
import gif1 from "../../assets/Ambulance 3.gif";

const Home = () => {
  return (
    <>
      <div className="section-hero">
        <div className="hero-data">
          <h1 class="primary-heading">
            Fastest Way you can book an <br /> ambulance
          </h1>
          <p className="secondary-heading">
            One stop solution for your health emergencies
          </p>
          <div className="btn_1">
            <Link to="./booking" style={{ textDecoration: "none" }}>
              <button class="Acc-btn">
                <p>Book Now</p>
              </button>
            </Link>
          </div>
          <div className="ambulance-animation">
            <img
              className="car1"
              src={gif1}
              style={{ height: "300px", width: "300px" }}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
