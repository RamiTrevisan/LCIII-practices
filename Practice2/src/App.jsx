import './App.css';
import Table from './table';

function App() {

  const netIncomes = [{brand: 'McDonalds', income: 1291283},
                      {brand: 'Burger King', income: 1927361},
                      {brand: 'KFC', income: 1098463}];
  


  const sumNetIncomes = netIncomes.reduce((sum, item) => sum + item.income, 0);
  const averageNetIncome = sumNetIncomes / netIncomes.length;

  return (
      <>
        <Table data={netIncomes}/>
        <p>Promedio ingresos brutos: $ {averageNetIncome.toLocaleString('es-ES')}</p>
      </>
  )

}

export default App
