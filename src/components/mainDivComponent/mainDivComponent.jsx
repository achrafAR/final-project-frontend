import React from 'react'
// import Icons from '../../images/destination.png'
import './mainDivComponent.css'

function MainDivComponent(props) {

    const {src, title, description} = props;

    return (
        <div className='mainDivComponent_container'>
            {/* {data && data.map((data, index) => { */}
                {/* return ( */}
                    <div className='mainDivComponent_container_details'>
                        <img src={src} alt='map' />
                        <h5>{title}</h5>
                        <p>{description}</p>
                    </div>
                {/* ) */}
            {/* })} */}

        </div>
    )
}

export default MainDivComponent
