import React, { useState } from 'react'
import * as C from './style'


const Form = () => {
  const [description, setDescription] = useState("")
  const [amount, setAmount] = useState("")
  const [isExpense, setExpense] = useState("")

  const adcValue = () =>{
    if(!description || !amount){
      alert("informe a descrição e o valor:");
      return;
    }else if(amount < 1){
      alert ("o valor tem que ser positivo!");
      return;
    }
  };


  return (
    <>
    <C.Container>
      <C.InputContent>
        <C.Label>Descrição:</C.Label>
      <C.Input value={description} onChange={(e) => setDescription(e.target.value)}/>
      </C.InputContent>

      <C.InputContent>
        <C.Label>Valor:</C.Label>
        <C.Input value={amount} type="number" onChange={(e) => setAmount(e.target.value)}/>
      </C.InputContent>
    
      <C.RadioGroup>
        <C.Input type="radio" id="group1" defaultChecked name="group1" onChange={() => setExpense(!isExpense)}/>
        <C.Label htmlFor="group1">Entrada</C.Label>
        <C.Input type="radio" id="group2" name='group2' onChange={() => setExpense(!isExpense)}/>
        <C.Label htmlFor="group2">Saida</C.Label>
      </C.RadioGroup>
      <C.Button onClick={adcValue}>ADICIONAR</C.Button>
    </C.Container>
    </>
  )
}

export default Form;