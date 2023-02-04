import React from 'react'
import getstarted__img from '../piggy-image/invest_page_images/image.png'

const Getstarted = () => {
  return (
    <section className='getstarted__section'>
        <div className="container getstarted__container">
            <div className="getstarted--right">
                <h2>We’ve made it easier for anyone to get started.</h2>
                <p>With as little as NGN5000, you can now access pre-vetted low-medium risk primary and secondary investment opportunities. No hidden fees/charges. Thorough due diligence and pre-vetting on all investments are carried out for maximum safety.</p>
            </div>
        </div>
            <div className="getstarted--left">
                <img src={getstarted__img} className='getstarted__img' alt="" />
            </div>
    </section>
  )
}

export default Getstarted