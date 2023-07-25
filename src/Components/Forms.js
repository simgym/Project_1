import React, { useState } from "react";
import Buttons from "./Buttons";
import "./Forms.css";

const SavingsForm = (props) => {
  const [currentSavings, setCurrentSavings] = useState(0);
  const [yearlySavings, setYearlySavings] = useState(0);
  const [currentInterest, setCurrentInterest] = useState(0);
  const [currentDuration, setCurrentDuration] = useState(0);

  const CurrentHandler = (event) => {
    setCurrentSavings(event.target.value);
  };
  const YearlyHandler = (event) => {
    setYearlySavings(event.target.value);
  };
  const InterestHandler = (event) => {
    setCurrentInterest(event.target.value);
  };
  const DurationHandler = (event) => {
    setCurrentDuration(event.target.value);
  };

  const submitHandler = (event) => {
    event.preventDefault();
    const values = [
      {
        CS: currentSavings,
        YS: yearlySavings,
        CI: currentInterest,
        CD: currentDuration,
      },
    ];
    props.onSavingsData(values);
  };

  return (
    <div>
      <form className="form" onSubmit={submitHandler}>
        <div className="input-group">
          <p>
            <label htmlFor="current-savings">Current Savings ($)</label>
            <input
              type="number"
              id="current-savings"
              onChange={CurrentHandler}
            />
          </p>
          <p>
            <label htmlFor="yearly-contribution">Yearly Savings ($)</label>
            <input
              type="number"
              id="yearly-contribution"
              onChange={YearlyHandler}
            />
          </p>
        </div>
        <div className="input-group">
          <p>
            <label htmlFor="expected-return">
              Expected Interest (%, per year)
            </label>
            <input
              type="number"
              id="expected-return"
              onChange={InterestHandler}
            />
          </p>
          <p>
            <label htmlFor="duration">Investment Duration (years)</label>
            <input type="number" id="duration" onChange={DurationHandler} />
          </p>
        </div>
        <Buttons />
      </form>
    </div>
  );
};

export default SavingsForm;
