import React from 'react'
import './welcome.css'
import welcomeIcons from '../../../icons/location.png'
function welcome() {
    const welcome = [
        {
            title: "Welcome To Hermel", description: "bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla"+' bla bla bla bla bla bla bla bla bla bla bla', image: welcomeIcons
        },
        {
            title: "Welcome To Rafting LB", description: "bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla"+"bla bla bla bla bla bla bla bla bla bla", image: welcomeIcons
        }
    ]

    return (
        <div className='welcome_container'>
            {welcome.map((welcome, index) => {
                return (
                    <div className='welcome'>
                        <div className='welcome_image'>
                            <img src={welcomeIcons} alt=" welcome" />
                        </div>
                        <div className='welcome_title_description'>
                            <h5>{welcome.title}</h5>
                            <p>{welcome.description}</p>
                        </div>
                    </div>
                )
            })}


        </div>
    )
}

export default welcome