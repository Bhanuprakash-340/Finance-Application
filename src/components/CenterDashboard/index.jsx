import React from 'react'
import PriceDisplayCards from '../PriceDisplayCards'
import Finance from '../Finances'
import AllExpenses from '../AllExpenses'
import Transactions from '../Transactions'
import './index.css'

const CenterDashBoard = () => {
  return (
    <div className='center-dash-board'>
      <PriceDisplayCards/>
      <div className='finance-and-expenses-container'>
        <Finance/>
        <AllExpenses/>
      </div>
      <Transactions/>
    </div>
  )
}

export default CenterDashBoard