import React from 'react';
import { AccountHeader } from './AccountHeader';
import { AddTransaction } from './AddTransaction';
import { Balance } from './Balance';
import { IncomeExpenses } from './IncomeExpenses';
import { TransactionList } from './TransactionList';

export const Account = ({ account }) => {

    return (
        <li>
            <div className="account-card">
            <AccountHeader className="account-header" account={account}/>
            <Balance account={account}/>
            <IncomeExpenses account={account}/>
            <TransactionList account={account}/>
            <AddTransaction account={account}/>
            </div>
        </li>
    )
}