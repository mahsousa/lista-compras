import React from 'react';
import { Font, Image, Page, Text, View, Document, StyleSheet } from '@react-pdf/renderer';


Font.register({
  family: 'Poppins',
  src: 'http://fonts.gstatic.com/s/poppins/v1/hlvAxH6aIdOjWlLzgm0jqg.ttf',
});

// Create styles
const styles = StyleSheet.create({
  body: {
    paddingTop: 35,
    paddingBottom: 65,
    paddingHorizontal: 35,
  },
  titlePage: {
    fontSize: 24,
    padding: 20,
    textAlign: 'center',
    backgroundColor: '#E4E4E4',
    color: '#808080',
  },
  contentTitle: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 40,
    padding:5,
  },
  section: {
    marginTop: 20,
    fontFamily: 'Poppins',
    padding:5,
  },
  informacoes: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    fontSize: 14,
  },
  infoTitulo: {
    width: 150,
  }
});



// Create Document Component
export const PdfLayout = () => {

  
  function getdata() {
    return JSON.parse(localStorage.getItem('transactionsList'));
  }
  

  function getdata() {
    return JSON.parse(localStorage.getItem('transactions'));
  }

  function renderRow(row) {
    return (
      <Document style={styles.informacoes}>
        <View style={styles.infoTitulo}>
          <Text style={styles.line}>{row.descricao}</Text>
        </View>
        <View style={styles.infoTitulo}>
        <Text style={styles.line}>{row.quantia}</Text>
          </View>
        <View style={styles.infoTitulo}>
        <Text style={styles.line}>{row.saida ? 'Despesa' : 'Novo Orçamento'}</Text>
        </View>
      </Document>
    )
  }

  let rows = [];
  let data = getdata();

  if (data != null) 

    for (let i = 0; i < data.length; i++) {
      rows.push(renderRow(data[i]));
  }

  return (
    <Document>
      <Page size="A4" style={styles.body}>
      <Text style={styles.titlePage}>
          Relação de Gastos
        </Text>

      <View style={styles.contentTitle}>
          <View style={styles.infoTitulo}>
            <Text style={styles.line}>Total Orçamento:</Text>
          </View>
          <View style={styles.infoTitulo}>
            <Text style={styles.line}>Total Gasto:</Text>
          </View>
          <View style={styles.infoTitulo}>
            <Text style={styles.line}>Saldo Disponivel:</Text>
          </View>
        </View>
        <View style={styles.section}>
            {rows}
        </View>


        
        <View style={styles.contentTitle}>
          <View style={styles.infoTitulo}>
            <Text style={styles.line}>Descrição:</Text>
          </View>
          <View style={styles.infoTitulo}>
            <Text style={styles.line}>Valor:</Text>
          </View>
          <View style={styles.infoTitulo}>
            <Text style={styles.line}>E | S: </Text>
          </View>
        </View>
        <View style={styles.section}>
            {rows}
        </View>
      </Page>
    </Document>
  )
};

export default PdfLayout;