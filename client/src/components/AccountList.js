import React, { useContext, useEffect } from 'react';
import { Account } from './Account';
import { GlobalContext } from '../context/GlobalState';

export const AccountList = () => {
    const { accounts, getAccounts } = useContext(GlobalContext);

    useEffect(() => {
        getAccounts();
    }, []);

    return (
        <>
            <ul className="list accounts-list">
                {accounts.map(account => (<Account key={account._id} account={account} />))}
            </ul>
        </>
    )
}