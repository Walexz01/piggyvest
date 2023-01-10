import React from 'react'
import { Link } from 'react-router-dom'
import InvestifyImg from '../piggy-image/home_page_images/invest.png'
import Investifydot from '../piggy-image/home_page_images/investify__dot.png'
const Investify = () => {
  return (
    <section className='investify__section'>
        <div className="container investify__section--container">
            <div className="investify__left">
                <img src={InvestifyImg} alt=""  className='investify__image'/>
                <img src={Investifydot} alt=""  className='investify__dot'/>
            </div>
            <div className="investify__right">
                <div className="investify__content">                    
                    <small className="investify__tag">
                    Up To 25% Returns
                    </small>
                    <h3>
                    Access investment opportunities
                    </h3>
                    <p>Invest securely and confidently on the go. Grow your money confidently by investing in pre-vetted investment opportunities.</p>
                    <Link>Learn more about Investments &gt; </Link>
                </div>

            </div>
        </div>
    </section>
  )
}

export default Investify