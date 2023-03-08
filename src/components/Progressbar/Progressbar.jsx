import React from "react";
import "./style.css";

const Progressbar = (page) => {
  return (
    <>
      <div className="progress-bar">
        <div
          style={{
            width: page === 0 ? "33.3%" : page == 1 ? "66.6%" : "100%",
          }}
        ></div>
      </div>
    </>
  );
};

export default Progressbar;
