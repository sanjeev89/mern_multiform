import React, { useContext, useEffect } from 'react';
import { Transaction } from './Transaction';

import { GlobalContext } from '../context/GlobalState';

export const TransactionList = () => {
  const { transactions, getTransaction } = useContext(GlobalContext);

  useEffect(()=>{
    console.log("before tranactions ", transactions);
    getTransaction();
    console.log("after transactions ", transactions);
    //eslint-disable-next-line react-hooks/exhaustive-deps

  }, [])

  return (
    <>
      <h3>History</h3>
      <ul className="list">
        {transactions.map(transaction => (<Transaction key={transaction._id} transaction={transaction} />))}
      </ul>
    </>
  )
} 
