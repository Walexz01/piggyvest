import React from 'react'
import { Link } from 'react-router-dom'

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
            this is the right
          </div>
        </div>
    </section>
  )
}

export default Buildsavings