import React, { useContext, useEffect } from 'react';
import { Transaction } from './Transaction';

import { GlobalContext } from '../context/globalState';

export const TransactionList = (props) => {
  const { transactions, getTransactions } = useContext(GlobalContext);

    useEffect(()=>{
      getTransactions();
    }, [])
    
  return (
    <>
      <h3>History</h3>
      <ul className="list">
        {transactions.map(transaction => (<Transaction key={transaction.id} transaction={transaction} />))}
      </ul>
    </>
  )
}