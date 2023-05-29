import React from 'react'
import './index.css'

const Transactions = () => {
  return (
    <div className='transactions-container'>
       <div className='trans-heading-block'>
            <h4>Transactions</h4>
            <p>Recent</p>
       </div>
       <ul className='transaction-list'>
        <li className='each-trans'></li>
        <li className='each-trans'></li>
        <li className='each-trans'></li>
        <li className='each-trans'></li>
       </ul>
    </div>
  )
}

export default Transactions