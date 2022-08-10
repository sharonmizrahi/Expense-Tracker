import './IncomeExpenses.css'
import { GlobalConttext } from '../../context/GlobalState'
import { useContext } from 'react'


const IncomeExpenses = () => {

    const {transactions} = useContext(GlobalConttext)

    const amounts = transactions.map(transaction =>transaction.amount)

    const income = amounts
       .filter(item => item > 0)
       .reduce((acc,item) => (acc += item),0)
       .toFixed(2)
    
   const expense = (amounts
       .filter(item => item < 0)
       .reduce((acc,item) => (acc += item),0) * -1)
       .toFixed(2)


    return (
       <div className='expense-container'>
          <div>
              <h4 className='income-header'>Income</h4>
              <p className='income-total'>{income}</p>
          </div>
          <div>
              <h4 className='expense-header'>Expense</h4>
              <p className='expense-total'>{expense}</p>
          </div>
       </div>
    )
}

export default IncomeExpenses