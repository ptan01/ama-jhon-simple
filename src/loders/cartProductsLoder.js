import { getShoppingCart } from "../utilities/fakedb";

const cartProductsLoders = async ()=>{
    const responce = await fetch('http://localhost:5000/products');
    const products = await responce.json();

    const savedCard = []

    const storedCard = getShoppingCart()
    for(const id in storedCard){
        const addedProduct = products.find(pd => pd._id === id);
        const quantity = storedCard[id]
        if(addedProduct){
            addedProduct.quantity = quantity
            savedCard.push(addedProduct)
        }
    }


    return savedCard
}

export {cartProductsLoders}