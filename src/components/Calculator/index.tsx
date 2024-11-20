import { buttons } from "../../utils/constants";
import "./style.css";

const Calculator = () => {
  return (
    <div className="calculator">
      <div className="display"></div>
      <div className="buttons">
        {buttons.map((btn) => (
          <button key={btn}>{btn}</button>
        ))}
      </div>
    </div>
  );
};

export default Calculator;
