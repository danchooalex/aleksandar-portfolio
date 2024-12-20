import React from "react";
import { useReducer } from "react";
import styles from "../counterComponents/DateCounter.module.css";

import ResetButton from "./ResetButton";

const initialState = { count: 0, step: 1 };

function reducer(state, action) {
  // console.log(state, action);

  switch (action.type) {
    case "inc":
      return { ...state, count: state.count + state.step };
    case "dec":
      return { ...state, count: state.count - state.step };
    case "setCount":
      return { ...state, count: action.payload };
    case "setStep":
      return { ...state, step: action.payload };
    case "reset":
      return initialState;

    default:
      throw new Error("Unknown action in the reducer");
  }
}

function DateCounter() {
  const [state, dispatch] = useReducer(reducer, initialState);
  const { count, step } = state;

  // This mutates the date object.
  const date = new Date();
  date.setDate(date.getDate() + count);

  const dec = function () {
    dispatch({ type: "dec", payload: -1 });
  };

  const inc = function () {
    dispatch({ type: "inc", payload: 1 });
  };

  const defineCount = function (e) {
    dispatch({ type: "setCount", payload: Number(e.target.value) });
  };

  const defineStep = function (e) {
    dispatch({ type: "setStep", payload: Number(e.target.value) });
  };

  const reset = function () {
    dispatch({ type: "reset" });
  };

  return (
    <div className={styles.counter}>
      <div>
        <input
          class="accent"
          type="range"
          min="0"
          max="10"
          value={step}
          onChange={defineStep}
        />
        <span>{step}</span>
      </div>

      <div className={styles.center}>
        <button className={styles.btn} onClick={dec}>
          -
        </button>
        <input value={count} onChange={defineCount} />
        <button className={styles.btn} onClick={inc}>
          +
        </button>
      </div>

      <p>{date.toDateString()}</p>

      <div>
        <ResetButton onClick={reset} />
      </div>
    </div>
  );
}
export default DateCounter;
