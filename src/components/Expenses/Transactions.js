import './Transactions.css'
import TransactionItem from './TransactionItem'
import { useContext, useEffect } from 'react'
import { GlobalConttext } from '../../context/GlobalState'


const Transactions = () => {

   const {transactions, getTransaction} = useContext(GlobalConttext);

   useEffect (() => {
    getTransaction()
   },[])

    return (
       <div>
          <h3 className='transactions-history'>History</h3> 
          <ul className='transactions-list'>
              {transactions.map(transaction => (
                  <TransactionItem transaction={transaction} key={transaction.id}/>
              ))}
          </ul>
       </div>
    )
}

export default Transactions