import React, { useState } from "react";
import List from "../List";
import * as C from "./style";


const Form = ({ handleAdd, transactionsList, setTransactionsList }) => {
  const [descricao, setDescricao] = useState("");
  const [quantia, setQuantia] = useState("");
  const [isDespesa, setDespesa] = useState(false);

  const generateID = () => Math.round(Math.random() * 1000);

  const handleSave = () => {
    if (!descricao || !quantia) {
      alert("Informe a descricaorição e o valor!");
      return;
    } else if (quantia < 1) {
      alert("O valor tem que ser positivo!");
      return;
    }

    const transaction = {
      id: generateID(),
      descricao: descricao,
      quantia: quantia,
      saida: isDespesa,
    };

    handleAdd(transaction);

    setDescricao("");
    setQuantia("");
  };

  return (
    <>
      <C.Container>
        <C.InputContent>
          <C.Label>Descriçao</C.Label>
          <C.Input value={descricao} onChange={(e) => setDescricao(e.target.value)} />
        </C.InputContent>
        <C.InputContent>
          <C.Label>Valor</C.Label>
          <C.InputValor
            value={quantia}
            type="number"
            onChange={(e) => setQuantia(e.target.value)}
          />
        </C.InputContent>
        <C.RadioGroup>
          <C.Input
            type="radio"
            id="rIncome"
            defaultChecked
            name="group1"
            onChange={() => setDespesa(!isDespesa)}
          />
          <C.Label htmlFor="rIncome">Entrada</C.Label>
          <C.Input
            type="radio"
            id="rDespesas"
            name="group1"
            onChange={() => setDespesa(!isDespesa)}
          />
          <C.Label htmlFor="rDespesas">Saída</C.Label>
        </C.RadioGroup>
        <C.Button onClick={handleSave}>ADICIONAR</C.Button>
      </C.Container>
      <List itens={transactionsList} setItens={(setTransactionsList)}/>
    </>
  );
};

export default Form;
