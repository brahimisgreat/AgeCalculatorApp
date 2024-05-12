import "./Rec5.css";

export const Rec5 = () => {
  return (
    <div className="rec5">
      <div className="age">
        <span className="age-number">{}</span>
        <span className="age-letters">years</span>
      </div>
      <div className="age">
        <span className="age-number">{}</span>
        <span className="age-letters">months</span>
      </div>
      <div className="age">
        <span className="age-number">{}</span>
        <span className="age-letters" >days</span>
      </div>
    </div>
  );
};
