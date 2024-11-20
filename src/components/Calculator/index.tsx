import { useDispatch, useSelector } from "react-redux";
import { buttons } from "../../utils/constants";
import { RootState } from "../../state-managment/store/store";
import "./style.css";
import {
  clear,
  inputDigit,
  performOperation,
} from "../../state-managment/slices/calculatorSlice";

const Calculator = () => {
  const dispatch = useDispatch();
  const displayValue = useSelector(
    (state: RootState) => state.calculator.displayValue
  );

  const handleOperation = (value: string) => {
    if (value === "C") dispatch(clear());
    else if (["+", "-", "*", "/"].includes(value)) dispatch(inputDigit(value));
    else if (value === "=") dispatch(performOperation(value));
    else dispatch(inputDigit(value));
  };

  return (
    <div className="calculator">
      <div className="display">{displayValue}</div>
      <div className="buttons">
        {buttons.map((btn) => (
          <button key={btn} onClick={() => handleOperation(btn)}>
            {btn}
          </button>
        ))}
      </div>
    </div>
  );
};

export default Calculator;
