import React, {useState, useContext} from 'react';
import { GlobalContext } from '../context/GlobalState';

export const AddAccount = () => {
    const [name, setName] = useState('');

    const { addAccount } = useContext(GlobalContext);

    const onSubmit = e => {
        e.preventDefault();

        const newAccount = {
            name
        }

        addAccount(newAccount);
    }

    return (
        <>
            <h3>Add new account</h3>
            <form onSubmit={onSubmit}>
                <div className="form-control">
                    <label htmlFor="text">Name</label>
                    <input type="text" value={name} onChange={(e) => setName(e.target.value)} placeholder="Enter name..." />
                </div>
                <button className="btn">Add Account</button>
            </form>
        </>
    )
}