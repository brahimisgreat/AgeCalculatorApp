import React from "react";
import Rectangle1 from "./Rectangle1";
import "./AgeCalculator.css";
import { Rectangle3 } from "./Rectangle3";
import { Rec5 } from "./Rec5";
import { useState } from "react";

export const AgeCalculator = () => {

  const [day, setDay] = useState<number>(0);
  const [month, setMonth] = useState<number>(0);
  const [year, setYear] = useState<number>(0);
  const [years, setYears] = useState<number>(0);
  const [months, setMonths] = useState<number>(0);
  const [days, setDays] = useState<number>(0);  

  return (
    <div className="agecalculator">
      <Rectangle1 setDay={setDay} day={day}  month={month} setMonth={setMonth} year={year} setYear={setYear} />
      <Rectangle3  setDay={setDay} day={day}  month={month} setMonth={setMonth} year={year} setYear={setYear} setYears={setYears} setMonths={setMonths} setDays={setDays} />
      <Rec5  setDay={setDay} day={day}  month={month} setMonth={setMonth} year={year} setYear={setYear}  days={days} months={months} years={years}/>
    </div>
  );
};
