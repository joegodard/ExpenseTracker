import React, { useContext, useEffect } from 'react';
import { Transaction } from './Transaction';
import { GlobalContext } from '../context/GlobalState';

// Transaction List Component
export const TransactionList = () => {
  const { transactions, getTransactions } = useContext(GlobalContext);

  // Grabs all the transactions from global state
  useEffect(() => {
    getTransactions();
  }, []);

  return (
    <>
      <h3>History</h3>
      <ul className="list">
        {transactions.map(transaction => (<Transaction key={transaction._id} transaction={transaction} />))}
      </ul>
    </>
  )
}
