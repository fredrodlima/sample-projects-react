import React, { Component } from 'react';

export default class InputSalary extends Component {
  handleSalaryChange = (event) => {
    const newSalary = event.target.value;
    if (newSalary < 1045) return;
    else {
      this.props.onSalaryChange(newSalary);
    }
  };
  render() {
    const { salary } = this.props;
    return (
      <div className="row">
        <label>Salary</label>
        <input
          id="salary"
          placeholder="Please enter your month salary"
          type="number"
          min="1045"
          step=".01"
          value={salary}
          onChange={this.handleSalaryChange}
          className="validate"
        />
      </div>
    );
  }
}
