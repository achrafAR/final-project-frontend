import React from 'react'
import MainComp from '../mainComponent/MainComp'
import './myBooking.css'
import Header from '../Header/Header'
import Footer from '../Footer/Footer.jsx'

function MyBooking() {
    return (
        <div className='myBooking'>
            <div className='myBooking_mainComp'>
                <MainComp title="My Booking" text='Please scroll down to confirm your order' backgroundName='MyBooking_hero' />
            </div>
            <div className='myBooking_title'>
                <h5>Verify and Confirm</h5>
            </div>
            <div className="container_order">
                <div className="left-side">
                    <div className="product-details">
                            <div className="order-page_orderleft">
                                    <div className="items">
                                        <p className="order-page__product-name">
                                            Rafting
                                        </p>
                                        <p className="order-page__product-price">
                                            People:10
                                        </p>
                                        <p className="order-page__product-price">
                                            Price:10
                                        </p>
                                        <p className="order-page__product-price">
                                            Total Price:40
                                        </p>
                                        <button>Remove</button>

                                    </div>
                            </div>
                    </div>
                </div>

                <div className="right-side">
                    <div className="order-info">
                        <span className="order-info_title">Order Details</span>
                        <hr className="line-right" />
                        <div className="form-group">
                            <div className="phn">
                                <label className="radio">Phone number :</label>{' '}
                                <input
                                    type="text"
                                    placeholder="Enter phone number"
                                    
                                    className="form-control"
                                />
                            </div>
                            <div className="adrs">
                                <label className="radio">Date :</label>{' '}
                                <input
                                    type="date"
                                    placeholder="Enter shipping address"

                                    className="form-control"
                                />
                            </div>
                        </div>
                        <hr className="line" />
                        <div className="payment ">
                            <span>Payment 50% on OMT</span>
                        </div>
                        <div className="order-page__bill">
                            {/* <p>Total: {calculateTotal()}&nbsp; $</p> */}
                        </div>
                        <hr className="line" />
                        <div className="btn_dev">
                            <button className="confirm-button">
                                Confirm Order
                            </button>
                            <button
                                className="cancel-button"
                            >
                                Cancel Order
                            </button>
                            </div>
                            </div>
                            </div>
                            </div>
                            <Footer />
                        </div>
                        )
}

                        export default MyBooking