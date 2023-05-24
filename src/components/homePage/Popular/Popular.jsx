import React from 'react'
import './popular.css'
import destination from '../../../images/destination.png'

import map from '../../../icons/map.png'

function Popular() {

  const popular = [
    { id: 1, destinationName: 'Ain Zarka', location: "hermel" },
    { id: 1, destinationName: 'Ain Zarka', location: "hermel" },
    { id: 1, destinationName: 'Ain Zarka', location: "hermel" },
    { id: 1, destinationName: 'Ain Zarka', location: "hermel" }

  ]

  return (
    <div className='popular'>
      <div className='destination_title'>
        <p>WHERE TO GO</p>
        <h2>Popular Destinations</h2>
      </div>

      <div className='popular_main'>
          {popular.map((popular, index) => {
            return (
              <div className='destination' key={index}>

              <div className='destination_info'>
                <div className='destination_name'><h5>{popular.destinationName}</h5></div>
                <div className='destination_image_dark'>
                <div className='destination_location'>
                  <img src={map} alt='Map' />
                  <span>{popular.location}</span>
                </div>
                </div>
                
              </div>
              </div>
              

            )
          })}

        </div>
    </div>
  )
}

export default Popular