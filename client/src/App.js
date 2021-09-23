import React from 'react';
import { Header } from './components/Header';

import { GlobalProvider } from './context/GlobalState';

import './App.css';
import { AccountList } from './components/AccountList';
import { AddAccount } from './components/AddAccount';

function App() {
  return (
    <GlobalProvider>
      <Header />
      <div className="container">
        <AccountList />
        <AddAccount />
      </div>
    </GlobalProvider>
  );
}

export default App;
