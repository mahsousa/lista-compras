import React, { useState, useEffect} from 'react';
import GlobalStyle from './styles/global';
import Header from './components/Header';
import Dashboard from './components/Dashboard';
import Form from './components/Form';

const App = () => {
  const data = localStorage.getItem("transactions");
  const [transactionsList, setTransactionsList] = useState(
    data ? JSON.parse(data) : []
  );

  const [income, setIncome] = useState(0);
  const [expense, setExpense] = useState(0);
  const [total, setTotal] = useState (0);

  useEffect(() =>{
    const amountExpense = transactionsList
      .filter((item) => item.expense)
      .map((transaction) => Number(transaction.amount));

  }, [transactionsList]);


  return (
    <>
      <GlobalStyle />
      <Header />
      <Dashboard />
      <Form />
    </>
  )
}

export default App;
