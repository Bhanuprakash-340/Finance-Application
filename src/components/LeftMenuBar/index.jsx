import React from 'react'
import './index.css'

const LeftMenuBar = () => {
  return (
    <div className='left-menu-bar-container'>
      <div className='left-blocks left-top'>
        <img src="https://yt3.googleusercontent.com/ytc/AGIKgqMuPAezomkB7-KIQZconknAFwS-_zE1aU34y7fk=s900-c-k-c0x00ffffff-no-rj" alt="logo" className='logo'/>
        <div className='left-icons'></div>
        <div className='left-icons'></div>
        <div className='left-icons'></div>
        <div className='left-icons'></div>
      </div>
      <div className='left-blocks left-bottom'>
        <div className='left-icons'></div>
        <div className='left-icons'></div>
      </div>
    </div>
  )
}

export default LeftMenuBar