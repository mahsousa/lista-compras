import React, { useEffect, useState } from "react";
import GlobalStyle from "./styles/global";
import Header from "./components/Header";
import Resume from "./components/Dashboard";
import Form from "./components/Form";
import "./App.css";

const App = () => {
  const data = localStorage.getItem("transactions");
  const [transactionsList, setTransactionsList] = useState(
    data ? JSON.parse(data) : []
  );
  const [entrada, setEntrada] = useState(0);
  const [saida, setSaida] = useState(0);
  const [total, setTotal] = useState(0);

  useEffect(() => {
    const quantiaSaida = transactionsList
      .filter((item) => item.saida)
      .map((transaction) => Number(transaction.quantia));

    const quantiaEntrada = transactionsList
      .filter((item) => !item.saida)
      .map((transaction) => Number(transaction.quantia));

    const saida = quantiaSaida.reduce((acc, cur) => acc + cur, 0).toFixed(2);
    const entrada = quantiaEntrada.reduce((acc, cur) => acc + cur, 0).toFixed(2);

    const total = Math.abs(entrada - saida).toFixed(2);

    setEntrada(`R$ ${entrada}`);
    setSaida(`R$ ${saida}`);
    setTotal(`${Number(entrada) < Number(saida) ? "-" : ""}R$ ${total}`);
  }, [transactionsList]);

  const handleAdd = (transaction) => {
    const newArrayTransactions = [...transactionsList, transaction];

    setTransactionsList(newArrayTransactions);

    localStorage.setItem("transactions", JSON.stringify(newArrayTransactions));
  };

  return (
    <>
      <Header />
      <Resume className="resume" entrada={entrada} saida={saida} total={total} />
      <Form
        handleAdd={handleAdd}
        transactionsList={transactionsList}
        setTransactionsList={setTransactionsList}
      />
      <GlobalStyle />
    </>
  );
};

export default App;
