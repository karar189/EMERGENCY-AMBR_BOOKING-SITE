import React from "react";
import "./style.css";
import {
  Autocomplete, // necessary for Autocomplete
} from "@react-google-maps/api";
import location from "../../../../assets/location.svg";

const Address = ({
  formData,
  setFormData,
  forwardedRef,
  center,
  setCenter,
  map,
}) => {
  const handleInputChangeAddress = (e) => {
    setFormData({ ...formData, address: e.target.value });
    console.log(e.target.value);
  };
  const handleInputChangeLandmark = (e) => {
    setFormData({ ...formData, landmark: e.target.value });
    console.log(e.target.value);
  };
  const handleInputChangePincode = (e) => {
    setFormData({ ...formData, pincode: e.target.value });
    console.log(e.target.value);
  };
  const geocodeJson = "https://maps.googleapis.com/maps/api/geocode/json";
  const geocodeApiKey = "AIzaSyC7zvg4GcCd0EUescJBnU79y1-sN3qdfVI";

  return (
    <div className="address-box">
      <div className="address-wrap">
        <Autocomplete>
          <input


aw className="adrs"
            type="text"
            placeholder="Eg. 16, Fulton street, Apt no. 12"
            value={formData.address}
            onChange={handleInputChangeAddress}
            ref={forwardedRef[0]}
          />
        </Autocomplete>
      </div>
      <br />
      <div className="address-wrap">
        <input
          className="adrs"
          type="text"
          placeholder="Landmark near you"
          value={formData.landmark}
          onChange={handleInputChangeLandmark}
        />
      </div>

      <br />
      <div className="address-wrap">
        <input
          className="adrs"
          type="number"
          placeholder="Pincode"
          value={formData.pincode}
          onChange={handleInputChangePincode}
        />
      </div>
      <br />

      <a
        href="#"
        ClassName="your-location"
        style={{
          textDecoration: "none",
          color: "#5fddc7",
          display: "block",
          textAlign: "center",
        }}
        onClick={() => {
          map.panTo(center);
          map.setZoom(15);
          setFormData({ ...formData, address: center.lat + ", " + center.lng });
        }}
      >
        <img
          src={location}
          alt="location"
          style={{
            width: "20px",
            height: "20px",
            position: "relative",
            top: "5px",
            marginRight: "5px",
          }}
        />
        Your Location
      </a>
    </div>
  );
};

export default Address;
