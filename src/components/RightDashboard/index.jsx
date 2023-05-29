import React from 'react'
import MyCards from '../MyCards'
import QuickTransfer from '../QuickTransfer'
import './index.css'

const RightDashBoard = () => {
  return (
    <div className='right-dash-board'>
     <MyCards/>
     <QuickTransfer/>
    </div>
  )
}

export default RightDashBoard