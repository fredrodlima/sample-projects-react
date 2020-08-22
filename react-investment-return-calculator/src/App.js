import React, { useState, useEffect } from 'react';
import Form from './components/Form/Form';
import Installments from './components/Installments/Installments';

export default function App() {
  const [initialCapital, setInitialCapital] = useState(100);
  const [interestRate, setInterestRate] = useState(1);
  const [investmentPeriod, setInvestmentPeriod] = useState(1);
  const [installments, setInstallments] = useState([]);

  const handleCapitalChange = (capital) => {
    setInitialCapital(capital);
  };

  const handleInterestRateChange = (rate) => {
    setInterestRate(rate);
  };

  const handleInvestmentPeriodChange = (period) => {
    setInvestmentPeriod(period);
  };

  useEffect(() => {
    let newInstallments = [];
    let actualValue = parseFloat(initialCapital);
    let actualInterest = parseFloat(interestRate / 100);
    let accumulatedInterest = 0;
    for (let i = 0; i < investmentPeriod; i++) {
      let totalInterestRate = (1 + actualInterest) ** (i + 1) - 1;
      let appliedInterest = actualValue * actualInterest;
      accumulatedInterest += appliedInterest;
      actualValue = actualValue + appliedInterest;
      newInstallments.push({
        installmentId: i + 1,
        totalInterestRate: totalInterestRate * 100,
        totalValue: actualValue,
        accumulatedInterest,
      });
    }
    setInstallments(newInstallments);
  }, [initialCapital, interestRate, investmentPeriod]);

  return (
    <div className="container">
      <Form
        initialCapital={initialCapital}
        interestRate={interestRate}
        investmentPeriod={investmentPeriod}
        onCapitalChange={handleCapitalChange}
        onInterestRateChange={handleInterestRateChange}
        onInvestmentPeriodChange={handleInvestmentPeriodChange}
      />
      <Installments installments={installments} />
    </div>
  );
}
