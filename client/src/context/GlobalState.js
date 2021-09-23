import React, { createContext, useReducer } from 'react';
import AppReducer from './AppReducer';
import axios from 'axios';

// Initial state
const initialState = {
  accounts: [],
  transactions: [],
  error: null,
  loading: true
}

// Create context
export const GlobalContext = createContext(initialState);

// Provider component
export const GlobalProvider = ({ children }) => {
  const [state, dispatch] = useReducer(AppReducer, initialState);

  async function getAccounts() {
    try{
      const res = await axios.get('api/v1/accounts');

      dispatch({
        type: 'GET_ACCOUNTS',
        payload: res.data.data
      });
    }
    catch (error) {
      dispatch({
        type: 'ACCOUNT_ERROR',
        payload: error.response.data.error
      });
    }
  }

  async function getTransactions() {
    try {
      // Get request
      const res = await axios.get('/api/v1/transactions');

      // Dispatch the request to reducer
      dispatch({
        type: 'GET_TRANSACTIONS',
        payload: res.data.data
      });
    } catch (error) {
      dispatch({
        type: 'TRANSACTION_ERROR',
        payload: error.response.data.error
      });
    }
  }

  async function deleteAccount(id) {
    try {
      await axios.delete(`/api/v1/accounts/${id}`);

      dispatch({
        type: 'DELETE_ACCOUNT',
        payload: id
      });
    }
    catch (error) {
      dispatch({
        type: 'ACCOUNT_ERROR',
        payload: error.response.data.error
      });
    }
  }

  async function deleteTransaction(id) {
    try {
      // Delete request
      await axios.delete(`/api/v1/transactions/${id}`);

      // Dispatch the request to reducer
      dispatch({
        type: 'DELETE_TRANSACTION',
        payload: id
      });
    } catch (error) {
      dispatch({
        type: 'TRANSACTION_ERROR',
        payload: error.response.data.error
      });
    }
  }

  async function addAccount(account) {
    const config = {
      headers: {
        'Content-Type': 'application/json'
      }
    }

    try {
      const res = await axios.post('/api/v1/accounts', account, config);

      dispatch({
        type: 'ADD_ACCOUNT',
        payload: res.data.data
      });
    }
    catch (error) {
      dispatch({
        type: 'ACCOUNT_ERROR',
        payload: error.response.data.error
      });
    }
  }

  async function addTransaction(transaction) {
    const config = {
      headers: {
        'Content-Type': 'application/json'
      }
    }

    try {
      // Post request
      const res = await axios.post('/api/v1/transactions', transaction, config);

      // Dispatch to reducer
      dispatch({
        type: 'ADD_TRANSACTION',
        payload: res.data.data
      });
    } catch (error) {
      dispatch({
        type: 'TRANSACTION_ERROR',
        payload: error.response.data.error
      });
    }
  }

  return (<GlobalContext.Provider value={{
    accounts: state.accounts,
    transactions: state.transactions,
    error: state.error,
    loading: state.loading,
    getAccounts,
    getTransactions,
    deleteAccount,
    deleteTransaction,
    addAccount,
    addTransaction
  }}>
    {children}
  </GlobalContext.Provider>);
}