import React, {useContext} from 'react';
import {GlobalContext} from '../context/GlobalState.js';
import {Transaction} from './transaction.js';


function TransactionList () {

    const {transactions} = useContext(GlobalContext);
    console.log(transactions)

    return (
        <>
        <h3>History</h3>
        <ul  className = "list">
            {transactions.map(transaction => ( <Transaction key = {transaction.id} transaction = {transaction}></Transaction>))}
           

        </ul>
            
        </>
    )
}

export default TransactionList