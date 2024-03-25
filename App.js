import React, { useState } from 'react';
import Header from './Header';
import Balance from './Balance';
import TransactionList from './TransactionList';
import AddTransaction from './AddTransaction';
import './App.css';

function App() {
  const [transactions, setTransactions] = useState([]);

  const addTransaction = (text, amount) => {
    setTransactions([...transactions, { id: Math.random(), text, amount }]);
  };

  const deleteTransaction = (id) => {
    setTransactions(transactions.filter(transaction => transaction.id !== id));
  };

  return (
    <div className="container">
      <Header />
      <Balance transactions={transactions} />
      <TransactionList transactions={transactions} deleteTransaction={deleteTransaction} />
      <AddTransaction addTransaction={addTransaction} />
    </div>
  );
}

export default App;

