import React, { useEffect, useState } from 'react';
import { addToDb, getShoppingCart } from '../../utilities/fakedb';
import Card from '../Card/Card';
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


    
    useEffect(()=>{
        const storedCard = getShoppingCart()
        console.log(storedCard)
    },[])
    


    const addToCard = (product)=>{
       const newCard = [...card , product]
       setCard(newCard)
       addToDb(product.id)
    }
    
  


    return (
        <div className='shop-container'>
            <div className='product-container'>
               {
                products.map(product => <Product key={product.id} addToCard={addToCard} product = {product}></Product>)
               }
            </div>
            <div className='card-container'>
               
               <Card card={card}></Card>
            </div>
        </div>
    );
};

export default Shop;