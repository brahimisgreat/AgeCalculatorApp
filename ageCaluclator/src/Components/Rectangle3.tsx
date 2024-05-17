import React from "react";
import arrow from "../assets/icon-arrow.svg";
import "./Rectangle3.css";

export const Rectangle3 = ({day, month, year, setYears,setMonths, setDays}) => {

  //gets the age of the user
  function getAge() {
    const dob = new Date(`${year} ${month} ${day}`);
    const today = new Date();
    let age = today.getFullYear() - dob.getFullYear();
    const m = today.getMonth() - dob.getMonth();
    const d = today.getDate() - dob.getDate();
    if (day === 0 || month === 0 || year === 0 || day > 31 || month > 12 || year > today.getFullYear() || year < 1920) {
      alert("Please enter a valid date");
      return;
    }else if (m < 0 || (m === 0 && today.getDate() < dob.getDate())) {
      age--;
    }
    setDays(d)
    setMonths(m)
    setYears(age);
   
    return age;
  }
  

  return (
    <div className="rectangle3">
      <div className="line"></div>
      <div className="arrow">
        <button type="submit" onClick={getAge} >
          <img className="arrow-image" src={arrow} />
        </button>
      </div>
      <div className="line"></div>
    </div>
  );
};
