
import './App.css';
import Header from './components/Layout/Header';
import Balance from './components/Balance/Balance';
import IncomeExpenses from './components/Expenses/IncomeExpenses';
import Transactions from  './components/Expenses/Transactions'
import AddTransaction from './components/Expenses/AddTransaction'
import { GlobalProvider } from './context/GlobalState';

function App() {
  return (
    <GlobalProvider>
      <Header />
      <Balance />
      <IncomeExpenses />
      <Transactions />
      <AddTransaction />
    </GlobalProvider>
  );
}

export default App;
