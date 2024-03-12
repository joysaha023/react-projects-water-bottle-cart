import Bottle from "../components/Bottle/Bottle";

const getStoredCart = () => {
    const storedCartString = localStorage.getItem('cart')
    if(storedCartString){
        return JSON.parse(storedCartString)
    }
    return [];
}

const saveCartToLs = cart => {
    const cartStringified = JSON.stringify(cart);
    localStorage.setItem('cart', cartStringified)
}


const addToLS = id => {
    const cart = getStoredCart();
    cart.push(id);

    saveCartToLs(cart);
    
}

export { addToLS, getStoredCart }