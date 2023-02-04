import React from 'react'
import Asfeatured from '../../Components/Asfeatured'
import Customers from '../../Components/Customers'
import Footer from '../../Components/Footer'
import Getstarted from '../../Components/Getstarted'
import Investheader from '../../Components/Investheader'
import RecentOppor from '../../Components/RecentOppor'
import Simpleinvestments from '../../Components/Simpleinvestments'
import './invest.css'

const Invest = () => {
  return (
    <div className='invest'>
      <Investheader/>
      <Simpleinvestments/>
      <Getstarted/>
      <RecentOppor/>
      <Customers/>
      <Asfeatured/>
      <Footer/>

    </div>
  )
}

export default Invest