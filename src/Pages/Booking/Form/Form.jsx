import React, { useState } from "react";
import Address from "./Address/Address";
import Ambulance from "./Ambulance/Ambulance";
import Hospital from "./Hospital/Hospital";
import homeMarker from "../../../assets/homeMarker.svg";
import ConfirmBook from "./ConfirmBook/ConfirmBook";
import Progressbar from "../../../components/Progressbar/Progressbar";
import locator from "../../../assets/LOGO-map.svg";
import hospital from "../../../assets/hospitalLogo.svg";
import cross from "../../../assets/cross.svg";
import "./style.css";
import { calculateNewValue } from "@testing-library/user-event/dist/utils";

const Form = ({
  formData,
  setFormData,
  forwardedRef,
  calculateRoute,
  center,
  map,
}) => {
  const [page, setPage] = useState(0);
  const FormTitles = [
    {
      title: "Enter your address",
      icon: locator,
    },
    {
      title: "Select your hospital",
      icon: hospital,
    },
    {
      title: "Select your Tier",
      icon: cross,
    },
    {
      title: "AMBR on the way",
      icon: cross,
    },
  ];

  const pageDisplay = () => {
    switch (page) {
      case 0:
        return (
          <Address
            formData={formData}
            setFormData={setFormData}
            forwardedRef={forwardedRef}
            center={center}
            map={map}
          />
        );
      case 1:
        return (
          <Hospital
            formData={formData}
            setFormData={setFormData}
            forwardedRef={forwardedRef}
          />
        );
      case 2:
        return <Ambulance formData={formData} setFormData={setFormData} />;
      case 3:
        return <ConfirmBook />;
      default:
        return <Address formData={formData} setFormData={setFormData} />;
    }
  };
  return (
    <>
      <div className="form-container">
        <div className="header">
          <div
            className="header-title"
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "center",
              alignItems: "center",
              fontSize: "14px",
              fontWeight: "200",
              wordSpacing: "4px",
              letterSpacing: "0.8px",
            }}
          >
            <img
              className="loc-img"
              src={FormTitles[page].icon}
              alt="Logo"
              style={{
                padding: "2px",
                marginRight: "10px",
              }}
            />
            <h1>{FormTitles[page].title}</h1>
          </div>
        </div>
        <div className="body">{pageDisplay()}</div>
        <div className="footer">
          <button
            className="back-btn"
            disabled={page == 0}
            onClick={() => setPage((currPage) => currPage - 1)}
          >
            {page == FormTitles.length - 1 ? "Arriving in " : "Back"}
          </button>
          <button
            className="next-btn"
            onClick={() => {
              if (page == FormTitles.length - 1) {
                alert("Booking Confirmed");
              } else {
                setPage((currPage) => currPage + 1);
                if (page == FormTitles.length - 2) {
                  {
                    calculateRoute();
                  }
                }
              }
            }}
          >
            {page == FormTitles.length - 1
              ? "15mins"
              : FormTitles.length - 2
              ? "Submit"
              : "Proceed"}
          </button>
        </div>
        <div className="progress-bar-card">
          <div className="progress-bar">
            <div
              style={{
                width:
                  page === 0
                    ? "20.3%"
                    : page == 1
                    ? "46.6%"
                    : page == 2
                    ? "70%"
                    : "100%",
              }}
            ></div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Form;
