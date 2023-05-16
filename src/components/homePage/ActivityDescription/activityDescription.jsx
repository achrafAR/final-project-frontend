import React from 'react';
import activity from '../../../images/activity.jpeg';
import template from '../../../icons/template.svg'
import './activityDescription.css';


function activityDescription() {
    const activityDescription = [
        {
            id: 1,
            title: 'RAFTING',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec sed erat sed nibh ultrices ultrices sed sed sapien. Vestibulum ante ipsum primis',
            image: activity,
        },
        {
            id: 1,
            title: 'RAFTING',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec sed erat sed nibh ultrices ultrices sed sed sapien. Vestibulum ante ipsum primis',
            image: activity,
        }, {
            id: 1,
            title: 'RAFTING',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec sed erat sed nibh ultrices ultrices sed sed sapien. Vestibulum ante ipsum primis',
            image: activity,
        },
        {
            id: 1,
            title: 'RAFTING',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec sed erat sed nibh ultrices ultrices sed sed sapien. Vestibulum ante ipsum primis',
            image: activity,
        }
    ]
    return (
        <>
            <div className='static_title'><h5>AND MORE</h5></div>
            <div className='template_backgroung_activity_description'>
                <div className='activity_description_container'>
                    {activityDescription.map((activityDescription) => {
                        return (
                            <div className='activity_description'>
                                <div className='activity_description_description'>
                                    <p>{activityDescription.description}</p>
                                </div>
                                <div className='line'>______________</div>

                                <div className='imageAndTitle'>
                                    <div className='activity_description_image'>
                                        <img src={activityDescription.image} alt='activity' />
                                    </div>

                                    <div className='activity_description_title'>
                                        <h4>{activityDescription.title}</h4>
                                    </div>
                                </div>

                            </div>
                        )
                    })}


                </div>
            </div>
        </>


    );
}

export default activityDescription;