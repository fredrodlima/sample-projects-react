import React from 'react';

export default function Form({
  initialCapital,
  onCapitalChange,
  interestRate,
  onInterestRateChange,
  investmentPeriod,
  onInvestmentPeriodChange,
}) {
  const handleCapitalChange = (event) => {
    onCapitalChange(event.target.value);
  };
  const handleInterestRateChange = (event) => {
    onInterestRateChange(event.target.value);
  };
  const handleInvestmentPeriodChange = (event) => {
    onInvestmentPeriodChange(event.target.value);
  };
  return (
    <div>
      <h1>React - Investment Calculator</h1>
      <div className="row">
        <form className="col s12">
          <div className="row">
            <div className="input-field col s4">
              <input
                id="initial_capital"
                type="number"
                value={initialCapital}
                step="100"
                min="0"
                onChange={handleCapitalChange}
              ></input>
              <label htmlFor="initial_capital" className="active">
                Initial Capital
              </label>
            </div>
            <div className="input-field col s4">
              <input
                id="interest_rate"
                type="number"
                value={interestRate}
                step="0.1"
                min="-12"
                max="12"
                onChange={handleInterestRateChange}
              ></input>
              <label htmlFor="interest_rate" className="active">
                Interest Rate
              </label>
            </div>
            <div className="input-field col s4">
              <input
                id="investment_period"
                type="number"
                value={investmentPeriod}
                step="1"
                min="1"
                max="36"
                className="active"
                onChange={handleInvestmentPeriodChange}
              ></input>
              <label htmlFor="investment_period" className="active">
                Investment Period
              </label>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}
