import React from 'react';
import Header from './Components/Header'
import Balance from './Components/Balance'
import IncomeExpenses from './Components/IncomeExpenses'
import {AddTransaction} from './Components/AddTransaction'
import TransactionList from './Components/TransactionList'

import './App.css'

const App = () => {
  return (
    <div>
      <Header />
      <div className="container">
        <Balance />
        <IncomeExpenses />
        <TransactionList />
        <AddTransaction />
      </div>
    </div>
  );
};

export default App;