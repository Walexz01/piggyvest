import React from 'react'
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
                this is the right side Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore, ipsa provident, sapiente sit beatae eum suscipit vero quas praesentium earum perspiciatis repellat possimus recusandae. Iusto nulla quod porro temporibus distinctio perferendis placeat dignissimos fuga ipsa quasi magnam cumque, pariatur provident perspiciatis magni aspernatur ipsam enim sunt ratione error. Vitae, dignissimos esse. Ad animi illo rem aut numquam magnam dolorem natus iure sed architecto quam quisquam, ea alias placeat dolor officia ipsa est deserunt provident id. Iusto perferendis molestias corporis quidem dolores odio nisi et in officia. Et magnam, provident excepturi iure doloremque nesciunt beatae rem veritatis, ullam, atque id repudiandae.
            </div>
        </div>
    </section>
  )
}

export default Investify