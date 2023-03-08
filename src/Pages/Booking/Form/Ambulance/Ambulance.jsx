import React from "react";
import Payment from "./Payment/Payment";
import "./style.css";
import Logogo from "../../../../assets/ambulance-go.svg";
import Logoex from "../../../../assets/ambulance-excel.svg";
import cash from "../../../../assets/cash.svg";

import Drawer from "react-bottom-drawer";

const Ambulance = ({ formData, setFormData }) => {
  const ambulanceList = [
    {
      name: "AMBR Go",
      desc: "Standard Ambulance fastest service",
      rating: 4.5,
      time: 10,
      price: 500,
      img: Logogo,
    },
    {
      name: "AMBR Excel",
      desc: "trained helper, O2 facilities",
      rating: 4.5,
      time: 15,
      price: 700,
      img: Logoex,
    },
    {
      name: "AMBR Plus",
      desc: "trained helper, O2 & blood transfer",
      rating: 4.5,
      time: 10,
      price: 1000,
      img: Logoex,
    },
  ];
  const [isVisible, setIsVisible] = React.useState(true);
  const openDrawer = React.useCallback(() => setIsVisible(true), []);
  const closeDrawer = React.useCallback(() => setIsVisible(false), []);
  return (
    <>
      <div className="scroll2">
        {ambulanceList.map((ambulance) => (
          <label>
            <input type="radio" className="card-input-element" />
            <div className="ambulance-card card-input">
              <div className="card1">
                <img
                  src={ambulance.img}
                  alt="Logogo"
                  style={{ height: "60px", width: "60px" }}
                />
              </div>

              <div className="card2">
                <div className="abu-detail" style={{ width: "90x" }}>
                  <p>
                    <b>{ambulance.name}</b>
                  </p>
                  <p>{ambulance.desc}</p>
                </div>
                <div className="abu-price">
                  <p className="priceColor">
                    <b> ₹ {ambulance.price}</b>
                  </p>
                  <p>{ambulance.time} mins</p>
                </div>
              </div>
            </div>
          </label>
        ))}
      </div>

      <div className="payment-box">
        <div className="logo">
          <img
            src={cash}
            style={{ height: "50px", width: "60px" }}
            alt="cashlogo"
          />
        </div>
        <div className="type-payment">
          <h2 style={{ fontSize: "21px", marginLeft: "10px" }}>Cash</h2>
        </div>
        <div className="pay-now">
          <button className="pay-btn" onClick={openDrawer}>
            Change {" >"}
          </button>
        </div>
      </div>
      {/* <center>
        <button className="open-btn" onClick={openDrawer}>
          SHOW ME THE DIALOG!
        </button>
      </center> */}
      <Drawer
        duration={250}
        // hideScrollbars={true}
        onClose={closeDrawer}
        isVisible={isVisible}
      >
        <Payment />
      </Drawer>
    </>
  );
};

export default Ambulance;
