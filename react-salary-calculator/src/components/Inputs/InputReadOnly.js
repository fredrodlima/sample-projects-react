import React, { Component } from 'react';

export default class InputReadOnly extends Component {
  render() {
    const { label, value, percentage, color } = this.props;
    return (
      <div>
        <label>{label}</label>
        <input
          disabled
          key={`lb_${label.trim().toLowerCase()}`}
          type="text"
          value={`${value} ${percentage ? `(${percentage})` : ''}`}
          style={{ color: `${color}` }}
        />
      </div>
    );
  }
}
