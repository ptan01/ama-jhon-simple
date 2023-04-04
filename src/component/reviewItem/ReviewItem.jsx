import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrashAlt } from '@fortawesome/free-solid-svg-icons'
import './ReviewItem.css'

const ReviewItem = ({product,handleRemove}) => {
    const {img , id , name ,price, quantity} = product
    return (
        <div className='item-container'>
            <img src={img} alt="" />
            <div className='review-details'>
                <p className='product-title'>{name.substring(0,20)}..</p>
                <p>Price: <span className='text-orange'>${price}</span></p>
                <p>Order Quantity: <span className='text-orange'>{quantity}</span></p>
            </div>
            <button onClick={()=>handleRemove(id)} className='delete-btn'>
                <FontAwesomeIcon className='delete-icon' icon={faTrashAlt}></FontAwesomeIcon>
            </button>
        </div>
    );
};

export default ReviewItem;