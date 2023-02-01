import React from 'react'
import Getstarted from '../../Components/Getstarted'
import Investheader from '../../Components/Investheader'
import Simpleinvestments from '../../Components/Simpleinvestments'
import './invest.css'

const Invest = () => {
  return (
    <div className='invest'>
      <Investheader/>
      <Simpleinvestments/>
      <Getstarted/>
    </div>
  )
}

export default Invest