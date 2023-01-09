import React from 'react'
import { Link } from 'react-router-dom'
import security from '../piggy-image/home_page_images/security.png'
import {MdChevronRight} from 'react-icons/md'
const Security = () => {
  return (
    <section className='security__section'>
        <div className="container security__container">
            <div className="security__img">
                <img src={security} alt="" />
            </div>
            <div className="security__text">
                <h2>Your security is our priority</h2>
                <p>PiggyVest uses the highest level of Internet Security and it is secured by 256 bits SSL security encryption to ensure that your information is comepletely protected from fraud.</p>
                <Link> Learn more <MdChevronRight/> </Link>
            </div>
        </div>
    </section>
  )
}

export default Security