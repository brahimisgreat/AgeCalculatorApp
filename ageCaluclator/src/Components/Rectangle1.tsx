import "./Rectangle1.css";
type Rectangle1Props = {
  day: number;
  setDay: React.Dispatch<React.SetStateAction<number>>;
  month: number;
  setMonth: React.Dispatch<React.SetStateAction<number>>;
  year: number;
  setYear: React.Dispatch<React.SetStateAction<number>>;
};


const Rectangle1:React.FC<Rectangle1Props> = ({ day, setDay, month, setMonth, year, setYear }) => {
  return (
    <form>
      <div className="box">
        <label>DAY</label>
        <div className="input-containerr">
          <input
            type="number"
            placeholder="DD"
            maxLength={2}
            min="1"
            max="31"
            value={day}
            onChange={(e) => {
              setDay(Number(e.target.value));
            }}
          />
        </div>
      </div>
      <div className="box">
        <label>MONTH</label>
        <div className="input-containerr">
          <input
            type="number"
            placeholder="MM"
            min="1"
            max="12"
            value={month}
            onChange={(e) => {
              setMonth(Number(e.target.value));
            }}
          />
        </div>
      </div>
      <div className="box">
        <label>YEAR</label>
        <div className="input-containerr">
          <input
            type="number"
            placeholder="YYYY"
            min="1920"
            max="2024"
            value={year}
            onChange={(e) => {
              setYear(Number(e.target.value));
            }}
          />
        </div>
      </div>
    </form>
  );
};

export default Rectangle1;
