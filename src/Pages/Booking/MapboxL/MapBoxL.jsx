import React, { useRef, useEffect, useState } from "react";
import {
  useJsApiLoader,
  GoogleMap,
  Marker,
  Autocomplete, // necessary for Autocomplete
  DirectionsRenderer, // necessary for DirectionsRenderer
} from "@react-google-maps/api";
const centre = {
  lat: 22.5726,
  lng: 88.3639,
};

const MapBoxL = () => {
  const { isLoaded } = useJsApiLoader({
    googleMapsApiKey: "AIzaSyC7zvg4GcCd0EUescJBnU79y1-sN3qdfVI",
    libraries: ["places"], // necessary for Autocomplete
  });
  const [map, setMap] = useState(/** @type google.maps.Map */ (null));
  const [directions, setDirections] = useState(null);
  const [distance, setDistance] = useState("");
  const [duration, setDuration] = useState("");
  const originRef = useRef();
  const destinationRef = useRef();
  if (!isLoaded) {
    return <div>Loading...</div>;
  }
  const calculateRoute = async () => {
    if (originRef.current.value === "" || destinationRef.current.value === "") {
    }
    // eslint-disable-next-line no-undef
    const directionsService = new google.maps.DirectionsService();
    const results = await directionsService.route({
      origin: originRef.current.value,
      destination: destinationRef.current.value,
      // eslint-disable-next-line no-undef
      travelMode: google.maps.TravelMode.DRIVING,
    });
    setDirections(results);
    setDistance(results.routes[0].legs[0].distance.text);
    setDuration(results.routes[0].legs[0].duration.text);
  };
  return (
    <>
      <div className="map">
        <Autocomplete>
          <input type="text" placeholder="your location" ref={originRef} />
        </Autocomplete>
        <Autocomplete>
          <input type="text" placeholder="to hospital" ref={destinationRef} />
        </Autocomplete>
        <button className="calculate-route" onClick={calculateRoute}>
          Calculate Route
        </button>
        <GoogleMap
          mapContainerStyle={{
            height: "400px",
            width: "500px",
          }}
          zoom={10}
          center={centre}
          options={{
            // zoomControl: false,
            streetViewControl: false,
            mapTypeControl: false,
            fullscreenControl: false,
          }}
        >
          <Marker position={centre} />
          {directions && <DirectionsRenderer directions={directions} />}
        </GoogleMap>
      </div>
    </>
  );
};

export default MapBoxL;
