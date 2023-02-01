import React from 'react'
import { Link } from 'react-router-dom'
import InvestifyImg from '../piggy-image/home_page_images/invest.png'
import Investifydot from '../piggy-image/home_page_images/investify__dot.png'
import main_shape from '../piggy-image/home_page_images/main_header_icon.png'
import investcard1 from '../piggy-image/invest_page_images/i-card1.png'
import investcard2 from '../piggy-image/invest_page_images/i-card2.png'
import invests_donut from '../piggy-image/home_page_images/main_header_icon2.png'




const Investheader = () => {
  return (
    <section className='invest__header__section'>
        <div className="container invest__header--container">
            <div className="invest__header--left">
            <h2>Invest on the go.</h2>
            <p>Invest securely and confidently on the go.</p>
            <p>Up to 25% returns, 6-12 month duration.</p>
            <div className="create_acct btn saving-btn">
                <Link to='signup'>Start Saving Today</Link>
            </div>
            </div>
            <div className="main__header--right--background"/>
            <div className="invest__header--right">
                <img src={InvestifyImg} alt=""  className='invest__header--image'/>
                <div className="img__container">
                    <img src={Investifydot} alt=""  className='investify__dot'/>
                    <img src={main_shape} alt="" className='shape' />
                    <img src={investcard1} alt="" className='investcard1' />
                    <img src={investcard2} alt="" className='investcard2' />
                    <img src={invests_donut} alt="" className='investdonut' />

                </div>
            </div>
        </div>
    </section>
  )
}

export default Investheader