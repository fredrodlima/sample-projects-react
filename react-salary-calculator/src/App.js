import React, { Component } from 'react';
import InputSalary from './components/Inputs/InputSalary';
import InputReadOnly from './components/Inputs/InputReadOnly';
import { calculateSalaryFrom } from './helpers/salary';
import { formatCurrency, formatPercentage } from './helpers/formatNumber';
import SalaryBar from './components/SalaryBar/SalaryBar';

export default class App extends Component {
  constructor() {
    super();
    this.state = {
      salary: '1045', //minimun salary value for Brazilian citizens
    };
  }
  handleSalaryChange = (newSalary) => {
    this.setState({
      salary: newSalary,
    });
  };
  render() {
    const { salary } = this.state;
    const {
      baseINSS,
      discountINSS,
      baseIRPF,
      discountIRPF,
      netSalary,
    } = calculateSalaryFrom(salary);
    const inssPercentage = discountINSS / salary;
    const irpfPercentage = discountIRPF / salary;
    const netSalaryPercentage = netSalary / salary;
    return (
      <>
        <h1>React Sallary Calculator</h1>
        <InputSalary salary={salary} onSalaryChange={this.handleSalaryChange} />
        <InputReadOnly label="INSS Basis" value={formatCurrency(baseINSS)} />
        <InputReadOnly
          label="INSS Discount"
          value={formatCurrency(discountINSS)}
          percentage={formatPercentage(inssPercentage)}
          color="#e67e22"
        />
        <InputReadOnly label="Base IRPF" value={formatCurrency(baseIRPF)} />
        <InputReadOnly
          label="IRPF Discount"
          value={formatCurrency(discountIRPF)}
          percentage={formatPercentage(irpfPercentage)}
          color="#c0392b"
        />
        <InputReadOnly
          label="Net Salary"
          value={formatCurrency(netSalary)}
          percentage={formatPercentage(netSalaryPercentage)}
          color="#16a085"
        />
        <SalaryBar
          inss={inssPercentage * 100}
          irpf={irpfPercentage * 100}
          netSalary={netSalaryPercentage * 100}
        />
      </>
    );
  }
}
