import React from 'react'
import './popupReview.css'
import { AiOutlineClose } from "react-icons/ai";


const PopupReview = (props) => {
  return props.trigger ? (
    <div className='popupReview'>
      <div className='popup-inner'>
        <div
          onClick={() => props.setTrigger(!props.trigger)}
          className='close-popup-icon'
        >
        <AiOutlineClose />
        </div>
        {props.children}
      </div>
    </div>
  ) : (
    ""
  );
}

export default PopupReview