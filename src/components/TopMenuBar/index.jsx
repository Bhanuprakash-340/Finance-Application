import React from 'react'
import './index.css'

const TopMenuBar = () => {
  return (
    <div className='top-menu-bar'>
      <h1>Dashboard</h1>
      <div className='top-menu-search-container'>
        <div>
          <input type="search" className='search-bar' placeholder='Search for transaction,items,etc.'/>
        </div>
        <div className='top-menu-icons'>
            <div className='left-icons'></div>
            <div className='left-icons'></div>
            <div className='left-icons'></div>
        </div>
      </div>
    </div>
  )
}

export default TopMenuBar