import React, { useContext } from 'react'
import { GlobalContext } from '../context/GlobalState'

export const AccountHeader = ({ account }) => {

    const { deleteAccount } = useContext(GlobalContext);

    return (
        <div>
            <h2>
                {account.name}
            </h2>
            <button onClick={() => deleteAccount(account._id)} className="delete-account-btn">x</button>
        </div>
    )
}