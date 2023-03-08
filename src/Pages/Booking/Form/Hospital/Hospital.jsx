import React from "react";
import {
  Autocomplete, // necessary for Autocomplete
} from "@react-google-maps/api";
import "./style.css";

const Hospital = ({ formData, setFormData, forwardedRef }) => {
  const handleInputChangeHospital = (e) => {
    setFormData({ ...formData, search: e.target.value });
    console.log(e.target.value);
  };

  const hospitals = [
    {
      name: "Ruby Hospital, Kolkata",
      dis: 2.5,
      rating: 4.5,
      time: 10,
    },
    {
      name: "Fortis Hospital, Anandapur",
      location: { lat: 12.9716, lng: 77.5946 },
      dis: 10.0,
      rating: 4.5,
      time: 10,
    },
    {
      name: "Pearless Hospital, New Garia",
      location: { lat: 12.9716, lng: 77.5946 },
      dis: 5.9,
      rating: 4.5,
      time: 10,
    },
    {
      name: "RG Kar, Belgachia",
      location: { lat: 12.9716, lng: 77.5946 },
      dis: 4.8,
      rating: 4.0,
      time: 10,
    },
  ];
  return (
    <>
      <div className="search-bar">
        {" "}
        <Autocomplete>
          <input
            type="text"
            placeholder="Search.."
            value={formData.search}
            onChange={handleInputChangeHospital}
            ref={forwardedRef[1]}
          />
        </Autocomplete>
      </div>

      <div className="hospital-list">
        <h2 className="near-hosp">Nearby Hospitals</h2>
        <div className="line">
          <hr />
        </div>
        <div className="scroll">
          {hospitals.map((hospital) => (
            <label>
              <input
                type="radio"
                name="hospital"
                className="card-input-element"
                onChange={() =>
                  setFormData({
                    ...formData,
                    search: hospital.name,
                  })
                }
              />
              <div className="hospital-1 card-input ">
                <div className="name-dist">
                  <div className="hospital-name">{hospital.name}</div>
                  <div className="hospital-distance">{hospital.dis}km</div>
                </div>
                <div className="ret">
                  <div className="rating">{hospital.rating}/5</div>
                  <div className="emergency">ER available</div>
                  <div className="time">{hospital.time}mins</div>
                </div>
              </div>
            </label>
          ))}
        </div>
      </div>
    </>
  );
};

export default Hospital;
