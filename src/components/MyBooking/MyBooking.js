import React, { useState, useEffect } from "react";
import MainComp from "../mainComponent/MainComp";
import "./myBooking.css";
import Footer from "../Footer/Footer.jsx";
import axios from "axios";
import { useParams, useNavigate } from "react-router-dom";

function MyBooking() {
  const [myBooking, setMyBooking] = useState([]);
  const navigate = useNavigate();

  const { userId } = useParams();

  useEffect(() => {
    const userInfo = JSON.parse(localStorage.getItem("userInfo"));
    if (!userInfo) {
      navigate("/login");
    }
    if (userId) {
      const getMyBooking = async () => {
        try {
          const response = await axios.get(
            `https://raftinglb.onrender.com/myBooking/${userId}`
          );
          setMyBooking(response.data);
        } catch (err) {
          console.log(err);
        }
      };
      getMyBooking();
      // navigate(`/booking/${userId}`);
    }
  }, [userId]);

  const [newOrder, setNewOrder] = useState({
    name: "",
    phoneNumber: "",
    date: "",
  });

  const handleConfirmOrder = async () => {
    if (!newOrder.name || !newOrder.phoneNumber || !newOrder.date) {
      const confirmation = window.confirm("please Fill in all the fields");
      if (!confirmation) {
        return;
      }
    }

    const order = {
      userId,
      totalAmount: myBooking[0].finalPrice,
      name: newOrder.name,
      phoneNumber: newOrder.phoneNumber,
      date: newOrder.date,
      offers: myBooking.flatMap((booking) =>
        booking.offers.map((offer) => ({
          offerName: offer.offerName,
          quantity: offer.quantity,
          total_price: offer.total_price,
        }))
      ),
    };

    const config = {
      headers: { "content-type": "application/json" },
    };
    console.log(order);
    try {
      const response = await axios.post(
        "https://raftinglb.onrender.com/orders",
        order,
        config
      );
      console.log("Order created:", response.data);

      await axios.delete(
        `https://raftinglb.onrender.com/myBooking/user/${userId}`
      );
      console.log("Cart deleted");
      window.alert("order created successfully");

      document.querySelector('input[name="name"]').value = "";
      document.querySelector('input[name="phoneNumber"]').value = "";
      document.querySelector('input[name="date"]').value = "";
      setNewOrder({ name: "", phoneNumber: "", date: "" });
    } catch (error) {
      console.log("Error creating order:", error);
    }
  };

  return (
    <div className="myBooking">
      <div className="myBooking_mainComp">
        <MainComp
          title="My Booking"
          text="Please scroll down to confirm your order"
          backgroundName="MyBooking_hero"
        />
      </div>
      <div className="myBooking_title">
        <h5>Verify and Confirm</h5>
      </div>
      <div className="container_order">
        <div className="left-side">
          <div className="product-details">
            <div className="order-page_orderleft">
              {Array.isArray(myBooking) &&
                myBooking.map((myBooking, index) => {
                  return myBooking.offers.map((offer, offerIndex) => (
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
                  ));
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
                <label className="radio">Full Name :</label>{" "}
                <input
                  type="text"
                  placeholder="Enter Your Name"
                  name="name"
                  className="form-control"
                  onChange={(e) =>
                    setNewOrder({ ...newOrder, name: e.target.value })
                  }
                />
              </div>
              <div className="adrs">
                <label className="radio">Phone Number :</label>{" "}
                <input
                  type="text"
                  placeholder="Phone Number"
                  name="phoneNumber"
                  className="form-control"
                  onChange={(e) =>
                    setNewOrder({ ...newOrder, phoneNumber: e.target.value })
                  }
                />
              </div>
              <div className="adrs">
                <label className="radio">Date :</label>{" "}
                <input
                  type="date"
                  placeholder="Enter Date "
                  name="date"
                  className="form-control"
                  onChange={(e) =>
                    setNewOrder({ ...newOrder, date: e.target.value })
                  }
                />
              </div>
            </div>
            <hr className="line" />
            <div className="payment">
  {myBooking.length > 0 && (
    <span>Final Price: ${myBooking[0].finalPrice}</span>
  )}
</div>
            
            
            <div className="payment ">
              <span>
                    Payment 50% on OMT
              </span>
            </div>
            <div className="order-page__bill">
              {/* <p>Total: {calculateTotal()}&nbsp; $</p> */}
            </div>
            <hr className="line" />
            <div className="btn_dev">
              <button className="confirm-button" onClick={handleConfirmOrder}>
                Confirm Order
              </button>
              <button className="cancel-button">Cancel Order</button>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default MyBooking;
