import "./Rectangle1.css";
import { useState } from "react";

const Rectangle1 = ({day,setDay, month,setMonth, year,setYear}) => {





  return (
    <form  >
      <div className="box">
        <label>DAY</label>
        <div className="input-container">
          <input type="number" placeholder="00" min='1'  max='31' value={day} onChange={(e) =>{setDay(Number(e.target.value))}} />
        </div>
      </div>
      <div className="box">
        <label>MONTH</label>
        <div className="input-container">
          <input type="number" placeholder="00"   min='1' max='12' value={month} onChange={(e) =>{setMonth(Number(e.target.value))}} />
        </div>
      </div>
      <div className="box">
        <label>YEAR</label>
        <div className="input-container">
          <input type="number" placeholder="1994" min='1920' max='2024'  value={year} onChange={(e) =>{setYear(Number(e.target.value))}}/>
        </div>
      </div>
      
    </form>
  );
};

export default Rectangle1;
