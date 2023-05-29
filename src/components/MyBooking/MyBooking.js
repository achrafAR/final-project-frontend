import React from 'react'
import MainComp from '../mainComponent/MainComp'
import './myBooking.css'

function MyBooking() {
return (
    <div className='myBooking'>
        <div className='myBooking_mainComp'>
        <MainComp title="My Booking" text='Please scroll down to confirm your order' backgroundName='MyBooking_hero' />
        </div>
        <div className='myBooking_title'>
            <h5>Verify and Confirm</h5>
        </div>

    </div>
)
}

export default MyBooking