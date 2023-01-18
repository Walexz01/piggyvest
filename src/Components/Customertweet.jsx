import React from 'react'
import tweet1 from '../piggy-image/home_page_images/tweet1.jpg'


const Customertweet = () => {
  return (
    <div className="customer__tweet">
        <div className="tweet__date__time--container">
            <small className="date__time">
            Thursday, 27th of October 2022 by 13:03 PM
            </small>
        </div>
        <div className="tweet__content">
            <div className="tweet__img">
                <img src={tweet1} alt="" />
            </div>
            <div className="tweet__content--details">
                <h4 className="tweeter__name">
                Rachael O
                </h4>
                <p className="tweet__message">
                My name is Rachael Joseph and I am here to testify that Piggyvest has helped me a lot. I had to spread the good news to my friends and tell them about the app and behold they are also using it. Thank you so much Pggyvest for saving me cause I am the type of person that spends lavishly. Thank you once again Piggyvest 💙
                </p>
            </div>
        </div>
    </div>
  )
}

export default Customertweet