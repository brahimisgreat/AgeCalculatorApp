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
  const [errorInput, setErrorInput] = useState<boolean>(false);
  const [errorInputMonth, setErrorInputMonth] = useState<boolean>(false);
  const [errorInputYear, setErrorInputYear] = useState<boolean>(false);

  return (
    <div className="agecalculator">
      <Rectangle1 errorInputYear={errorInputYear}   errorInputMonth={errorInputMonth} errorInput={errorInput}   setDay={setDay} day={day}   month={month} setMonth={setMonth} year={year} setYear={setYear} />
      <Rectangle3   setErrorInputYear={setErrorInputYear} setErrorInputMonth={setErrorInputMonth}   setErrorInput={setErrorInput}  day={day}  month={month}  year={year}  setYears={setYears} setMonths={setMonths} setDays={setDays} />
      <Rec5          days={days} months={months} years={years}  /> 
    </div>
  );
};
