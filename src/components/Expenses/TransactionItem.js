import './TransactionItem.css'
import { useContext} from 'react';
import { GlobalConttext } from '../../context/GlobalState';

const TransactionItem = ({transaction}) => {

    const {deleteTransaction} = useContext(GlobalConttext)

    const sing = transaction.amount < 0 ? '-' : '+';


    return (
       <li className={transaction.amount < 0 ? 'minus' : 'plus'}>
            {transaction.text}
            <span>{sing}${Math.abs(transaction.amount)}</span>
            <button className='delete-transaction' onClick={() =>  deleteTransaction(transaction._id)}>x</button>
       </li>
    )
}

export default TransactionItem