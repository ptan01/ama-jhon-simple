import React, { useEffect, useState } from 'react';
import { addToDb, deleteShoppingCart, getShoppingCart } from '../../utilities/fakedb';
import Card from '../Card/Card';
import Product from '../Product/Product';
import './Shop.css'
import { useNavigate } from 'react-router-dom';
const Shop = () => {

    const [products , setProducts] = useState([])
    const [card , setCard] = useState([])
    const navigate = useNavigate()
    useEffect(()=>{
        fetch('http://localhost:5000/products')
        .then(res => res.json())
        .then(data => setProducts(data))
    }, [])



    useEffect(()=>{
      const savedCard = [] ;
        const storedCard = getShoppingCart()
        for( const id in storedCard){
          const addedProduct = products.find(product => product._id === id)
          const quantity = storedCard[id]
            if(addedProduct){
                addedProduct.quantity = quantity
                savedCard.push(addedProduct)
            }
        }
        setCard(savedCard)
    },[products])
    


    const addToCard = (product)=>{
        let newCard = [] ;
        const exists = card.find(pd => pd._id === product._id)
        if(!exists){
            product.quantity = 1 ;
            newCard = [...card, product]
        }
        else{
            exists.quantity = exists.quantity + 1 ;
            const remainingCard = card.filter(pd => pd._id !== product._id)
            newCard = [...remainingCard, exists]
        }
        
        setCard(newCard)

       addToDb(product._id)
    }
    
    const handleClearCart =()=>{
        setCard([])
        deleteShoppingCart()
    }
  
    const goReviewPage = ()=>{
        navigate('/order')
    }

    return (
        <div className='shop-container'>
            <div className='product-container'>
               {
                products.map(product => <Product key={product._id} addToCard={addToCard} product = {product}></Product>)
               }
            </div>
            <div className='card-container'>
               
               <Card handleClearCart={handleClearCart} card={card}>
                <button onClick={goReviewPage} className='btn-review' >Review Order</button>
               </Card>
            </div>
        </div>
    );
};

export default Shop;