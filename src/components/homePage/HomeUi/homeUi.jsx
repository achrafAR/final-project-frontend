import React from 'react';
import './homeUi.css';




function HomeUi() {
    const background = [
        'https://images.pexels.com/photos/2228875/pexels-photo-2228875.jpeg?auto=compress&cs=tinysrgb&w=1600',
    ]

    

    const containerStyle = {
        backgroundImage: `url(${background})`,
        backgroundSize: 'cover',
        width: '100vw',
        height: '100vh',
        
    };

    return (
    <div className='homeUi'>
            <div className='background' style={containerStyle}/>
            <div className='title_description'>
            <div className='title_homeUi'>
                <h2>Easy To Arrive Hard To Leave !</h2>
            </div>
            <div className='desc_homeUi'>rafting is one of the best activity in lebanon.in hermel at the assi river its this activity u can do it without affraid and bla bla bla bla bla bla bla bla bla</div>
            <div className='btn_homeUi'><a href='www.google.com'>Start Now</a></div>
            </div>
            
    </div>
    )
}

export default HomeUi