import React from "react";
import "./Buttons.css";

const Buttons = () => {
  return (
    <div>
      <p className="actions">
        <button type="reset" className="buttonAlt">
          Reset
        </button>
        <button type="submit" className="button">
          Calculate
        </button>
      </p>
    </div>
  );
};

export default Buttons;
