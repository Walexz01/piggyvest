import React from 'react'
import Mainheader from '../../Components/Mainheader'
import Security from '../../Components/Security'
import './home.css'

const Home = () => {
  return (
    <div className='home'>
      <Mainheader/>
      <Security/>
    </div>
  )
}

export default Home