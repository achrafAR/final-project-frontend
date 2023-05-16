import React from 'react'
import './raftingFounder.css'
import welcomeIcons from '../../../icons/location.png'
function raftingFounder() {

    const raftingFounder = [
        {
            title: "Welcome To Hermel", description: "bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla"+' bla bla bla bla bla bla bla bla bla bla bla', image: welcomeIcons
        },
        {
            title: "Welcome To Rafting LB", description: "bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla"+"bla bla bla bla bla bla bla bla bla bla", image: welcomeIcons
        }
    ]

    return (
        <div className='rafting_founder_container'>
            {raftingFounder.map((welcome, index) => {
                return (
                    <div className='rafting_founder'>
                        <div className='rafting_founder_image'>
                            <img src={welcomeIcons} alt=" rafting_founder" />
                        </div>
                        <div className='rafting_founder_title_description'>
                            <h5>{welcome.title}</h5>
                            <p>{welcome.description}</p>
                        </div>
                    </div>
                )
            })}


        </div>
    )
}

export default raftingFounder