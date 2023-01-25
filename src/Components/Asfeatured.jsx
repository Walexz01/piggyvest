import React from 'react'
import techpoint from '../piggy-image/home_page_images/image.png'
import theguardian from '../piggy-image/home_page_images/image (1).png'
import techcrunch from '../piggy-image/home_page_images/image (2).png'

const Asfeatured = () => {
  return (
    <section className='asfeatured__section'>
        <div className="container asfeatured__container">
            <div className="left">
                <h2>As featured in</h2>
            </div>
            <div className="right">
                <img src={techpoint} alt="techpoint" />
                <img src={theguardian} alt="theguardian" />
                <img src={techcrunch} alt="techcrunch" />
            </div>
        </div>
    </section>
  )
}

export default Asfeatured