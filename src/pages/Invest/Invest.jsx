import React from 'react'
import Investheader from '../../Components/Investheader'
import Simpleinvestments from '../../Components/Simpleinvestments'
import './invest.css'

const Invest = () => {
  return (
    <div className='invest'>
      <Investheader/>
      <Simpleinvestments/>
    </div>
  )
}

export default Invest