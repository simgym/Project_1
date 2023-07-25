import React, { useState } from "react";
import SavingsForm from "./Components/Forms";
import InfoTable from "./Components/Table";
import ImgHeader from "./Components/Header";
function App() {
  const [yearlyData, setYearlyData] = useState([]);
  const calculateHandler = (userInput) => {
    let currentSavings = +userInput[0].CS;
    const yearlyContribution = +userInput[0].YS;
    const expectedReturn = +userInput[0].CI / 100;
    const duration = +userInput[0].CD;
    let totalInterest = 0;

    const newData = [];

    for (let i = 0; i < duration; i++) {
      const yearlyInterest = currentSavings * expectedReturn;
      currentSavings += yearlyInterest + yearlyContribution;
      totalInterest += yearlyInterest;
      const investedCapital = currentSavings + yearlyContribution * i;
      newData.push({
        year: i + 1,
        yearlyInterest: yearlyInterest,
        savingsEndOfYear: currentSavings,
        yearlyContribution: yearlyContribution,
        totalInterest: totalInterest,
        investedCapital: investedCapital,
      });
    }
    setYearlyData(newData);
  };

  return (
    <div>
      <ImgHeader />
      <SavingsForm onSavingsData={calculateHandler} />

      {/* Todo: Show below table conditionally (only once result data is available) */}
      {/* Show fallback text if no data is available */}
      {yearlyData.length > 0 ? (
        <InfoTable data={yearlyData} />
      ) : (
        <p
          style={{
            textAlign: "center",
            fontSize: "24px",
          }}
        >
          {" "}
          No data available
        </p>
      )}
    </div>
  );
}

export default App;
