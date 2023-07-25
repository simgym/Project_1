import React from "react";
import "./Table.css";
const InfoTable = (props) => {
  return (
    <div>
      <table className="result">
        <thead>
          <tr>
            <th>Year</th>
            <th>Total Savings</th>
            <th>Interest (Year)</th>
            <th>Total Interest</th>
            <th>Invested Capital</th>
          </tr>
        </thead>
        <tbody>
          {props.data.map((item) => (
            <tr key={item.year}>
              <td>{item.year}</td>
              <td>${item.savingsEndOfYear.toFixed(2)}</td>
              <td>${item.yearlyInterest.toFixed(2)}</td>
              <td>${item.totalInterest.toFixed(2)}</td>
              <td>${item.investedCapital.toFixed(2)}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default InfoTable;
