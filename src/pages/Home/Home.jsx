import React from 'react'
import Buildsavings from '../../Components/Buildsavings'
import Investify from '../../Components/Investify'
import Mainheader from '../../Components/Mainheader'
import Monthsaver from '../../Components/Monthsaver'
import Security from '../../Components/Security'
import './home.css'

const Home = () => {
  return (
    <div className='home'>
      <Mainheader/>
      <Security/>
      <Buildsavings/>
      <Investify/>
      <Monthsaver/>
    </div>
  )
}

export default Home