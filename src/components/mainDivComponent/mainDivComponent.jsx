import React from 'react'
// import Icons from '../../images/destination.png'
import './mainDivComponent.css'

function MainDivComponent(props) {

    const {src, title, description} = props;

    return (
        <div className="mainDivComponent">
            <div className='mainDivComponent_container'>
            {/* {data && data.map((data, index) => { */}
                {/* return ( */}
                    <div className='mainDivComponent_container_details'>
                        <div className='img_background'>
                        <img src={src} alt='map' />
                        </div>
                        <h5>{title}</h5>
                        <p>{description}</p>
                    </div>
                {/* ) */}
            {/* })} */}

        </div>
        </div>
        
    )
}

export default MainDivComponent
