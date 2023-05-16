import { getShoppingCart } from "../utilities/fakedb";

const cartProductsLoders = async ()=>{

    const storedCard = getShoppingCart()
    const ids = Object.keys(storedCard)
    console.log(ids)

    const responce = await fetch('http://localhost:5000/products-by-ids',{
        method: "POST",
        headers: {
            'content-type': 'application/json'
        },
        body: JSON.stringify(ids)
    });
    const products = await responce.json();

    const savedCard = []

    
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