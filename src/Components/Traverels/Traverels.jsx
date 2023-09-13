import React from 'react'

//Import Destinations Images
import paris from '../../assets/paris.png'
import london from '../../assets/london.png'
import newYork from '../../assets/newYork.png'
import dubai from '../../assets/dubai.png'

//Import Travelers Images
import traveler1 from '../../assets/user3.png'
import traveler2 from '../../assets/user2.png'
import traveler3 from '../../assets/user1.png'
import traveler4 from '../../assets/user4.png'


const travelers =[
  {
    id: 1,
    destinationImage: paris,
    travelerImage: traveler1,
    travelerName: 'James Couple',
    socialLink: '@jamescouple1'
  },
  {
    id: 1,
    destinationImage: london,
    travelerImage: traveler2,
    travelerName: 'Any',
    socialLink: '@any9'
  },
  {
    id: 3,
    destinationImage: dubai,
    travelerImage: traveler3,
    travelerName: 'Khalid',
    socialLink: '@kha_lid221'
  },
  {
    id: 4,
    destinationImage: newYork,
    travelerImage: traveler4,
    travelerName: 'Mark',
    socialLink: '@markoff1'
  },
]

const Traverels = () => {
  return (
    <div className='travelers container section'>
      <div className="sectionContainer">
        <h2>
          Top travelers of this month
        </h2>
        <div className="travelersContainer grid">
          {
            travelers.map(({id, destinationImage, travelerImage, travelerName, socialLink}) =>{
              return(
                  <div key={id} className="singleTrave">
                    <img src={destinationImage} className='destinationImage'/>
                    <div className="travelerDetail">
                      <div className="travelerPicture">
                        <img src={travelerImage} className='travelerImage'/>
                      </div>
                      <div className="travelerName">
                        <span>{travelerName}</span>
                        <p>{socialLink}</p>
                      </div>
                    </div>
                </div>
              )
            })
          }
        </div>
      </div>
      
    </div>
  )
}

export default Traverels