import React from 'react'
import './index.css'

const PriceDisplayCards = () => {
  return (
    <ul className='prices-container'>
        <li className='price-card'>Balance</li>
        <li className='price-card'>Income</li>
        <li className='price-card'>Saving</li>
        <li className='price-card'>Expenses</li>
    </ul>
  )
}

export default PriceDisplayCards