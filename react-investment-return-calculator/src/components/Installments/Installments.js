import React from 'react';
import Installment from './Installment';
import css from './installments.module.css';

export default function Installments({ installments }) {
  return (
    <div className={css.flexRow}>
      {installments.map((installment) => {
        return (
          <div key={installment.installmentId}>
            <Installment installment={installment} />
          </div>
        );
      })}
    </div>
  );
}
