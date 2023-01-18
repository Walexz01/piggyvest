import React from 'react'


const Customertweet = ({date__time,image,name,message}) => {
  return (
    <div className="customer__tweet">
        <div className="tweet__date__time--container">
            <small className="date__time">
            {date__time}
            </small>
        </div>
        <div className="tweet__content">
            <div className="tweet__img">
                <img src={image} alt="" />
            </div>
            <div className="tweet__content--details">
                <h4 className="tweeter__name">
                {name}
                </h4>
                <p className="tweet__message">
                    {message}
                </p>
            </div>
        </div>
    </div>
  )
}

export default Customertweet