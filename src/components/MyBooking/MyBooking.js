import React, { useState, useEffect } from 'react'
import MainComp from '../mainComponent/MainComp'
import './myBooking.css'
import Footer from '../Footer/Footer.jsx'
import axios from 'axios'
import { useParams, useNavigate } from 'react-router-dom'

function MyBooking() {


    const [myBooking, setMyBooking] = useState([])
    const navigate = useNavigate();

    const { userId } = useParams();




    useEffect(() => {
            const userInfo = JSON.parse(localStorage.getItem("userInfo"));
            if (!userInfo) {
            navigate("/login");
            }
        if(userId){

        const getMyBooking = async () => {
            try {
                console.log('hello')
                const response = await axios.get(`http://localhost:5000/myBooking/${userId}`)
                setMyBooking(response.data);
                console.log(myBooking)
            }
            catch (err) {
                console.log(err)
            }
        };
        getMyBooking();
        // navigate(`/booking/${userId}`);

    }
    }, [userId]);










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
                            {myBooking && myBooking.map((myBooking, index) => {
                                return myBooking.offers.map ((offer, offerIndex) => (
                                    <div className="items" key={index}>
                                        <p className="order-page__product-name">
                                            {offer.offerName}
                                        </p>
                                        <p className="order-page__product-price">
                                            People:{offer.quantity}
                                        </p>
                                        <p className="order-page__product-price">
                                            Price:{offer.price}
                                        </p>
                                        <p className="order-page__product-price">
                                            Total Price:{offer.total_price}
                                        </p>
                                        <button>Remove</button>

                                    </div>
                                ))
                            })}

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