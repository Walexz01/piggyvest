import React from 'react'
import { Link } from 'react-router-dom'
import imgborder from '../piggy-image/home_page_images/rect.png'


const Storieshead = () => {
    return (
        <section className='stories__head--section'>
            <div className="container stories__head--container">
                <div className="stories__head--container--left">
                    <h2>Loved by our Customers 💙</h2>
                    <p>Stories of happy savers who PiggyVest has helped or is helping save for what truly matters to them.</p>
                    <div className="create_acct btn">
                        <Link to='signup'>Add your story</Link>
                    </div>
                </div>
                    {/* <div className="main__header--right--background"/> */}
                <div className="stories__head--container--right">
                    <img src={imgborder} alt="" className='border' />

                </div>
            </div>
        </section>
    )
}

export default Storieshead