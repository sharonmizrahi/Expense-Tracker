import './AddTransaction.css'
import { useState,useContext } from 'react'
import { GlobalConttext } from '../../context/GlobalState';


const AddTransaction = () => {
    
    const {addTransaction} = useContext(GlobalConttext)

    const [text,setText] = useState('')
    const [amount,setAmount] = useState(0)

    const submitHandler = (e) => {
        e.preventDefault()
        
        const newExpense = {
            id: Math.floor(Math.random() * 100000000),
            text: text,
            amount: +amount
        }

        addTransaction(newExpense)
        setText('')
        setAmount(0)

    }

    return (
        <div>
           <h3 className='add-header'>Add New Transaction</h3>
           <form onSubmit={submitHandler}>
               <div className='form-control'>
                  <label htmlFor='text'>Text</label>
                  <input type='text' value={text} onChange={(e) => setText(e.target.value)} placeholder='Enter Text' />
               </div>
               <div className='form-control'>
                  <label htmlFor='amount'>Amount <br/> (negative - expense, positive - expense)</label>
                  <input type='number' value={amount} onChange={(e) => setAmount(e.target.value)} placeholder='Enter Amount' />
               </div>
               <button className='add-btn'>Add Transaction</button>

           </form>
       </div>
    )
}

export default AddTransaction