import React from 'react'
import apple from '../piggy-image/home_page_images/apple-icon.svg'
import google from '../piggy-image/home_page_images/google-icon.svg'

import { Link } from 'react-router-dom'

const Customers = () => {
  return (
    <section className='customers__section'>
        <div className="container customers__container">
            <div className="left__customer__container">
                ggg
            </div>
            
            <div className="right__customer__container">
                <div className="right__customer__content">
                        <h3>4 Million + customers</h3>
                        <p>Since launching in 2016, over 4,000,000 people have used PiggyVest to manage their money better, avoid over-spending and be more accountable.</p>
                        <div className="create_acct btn">
                            <Link to='signup'>Create free account</Link>
                        </div>
                    <div className="customer__content--bottom get__app__links--group">
                        <div className="get__app__link btn">
                            <Link><img src={apple} alt="" className='get__app_img' /> Get on iphone </Link>
                        </div>
                        <div className="get__app__link btn">
                            <Link><img src={google} alt="" className='get__app_img' /> Get on iphone </Link>
                        </div>
                    </div>

                </div>
            </div>
        </div>
        
    </section>
  )
}

export default Customers