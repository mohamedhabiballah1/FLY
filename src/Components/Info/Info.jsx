import React, { useEffect } from 'react'

//Import Icons
import  {RxCalendar} from 'react-icons/rx'
import {BsShieldCheck} from 'react-icons/bs'
import {BsBookmarkCheck} from 'react-icons/bs'

 
//Import AOS
import Aos from 'aos'
import 'aos/dist/aos.css'


const Info = () => {
  useEffect(() => {
    Aos.init({duration:2000})
  }, [])
  return (
    <div className='info section'>
      <div className="infoConrtainer">
        <div data-aos='fade-right' data-aos-duration='2000' className="titleDiv flex">
          <h2>Travel to make memories all around the world</h2>
          <button data-aos='fade-left' data-aos-duration='2000' className='btn'>
            View All
          </button>
        </div>
        <div className="cardsDiv grid">
          <div data-aos='fade-right' data-aos-duration='1000' className="singleCard grid">
            <div className="iconDiv flex">
              <RxCalendar className='icon'/>
            </div>
            <span className="cardTittle">Book & Relax</span>
            <p>You can also call airlines from your phone and book a flight ticket!</p>
          </div>
          <div data-aos='fade-up' data-aos-duration='1500' className="singleCard grid">
            <div className="iconDiv flex colorOne">
              <BsShieldCheck className='icon'/>
            </div>
            <span className="cardTittle">Smart checklist</span>
            <p>You can also call airlines from your phone and book a flight ticket!</p>
          </div>
          <div data-aos='fade-left' data-aos-duration='1000' className="singleCard grid">
            <div className="iconDiv flex colorTwo">
              <BsBookmarkCheck className='icon'/>
            </div>
            <span className="cardTittle">Save more</span>
            <p>You can also call airlines from your phone and book a flight ticket!</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Info