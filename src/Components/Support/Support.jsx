import React from 'react'

// Imported Images

import  image1 from '../../assets/supportimg1.png'
import  image2 from '../../assets/supportimg2.png'
import  image3 from '../../assets/supportimg3.png'


const Support = () => {
  return (
    <div className="support container section">
      <div className="sectionContainer">
        <div className="tittlesDiv">
          <small>travel support</small>
          <h2>Plan your travel with confidence</h2>
          <p>Find help with booking and travel plans, see what to expect along the journey!</p>
        </div>

        <div className="infoDiv grid">
          <div className="textDiv grid">
            <div className="singleInfo">
              <span className='number'>01</span>
              <h4>Travel requirements for Dubai</h4>
              <p>
                Find help with booking and travel plans, see what to expect along the journey to your favourite destinations!
              </p>
            </div>

            <div className="singleInfo">
              <span className='number'>02</span>
              <h4>Chauffeur services at your arrival</h4>
              <p>
                Find help with booking and travel plans, see what to expect along the journey to your favourite destinations!
              </p>
            </div>

            <div className="singleInfo">
              <span className='number'>03</span>
              <h4>Multi-risk travel insurance</h4>
              <p>
                Find help with booking and travel plans, see what to expect along the journey to your favourite destinations!
              </p>
            </div>
          </div>

          <div className="imgDiv flex">
            <img src={image1} className='supportImg'/>
            <img src={image2} className='supportImg'/>
            <img src={image3} className='supportImg'/>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Support