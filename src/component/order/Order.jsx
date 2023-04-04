import React, { useState } from 'react';
import Card from '../Card/Card';
import { useLoaderData, useNavigate, useSearchParams } from 'react-router-dom';
import ReviewItem from '../reviewItem/ReviewItem';
import './Order.css'
import { deleteShoppingCart, removeFromDb } from '../../utilities/fakedb';

const Order = () => {
    const saveCard = useLoaderData()
    const [card , setCard] = useState(saveCard)
    const navigate = useNavigate()

    const handleRemove = (id)=>{
        const remaining = card.filter(product => product.id !== id)
        setCard(remaining)
        removeFromDb(id)
    }

    const handleClearCart = ()=>{
        setCard([])
        deleteShoppingCart()
    }

    const goProceedPage = ()=>{
        navigate('/proceed')
    }

    return (
        <div className='shop-container'>
            <div className='review-container'>
                {
                   card.map(product => <ReviewItem
                    key={product.id}
                    handleRemove={handleRemove}
                    product={product}
                    ></ReviewItem>)
                }
            </div>
            <div className='card-container'>
            <Card handleClearCart={handleClearCart} card={card}>
                <button onClick={goProceedPage} className='btn-review'>Proceed Checkout</button>
            </Card>
            </div>
        </div>
    );
};

export default Order;