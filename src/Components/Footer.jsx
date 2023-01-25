import React from 'react'
import { Link } from 'react-router-dom'
import { productsLink } from '../data'
import piggyvest from '../piggy-image/home_page_images/logo 2.svg'
import ndprAudit from '../piggy-image/home_page_images/ndpr__audit.webp'
import { companyLink } from '../data'
import { legalLink } from '../data'
import {FaTwitterSquare,FaInstagramSquare,FaFacebookSquare} from 'react-icons/fa'

const Footer = () => {
  return (
    <section className='footer__section'>
      <div className="container footer__container">
        <div className="footer__section--top">

          <div className="footer__logo--conatiner">
            <div className="piggy__logo--conatiner">
              <img src={piggyvest} alt="piggyvest logo" />
            </div>
            <div className="ndpr__logo--conatiner">
              <img className='ndpr' src={ndprAudit} alt="ndprAudit logo" />
            </div>
          </div>

          <div className="footer__products--links">
            <h4 className="link--header">
            Products
            </h4>
            <ul className='footer__links--container'>
              { productsLink.map(({name,link},index)=> {
                return(
                    <li key={index} className='footer__link' > <Link to={link}>{name} </Link>  </li>
                )
              })
              }
            </ul>
          </div>

          <div className="footer__company--links">
            <h4 className="link--header">
            Company
            </h4>
            <div className="footer__links--container">
              {
                companyLink.map(({name,link},index)=>{
                  return(
                    <li key={index} className='footer__link'> <Link to={link}>{name} </Link> </li>
                  )
                })
              }
            </div>

          </div>

          <div className="footer__legal--links">
            <h4 className="link--header">
            Legal
            </h4>
            <div className="footer__links--container">
              {
                legalLink.map(({name,link},index)=>{
                  return(
                    <li key={index} className='footer__link' ><Link to={link}>{name}</Link> </li>
                  )
                })
              }
            </div>
          </div>

          <div className="footer__contact--links">
            <div className="contact__icon--group">
              <FaFacebookSquare/>
              <FaTwitterSquare/>
              <FaInstagramSquare/>
            </div>
            <div className="contact___text">
              <div className="map">
              <a href='https://www.google.ng/maps/place/PiggyVest/@6.4319633,3.4394938,19z/data=!4m5!3m4!1s0x103b8b238b3991d3:0xbd120349b96ea1f8!8m2!3d6.4315742!4d3.4402829' className="contact__link">
Tesmot house, Abdulrahman Okene close, Victoria Island, Lagos, Nigeria.
              </a>
              </div>
              <div className="email">
              <a className='contact__link' href="mailto:contact@piggyvest.com">contact@piggyvest.com</a>
              </div>
              <div className="tel">
              <a  className='contact__link' href="tel:+23481231300121">+234 700 933 933 933</a>
              </div>
            </div>
          </div>

        </div>
        <div className="footer__bottom">
          <p>Piggyvest (formerly piggybank.ng) is the leading online savings & investing platform in Nigeria. For over 6 years, our customers have saved and invested billions of Naira that they would normally be tempted to spend.</p>
          <small>2016 - 2022 PiggyTech Global Limited - RC 1405222</small>
        </div>
      </div>
    </section>
  )
}

export default Footer