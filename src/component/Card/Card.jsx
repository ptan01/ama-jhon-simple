import React from 'react';
import "./Card.css"

const Card = (props) => {
    const {card} = props;
   
    let total = 0;
    let totalShipping = 0
    for(const pd of card){
       total = total + pd.price
       totalShipping = totalShipping + pd.shipping
    }

    let tax = total*7/100 ;
    let grandTotal = total + totalShipping + tax;


    return (
        <div className='card'>
            <h3>Order Samary</h3>
            <p>selected item :{card.length}</p>
            <p>Total Price:{total}</p>
            <p>Shipping Charge:{totalShipping}</p>
            <p>Tax:{tax}</p>
            <h6>Grand Total:{grandTotal.toFixed(2)} </h6>
        </div>
    );
};

export default Card;