import React, { useEffect, useState } from 'react';
import { addToDb, deleteShoppingCart, getShoppingCart } from '../../utilities/fakedb';
import Card from '../Card/Card';
import Product from '../Product/Product';
import './Shop.css'
import { useLoaderData, useNavigate } from 'react-router-dom';
const Shop = () => {

    const [products, setProducts] = useState([])
    const [card, setCard] = useState([])
    const [currentPage, setCurrentPage] = useState(0)
    const [productPerPage, setProductsPerPage] = useState(10)
    const navigate = useNavigate()

    const { totalProducts } = useLoaderData()
    const totalPage = Math.ceil(totalProducts / productPerPage)

    const pageNumber = [...Array(totalPage).keys()]
    console.log(pageNumber)


    useEffect(() => {
        fetch(`http://localhost:5000/products?page=${currentPage}&limit=${productPerPage}`)
            .then(res => res.json())
            .then(data => setProducts(data))
    }, [currentPage, productPerPage])



    useEffect(() => {
        const savedCard = [];
        const storedCard = getShoppingCart()

        const ids = Object.keys(storedCard)

        fetch('http://localhost:5000/products-by-ids', {
            method: "POST",
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(ids)
        })
            .then(res => res.json())
            .then(cartProducts => {
                
                for (const id in storedCard) {
                    const addedProduct = cartProducts.find(product => product._id === id)
                    const quantity = storedCard[id]
                    if (addedProduct) {
                        addedProduct.quantity = quantity
                        savedCard.push(addedProduct)
                    }
                }
                setCard(savedCard)
            })



    }, [products])



    const addToCard = (product) => {
        let newCard = [];
        const exists = card.find(pd => pd._id === product._id)
        if (!exists) {
            product.quantity = 1;
            newCard = [...card, product]
        }
        else {
            exists.quantity = exists.quantity + 1;
            const remainingCard = card.filter(pd => pd._id !== product._id)
            newCard = [...remainingCard, exists]
        }

        setCard(newCard)

        addToDb(product._id)
    }

    const handleClearCart = () => {
        setCard([])
        deleteShoppingCart()
    }

    const goReviewPage = () => {
        navigate('/order')
    }


    const options = [5, 10, 20]

    const handleSelectChange = (event) => {
        setProductsPerPage(event.target.value)
        setCurrentPage(0)
        console.log(event.target.value)

    }

    return (
        <>
            <div className='shop-container'>
                <div className='product-container'>
                    {
                        products.map(product => <Product key={product._id} addToCard={addToCard} product={product}></Product>)
                    }
                </div>
                <div className='card-container'>

                    <Card handleClearCart={handleClearCart} card={card}>
                        <button onClick={goReviewPage} className='btn-review' >Review Order</button>
                    </Card>
                </div>
            </div>
            <div className='pagination'>
                <p>Current page is {currentPage}</p>
                {
                    pageNumber.map(number => <button
                        style={{ marginLeft: "10px" }}
                        key={number}
                        className={currentPage === number ? "selected" : ""}
                        onClick={() => setCurrentPage(number)}
                    >{number}</button>)
                }
                <select value={productPerPage} onChange={handleSelectChange}>
                    {
                        options.map(option => (
                            <option key={option} value={option} on>
                                {option}
                            </option>
                        ))
                    }
                </select>
            </div>
        </>
    );
};

export default Shop;