import React from "react";
import Rectangle1 from "./Rectangle1";
import "./AgeCalculator.css";
import { Rectangle3 } from "./Rectangle3";
import { Rec5 } from "./Rec5";

export const AgeCalculator = () => {
  return (
    <div className="agecalculator">
      <Rectangle1 />
      <Rectangle3 />
      <Rec5 />
    </div>
  );
};
