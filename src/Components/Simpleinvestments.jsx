import React from 'react'
import {Investment} from '../data'

const Simpleinvestments = () => {
  return (
    <section className='simple__investments__section'>
        <div className="container simple__investments__container">
            <div className="simple_investment_top">
                <h2>Simple investments with great returns</h2>
                <p>Investments are made readily accessible to everyone</p>
            </div>
            <div className="cards__container">
            {Investment.map(({image,title,desc},index)=>{
              return(
            <div className="card" key={index}>
                <div className="card__icon__top">
                  <img src={image} alt="" />
                </div>
                <div className="card__details">
                  <h3>{title}</h3>
                  <p>{desc}</p>
                </div>
            </div>
              )
            })
            }
            </div>
        </div>
    </section>
  )
}

export default Simpleinvestments