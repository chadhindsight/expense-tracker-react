import React from 'react';
import Header from './Components/Header'
import Balance from './Components/Balance'
import {IncomeExpenses} from './Components/IncomeExpenses'
import {AddTransaction} from './Components/AddTransaction'
import {TransactionList} from './Components/TransactionList'
import {GlobalProvider} from './context/globalState';
import './App.css'

const App = () => {
  return (
    <GlobalProvider>
      <Header />
      <div className="container">
        <Balance />
        <IncomeExpenses />
        <TransactionList />
        <AddTransaction />
      </div>
    </GlobalProvider>
  );
};

export default App;