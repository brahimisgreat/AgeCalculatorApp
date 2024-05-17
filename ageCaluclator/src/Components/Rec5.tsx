import "./Rec5.css";

export const Rec5 = ({years, months,days}) => {
  return (
    <div className="rec5">
      <div className="age">
        <span className="age-number">{years ? years : '--'}</span>
        <span className="age-letters">years</span>
      </div>
      <div className="age">
        <span className="age-number">{months ? months : '--'}</span>
        <span className="age-letters">months</span>
      </div>
      <div className="age">
        <span className="age-number">{days ? days : '--'}</span>
        <span className="age-letters" >days</span>
      </div>
    </div>
  );
};
