import './Balance.css'
import { GlobalConttext } from '../../context/GlobalState'
import { useContext } from 'react'


const Balance = () => {

   const {transactions} = useContext(GlobalConttext)

   const amounts = transactions.map(transaction =>transaction.amount);
   const total = amounts.reduce((acc,item) => (acc += item),0).toFixed(2)

    return (
       <div>
          <h4 className='balance-header'>Your Balance</h4>
          <h1 className='balance-total'>${total}</h1>
       </div>
    )
}

export default Balance