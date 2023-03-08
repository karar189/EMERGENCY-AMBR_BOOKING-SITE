import React from "react";

function Payment() {
  return (
    <div className="drawer-content">
      <div className="input">
        <label>Card Number</label>
        <input type="text" placeholder="Enter Card Number" />
        <label>
          <input type="number" />
        </label>
        <select name="" id="">
          <option value="">Select Card</option>
          <option value="">Visa</option>
          <option value="">Master Card</option>
          <option value="">Rupay</option>
        </select>
      </div>
    </div>
  );
}

export default Payment;
