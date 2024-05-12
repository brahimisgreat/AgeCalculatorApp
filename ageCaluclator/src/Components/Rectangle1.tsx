import "./Rectangle1.css";
import { useState } from "react";

const Rectangle1 = () => {

const [day, setDay] = useState<number>(0);
const [month, setMonth] = useState<number>(0);
const [year, setYear] = useState<number>(0);

function calculateAge(day:number, month:number, year:number , e:any){
  e.preventDefault();
  const today = new Date();
  const birthDate = new Date(year, month, day);
  let age = today.getFullYear() - birthDate.getFullYear();
  let m = today.getMonth() - birthDate.getMonth();
  if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
    age--;
  }
  console.log(age);
  return age;
}

  return (
    <form onSubmit={calculateAge}>
      <div className="box">
        <label>DAY</label>
        <div className="input-container">
          <input type="number" placeholder="00" value={day} onChange={(e) =>{setDay(Number(e.target.value))}} />
        </div>
      </div>
      <div className="box">
        <label>MONTH</label>
        <div className="input-container">
          <input type="number" placeholder="00"  value={month} onChange={(e) =>{setMonth(Number(e.target.value))}} />
        </div>
      </div>
      <div className="box">
        <label>YEAR</label>
        <div className="input-container">
          <input type="number" placeholder="1994"   value={year} onChange={(e) =>{setYear(Number(e.target.value))}}/>
        </div>
      </div>
      
    </form>
  );
};

export default Rectangle1;
