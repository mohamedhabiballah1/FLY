import React, { useEffect } from 'react'

//Import Images

import loungeimage from '../../assets/lounge.png'



import Aos from 'aos'
import 'aos/dist/aos.css'


const Lounge = () => {

  useEffect(() => {
    Aos.init({duration:2000})
  }, [])
  return (
    <div className='lounge container section'>
      <div className="sectionContainer grid">
        <div data-aos='fade-left' data-aos-duration='2500' className="imgDiv">
          <img src={loungeimage}/>
        </div>

        <div data-aos='fade-right' data-aos-duration='2500' className="textDiv">
          <h2>Unaccompanied Minor Lounge</h2>
          <div className="grids grid">

          <div className="singleGrid">
            <span className="gridTittle">
              Help Through The Airpot
            </span>
            <p>
              You can also call airlines from your phone and book a flight ticket to one of your favorite destinations.
            </p>
          </div>

          <div className="singleGrid">
            <span className="gridTittle">
              Priority Boarding
            </span>
            <p>
              You can also call airlines from your phone and book a flight ticket to one of your favorite destinations.
            </p>
          </div>

          <div className="singleGrid">
            <span className="gridTittle">
              Care On The Flight
            </span>
            <p>
              You can also call airlines from your phone and book a flight ticket to one of your favorite destinations.
            </p>
          </div>

          <div className="singleGrid">
            <span className="gridTittle">
              Chauffeur-Drive Service
            </span>
            <p>
              You can also call airlines from your phone and book a flight ticket to one of your favorite destinations.
            </p>
          </div>

          </div>
        </div>
      </div>
    </div>
  )
}

export default Lounge