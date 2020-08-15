import React, { Component } from 'react';
import css from './salarybar.module.css';
export default class SalaryBar extends Component {
  render() {
    const { inss, irpf, netSalary } = this.props;
    return (
      <div className={css.salaryBar}>
        <div className={css.inssBar} style={{ width: `${inss}%` }}></div>
        <div className={css.irpfBar} style={{ width: `${irpf}%` }}></div>
        <div
          className={css.netSalaryBar}
          style={{ width: `${netSalary}%` }}
        ></div>
      </div>
    );
  }
}
