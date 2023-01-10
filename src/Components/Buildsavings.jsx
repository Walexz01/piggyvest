import React from 'react'
import { Link } from 'react-router-dom'
import {BsArrowRight} from 'react-icons/bs'
import { Buildsavingsdata } from '../data'

const Buildsavings = () => {
  return (
    <section>
        <div className="container build__saving__section--container">
          <div className="build__saving--left">
            <h2>4 ways to build your savings</h2>
            <p>Earn 5%-15% when you save with any of these PiggyVest plans.</p>
            <div className="create_acct btn start__saving__btn">
              <Link to=''>Start Saving</Link>
            </div>
          </div>

          <div className="build__saving--right">
            {Buildsavingsdata.map(({image,title,desc,link})=>{
              return(
            <div className="card">
              <Link>
                <div className="card__icon__top">
                  <img src={image} alt="" />
                </div>
                <div className="card__details">
                  <h3>{title}</h3>
                  <p>{desc}</p>
                  <div className="card__link">
                    <BsArrowRight/> <span>{link}</span>
                  </div>
                </div>
              </Link>
            </div>
              )
            })
            }
        </div>
        </div>
    </section>
  )
}

export default Buildsavings