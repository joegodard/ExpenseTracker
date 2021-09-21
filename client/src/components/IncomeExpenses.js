import React, { useContext } from 'react';
import { GlobalContext } from '../context/GlobalState';
import { numberWithCommas } from '../utils/format';

// Income and expenses component
export const IncomeExpenses = () => {
  // Sets up the context
  const { transactions } = useContext(GlobalContext);

  // Grabs all the amounts from transactions
  const amounts = transactions.map(transaction => transaction.amount);

  // Adds only positive amounts for the income section
  const income = amounts
    .filter(item => item > 0)
    .reduce((acc, item) => (acc += item), 0)
    .toFixed(2);

  // Adds only negative amounts for the expenses section
  const expense = (
    amounts.filter(item => item < 0).reduce((acc, item) => (acc += item), 0) *
    -1
  ).toFixed(2);

  return (
    <div className="inc-exp-container">
        <div>
          <h4>Income</h4>
  <p className="money plus">${numberWithCommas(income)}</p>
        </div>
        <div>
          <h4>Expense</h4>
  <p className="money minus">${numberWithCommas(expense)}</p>
        </div>
      </div>
  )
}
