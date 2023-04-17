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
        fetch('products.json')
        .then(res => res.json())
        .then(data => setProducts(data))
    }, [])



    useEffect(()=>{
      const savedCard = [] ;
        const storedCard = getShoppingCart()
        for( const id in storedCard){
          const addedProduct = products.find(product => product.id === id)
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
        const exists = card.find(pd => pd.id === product.id)
        if(!exists){
            product.quantity = 1 ;
            newCard = [...card, product]
        }
        else{
            exists.quantity = exists.quantity + 1 ;
            const remainingCard = card.filter(pd => pd.id !== product.id)
            newCard = [...remainingCard, exists]
        }
        
        setCard(newCard)

       addToDb(product.id)
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
                products.map(product => <Product key={product.id} addToCard={addToCard} product = {product}></Product>)
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