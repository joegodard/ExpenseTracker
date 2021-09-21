import React, { useContext } from 'react';
import { GlobalContext } from '../context/GlobalState';
import { numberWithCommas } from '../utils/format';

// Balance component
export const Balance = () => {
  // Sets up the context
  const { transactions } = useContext(GlobalContext);

  // Grabs all the amounts from transactions
  const amounts = transactions.map(transaction => transaction.amount);

  // Calculates the total
  const total = amounts.reduce((acc, item) => (acc += item), 0).toFixed(2);

  return (
    <>
      <h4>Your Balance</h4>
    <h1>${numberWithCommas(total)}</h1>
    </>
  )
}
