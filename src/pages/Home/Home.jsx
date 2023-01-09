import React from 'react'
import Buildsavings from '../../Components/Buildsavings'
import Mainheader from '../../Components/Mainheader'
import Security from '../../Components/Security'
import './home.css'

const Home = () => {
  return (
    <div className='home'>
      <Mainheader/>
      <Security/>
      <Buildsavings/>
    </div>
  )
}

export default Home