import React from 'react';
import css from './installment.module.css';
import { formatCurrency, formatPercentage } from '../../helpers/formatNumber';

export default function Installment({ installment }) {
  const {
    installmentId,
    totalValue,
    accumulatedInterest,
    totalInterestRate,
  } = installment;
  return (
    <div className={css.installmentContainer}>
      <span className={css.installmentNumber}>{installmentId}</span>
      <div>
        <p
          className={
            accumulatedInterest >= 0 ? css.positiveNumber : css.negativeNumber
          }
        >
          {formatCurrency(totalValue)}
        </p>
        <p
          className={
            accumulatedInterest >= 0 ? css.positiveNumber : css.negativeNumber
          }
        >
          {accumulatedInterest >= 0 ? '+' : ' '}
          {formatCurrency(accumulatedInterest)}
        </p>
        <span
          className={
            totalInterestRate >= 0 ? css.positiveInterest : css.negativeInterest
          }
        >
          {formatPercentage(totalInterestRate / 100)}
        </span>
      </div>
    </div>
  );
}
