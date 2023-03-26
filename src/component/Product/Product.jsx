import React from 'react';
import './Product.css'

const Product = (props) => {
    const {name,img ,price , ratings, seller} = props.product

    const addToCard = props.addToCard

    return (
        <div className='product'>
            <img  src={img} alt="" />
            <div className='product-info'>
            <h6>{name.length > 25 ? name.slice(0,20)+'...' : name}</h6>
            <sub>Price:{price}</sub>
            <p>Manufacturer: {seller}</p>
            <p>Rating :{ratings}star</p>
            </div>
            <button onClick={()=>addToCard(props.product)} className='btn'>Add to Card</button>
        </div>
    );
};

export default Product;