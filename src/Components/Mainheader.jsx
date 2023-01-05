import React from 'react'
import { Link } from 'react-router-dom'
import apple from '../piggy-image/home_page_images/apple-icon.svg'
import google from '../piggy-image/home_page_images/google-icon.svg'

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
            <div className="main__header--right">ff</div>
        </div>
    </section>
  )
}

export default Mainheader