import React from "react";
import "./Rectangle1.css";

const Rectangle1 = () => {
  return (
    <form action="">
      <div className="box">
        <label>DAY</label>
        <div className="input-container">
          <input type="number" placeholder="00" />
        </div>
      </div>
      <div className="box">
        <label>MONTH</label>
        <div className="input-container">
          <input type="number" placeholder="00" />
        </div>
      </div>
      <div className="box">
        <label>YEAR</label>
        <div className="input-container">
          <input type="number" placeholder="00" />
        </div>
      </div>
      
    </form>
  );
};

export default Rectangle1;
