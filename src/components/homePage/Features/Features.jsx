import React from 'react'
import './features.css'

function Features() {

    const features = [
        {number: "01",title :"Choose the place and time",description:"Ultricies tristique nulla aliquet tortor malesuada fames ac turpis egestas sed tempus urna."},
        {number: "02",title :"Choose the place and time",description:"Ultricies tristique nulla aliquet tortor malesuada fames ac turpis egestas sed tempus urna."},
        {number: "03",title :"Choose the place and time",description:"Ultricies tristique nulla aliquet tortor malesuada fames ac turpis egestas sed tempus urna."}
    ]
return (
    <div className='features_main'>
        {features.map((feature,index) => {
            return (
                <div className='feature'>
                    <h2>{feature.number}</h2>
                    <h5>{feature.title}</h5>
                    <p>{feature.description}</p>
                </div>
            
            )
        }
        )
    }
    </div>
)  

}

export default Features