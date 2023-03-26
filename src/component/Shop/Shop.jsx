import React, { useEffect, useState } from 'react';
import Product from '../Product/Product';
import './Shop.css'
const Shop = () => {
    const [products , setProducts] = useState([])
    const [card , setCard] = useState([])
    
    useEffect(()=>{
        fetch('products.json')
        .then(res => res.json())
        .then(data => setProducts(data))
    }, [])
    
    const addToCard = (product)=>{
       const newCard = [...card , product]
       setCard(newCard)
    }

    return (
        <div className='shop-container'>
            <div className='product-container'>
               {
                products.map(product => <Product key={product.id} addToCard={addToCard} product = {product}></Product>)
               }
            </div>
            <div className='card-container'>
                <h3>Order Samary</h3>
                <p>selected item :{card.length}</p>
            </div>
        </div>
    );
};

export default Shop;