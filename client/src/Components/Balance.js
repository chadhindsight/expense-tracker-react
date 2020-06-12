import React from 'react';
import {useContext} from 'react'
import { GlobalContext } from '../context/globalState';
import { numberWithCommas} from '../utils/format'

const Balance = () => {
    const { transactions } = useContext(GlobalContext);
    
    const amounts = transactions.map(transaction=> transaction.amount);
    const total = amounts.reduce((acc,item)=> (acc +=item), 0).toFixed(2);

    return (
        <div>
            <h4>Your Balance</h4>
            <h4>{numberWithCommas(total)}</h4>
        </div>
    );
};

export default Balance;