// Reducer for transaction actions
export default (state, action) => {
  switch(action.type) {
    case 'GET_ACCOUNTS':
      return {
        ...state,
        loading: false,
        accounts: action.payload
      }
    case 'GET_TRANSACTIONS':
      return {
        // Keep original state, loading to false, set the transactions
        ...state,
        loading: false,
        transactions: action.payload
      }
    case 'DELETE_ACCOUNT':
      return {
        ...state,
        accounts: state.accounts.filter(account => account._id !== action.payload),
        transactions: state.transactions.filter(transaction => transaction.accountID !== action.payload)
      }
    case 'DELETE_TRANSACTION':
      return {
        // Keep the original state, filter out the transaction to delete
        ...state,
        transactions: state.transactions.filter(transaction => transaction._id !== action.payload)
      }
    case 'ADD_ACCOUNT':
      return {
        ...state,
        accounts: [...state.accounts, action.payload]
      }
    case 'ADD_TRANSACTION':
      return {
        // Keep the original state, add the new transaction to the end of transactions array
        ...state,
        transactions: [...state.transactions, action.payload]
      }
    case 'ACCOUNT_ERROR':
      return {
        ...state,
        error: action.payload
      }
    case 'TRANSACTION_ERROR':
      return {
        // Keep original state, set the error
        ...state,
        error: action.payload
      }
    default:
      return state;
  }
}