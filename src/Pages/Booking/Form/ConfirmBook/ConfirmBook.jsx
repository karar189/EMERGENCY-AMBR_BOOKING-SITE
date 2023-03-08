import React from "react";
import profile from "../../../../assets/driver-profile.svg";
import "./style.css";
import ambulance from "../../../../assets/ambulance-excel.svg";
import phone from "../../../../assets/phone-logo.svg";
import message from "../../../../assets/message-logo.svg";
import star from "../.././../../assets/stars.svg";

const ConfirmBook = () => {
  return (
    <>
      <div className="confirm-details">
        <div className="driver-details">
          <img className="profile" src={profile} alt="profile" />

          <div className="driver">
            <h3 className="driver-name">Driver</h3>
            <p>Sean Donawan</p>
          </div>

          <div className="driver-ratings">
            {" "}
            <img src={star} style={{ width: "90px" }} alt="" />
            <p>3.5/5</p>
          </div>
        </div>
        <div className="car-details">
          <img className="ambupic" src={ambulance} alt="profile" />

          <div className="car">
            <h3 className="car-name">Vehicle No.</h3>
            <p>SF0459E</p>
          </div>
        </div>
        {/* 
        <div className="ambulance-details">
          <img className="car" src={ambulance} alt="car" />
          <p className="driver">
            Vehicle No.
            <br />
            <span>
              <b>WB-1826</b>
            </span>
          </p>
          <div></div> <div></div> <div></div>
        </div> */}

        <div className="con-amb">Contact Ambulance</div>

        <div className="contact-details">
          <div className="number">+91 9330440021</div>
          <img
            className="phone"
            onClick={() => {
              window.open("tel:1234567890");
            }}
            src={phone}
            alt="phone-icon"
          />
          <img
            className="message"
            src={message}
            alt="message-icon"
            onClick={() => {
              window.open("https://wa.me/9330440021");
            }}
          />
          <div
            className="number"
            style={{ color: "#5fdcc6", cursor: "pointer" }}
            onClick={() => {
              alert("Booking Cancelled");
              window.location.reload();
            }}
          >
            Cancel
          </div>
        </div>
        <br />
        <div className="pay">Payment method</div>

        <div className="payment-details">
          <div className="cash">Cash</div>
          <div className="cash-amount">Rs.1000</div>
        </div>

        <hr />
      </div>
    </>
  );
};

export default ConfirmBook;
