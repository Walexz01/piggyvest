import React from 'react'
import { Link } from 'react-router-dom'
import apple from '../piggy-image/home_page_images/apple-icon.svg'
import google from '../piggy-image/home_page_images/google-icon.svg'
import imgborder from '../piggy-image/home_page_images/rect.png'
import girlimg from '../piggy-image/home_page_images/header_Img_a2a9220bd6.png'
import card1 from '../piggy-image/home_page_images/card1.png'
import card2 from '../piggy-image/home_page_images/card2.png'
import main_dot from '../piggy-image/home_page_images/main_header_icon3.png'
import main_donut from '../piggy-image/home_page_images/main_header_icon2.png'
import main_shape from '../piggy-image/home_page_images/main_header_icon.png'

const Mainheader = () => {
  return (
    <section className='main__header--section'>
        <div className="container main__header__container">
            <div className="main__header--left">
                <h2>The Better Way to Save & Invest.</h2>
                <p>PiggyVest helps over 4 million customers achieve their financial goals by helping them save and invest with ease.</p>
                <div className="create_acct btn">
                        <Link to='signup'>Create free account</Link>
                    </div>
                    <div className="get__app__links--group">
                        <div className="get__app__link btn">
                            <Link><img src={apple} alt="" className='get__app_img' /> Get on iphone </Link>
                        </div>
                        <div className="get__app__link btn">
                            <Link><img src={google} alt="" className='get__app_img' /> Get on iphone </Link>
                        </div>
                    </div>

            </div>
                <div className="main__header--right--background"/>
            <div className="main__header--right">
                        <img src={imgborder} alt="" className='border' />
                <div className="img__conatiner">
                        <img src={girlimg} className='girl' alt="" />
                        <img src={card1} alt="" className='card1' />
                        <img src={card2} alt="" className='card2' />
                        <img src={main_donut} alt="" className='donut' />
                        <img src={main_dot} alt="" className='dot'/>
                        <img src={main_shape} alt="" className='shape' />
                </div>
            </div>
        </div>
    </section>
  )
}

export default Mainheader