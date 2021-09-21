import React, {useState, useContext} from 'react'
import { GlobalContext } from '../context/GlobalState';

// Add transaction component
export const AddTransaction = () => {
  // Set up the state, default to '' and 0
  const [text, setText] = useState('');
  const [amount, setAmount] = useState(0);

  // Set up the context
  const { addTransaction } = useContext(GlobalContext);

  // Submit function, sends the new transaction to the add transaction function in global state
  const onSubmit = e => {
    e.preventDefault();

    const newTransaction = {
      text,
      amount: +amount
    }

    addTransaction(newTransaction);
  }

  return (
    <>
      <h3>Add new transaction</h3>
      <form onSubmit={onSubmit}>
        <div className="form-control">
          <label htmlFor="text">Text</label>
          <input type="text" value={text} onChange={(e) => setText(e.target.value)} placeholder="Enter text..." />
        </div>
        <div className="form-control">
          <label htmlFor="amount">Amount <br /> (negative numbers = expense, positive numbers = income)</label>
          <input type="number" value={amount} onChange={(e) => setAmount(e.target.value)} placeholder="Enter amount..." />
        </div>
        <button className="btn">Add transaction</button>
      </form>
    </>
  )
}
