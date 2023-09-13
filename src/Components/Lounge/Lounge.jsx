import React from 'react'

//Import Images

import loungeimage from '../../assets/lounge.png'

const Lounge = () => {
  return (
    <div className='lounge container section'>
      <div className="sectionContainer grid">
        <div className="imgDiv">
          <img src={loungeimage}/>
        </div>

        <div className="textDiv">
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