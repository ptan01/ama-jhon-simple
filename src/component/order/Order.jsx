import React, { useState } from 'react';
import Card from '../Card/Card';
import { useLoaderData, useSearchParams } from 'react-router-dom';
import ReviewItem from '../reviewItem/ReviewItem';
import './Order.css'
import { removeFromDb } from '../../utilities/fakedb';

const Order = () => {
    const saveCard = useLoaderData()
    const [card , setCard] = useState(saveCard)

    const handleRemove = (id)=>{
        const remaining = card.filter(product => product.id !== id)
        setCard(remaining)
        removeFromDb(id)
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
            <Card card={card}></Card>
            </div>
        </div>
    );
};

export default Order;