import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface CalculatorState {
  displayValue: string;
}

const initialState: CalculatorState = {
  displayValue: "0",
};

const calculatorSlice = createSlice({
  name: "calculator",
  initialState,
  reducers: {
    inputDigit: (state, action: PayloadAction<string>) => {
      state.displayValue =
        state.displayValue === "0"
          ? action.payload
          : state.displayValue + action.payload;
    },
    clear: (state) => {
      state.displayValue = "0";
    },
    performOperation: (state, action: PayloadAction<string>) => {
      try {
        state.displayValue = eval(state.displayValue);
      } catch {
        state.displayValue = "Error";
      }
    },
  },
});

export const { inputDigit, clear, performOperation } = calculatorSlice.actions;
export default calculatorSlice.reducer;
