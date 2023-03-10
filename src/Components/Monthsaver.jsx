import React from 'react'
import {BsArrowRight} from 'react-icons/bs'
import { Link } from 'react-router-dom'
import oyetola from '../piggy-image/home_page_images/oyetades.jpg'


const Monthsaver = () => {
  return (
    <section className='month__saver__section'>
      <div className="container month__saver-contanier">
        <div className="month__saver__left">
            <h3>Meet the saver of the month!</h3>
            <p>Every month, we shine a spotlight on one saver, asking them questions about their savings culture and how the product is specifically helping them shape how they spend and save for future responsibilities.</p>
            <Link className="card__link">
              <BsArrowRight/> <span>Meet The Oyetade's</span>
            </Link>
        </div>
      </div>
        <div className="month__saver__right">
            <img src={oyetola} className='oyetola__img' alt="" />
        </div>
    </section>
  )
}

export default Monthsaver