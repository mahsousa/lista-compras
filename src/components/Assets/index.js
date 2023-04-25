import React from "react";
import * as C from "./style";
import jsPDF from 'jspdf';

import {
  AiFillPrinter,
} from "react-icons/ai";

import {
  FaTrashAlt,
} from "react-icons/fa";


function Assets() {

  function clearAllStorage() {
    localStorage.removeItem("transactions");
    window.location.reload(true);

  }

  function printAllStorage() {
    let dadosLocalStorage = JSON.parse(localStorage.getItem('transactions'));
    let elemento = document.createElement('div');
    let listaHtml = "";

    for (let i = 0; i < dadosLocalStorage.length; i++) {
      listaHtml += `
      <p><strong>Descrição:</strong> ${dadosLocalStorage[i].descricao} <strong>Valor:</strong> ${dadosLocalStorage[i].quantia} ${dadosLocalStorage[i].tipo}</p>
      `;
    }

    elemento.innerHTML = `
    <h2>Lista de compras</h2>
    ${listaHtml}
  `;

    let pdf = new jsPDF();
    pdf.fromHTML(elemento);
    pdf.save('arquivo.pdf');

  }


  return (
    <>
      <C.Container>
        <AiFillPrinter onClick={printAllStorage} />
        <FaTrashAlt onClick={clearAllStorage} />
      </C.Container>
    </>
  )

}

export default Assets;