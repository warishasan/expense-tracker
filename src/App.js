import React from 'react';
import Header from './components/header.js'
import './App.css';
import Balance from './components/balance.js'
import IncomeExpenses from './components/incomeExpenses.js'
import TransactionList from './components/transactionList.js'
import AddTransaction from './components/addTransaction.js'
import {GlobalProvider} from './context/GlobalState.js'

function App() {
  return (
    <GlobalProvider >
     <Header></Header>
    <div className = "container">

      <Balance></Balance>
      <IncomeExpenses></IncomeExpenses>
      <TransactionList></TransactionList>
      <AddTransaction></AddTransaction>
    </div>
    </GlobalProvider>
  );
}

export default App;
