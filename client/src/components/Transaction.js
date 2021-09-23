import React, {useContext} from 'react';
import { GlobalContext } from '../context/GlobalState';
import { numberWithCommas } from '../utils/format';

// The Transaction component
export const Transaction = ({ transaction }) => {
  // Sets up the context
  const { deleteTransaction } = useContext(GlobalContext);

  // Determines which sign to append in front of the number
  const sign = transaction.amount < 0 ? '-' : '+';

  return (
    <li className={transaction.amount < 0 ? 'minus' : 'plus'}>
      {transaction.text} 
      <span>{sign}${numberWithCommas(Math.abs(transaction.amount))}</span>
      <button onClick={() => deleteTransaction(transaction._id)} className="delete-btn">x</button>
    </li>
  )
}
