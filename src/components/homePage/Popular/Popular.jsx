import React, {useState, useEffect} from 'react'
import './popular.css'
import axios from 'axios'
import map from '../../../icons/map.png'

function Popular() {

  const [popularDestination, setPopularDestination] = useState([])

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("https://raftinglb.onrender.com/popular");
        setPopularDestination(response.data.data);
      } catch (error) {
        console.log("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className='popular'>
      <div className='destination_title'>
        <p>WHERE TO GO</p>
        <h2>Popular Destinations</h2>
      </div>

      <div className='popular_main'>
      {popularDestination.map((popular, index) => {
          const backgroundImageStyle = {
            backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)), url(${popular.image})`,
          };
          return (
              <div className='destination' key={index} style={backgroundImageStyle}>

              <div className='destination_info'>
                <div className='destination_name'><h5>{popular.title}</h5></div>
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