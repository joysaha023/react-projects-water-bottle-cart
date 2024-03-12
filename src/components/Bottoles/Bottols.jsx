import React, { useEffect, useState } from 'react';
import Bottle from '../Bottle/Bottle';
import './Bottols.css'
import { addToLS, getStoredCart } from '../../utilities/localstorage';
import Cart from '../../cart/Cart';

const Bottols = () => {
    const [bottles, setBottles] = useState([])
    const [cart, setCart] = useState([])

    useEffect(() =>{
        fetch('bottole.json')
        .then(res => res.json())
        .then(data => setBottles(data))
    },[]);

    useEffect(()=>{
        if(bottles.length){
            const storedCart = getStoredCart();
            // console.log(storedCart, bottles)
            const saveCart = [];
            for(const id of storedCart){
                console.log(id);
                const bottle = bottles.find(bottle => bottle.id === id);
                if(bottle){
                    saveCart.push(bottle)
                }
            }
            console.log('saved cart', saveCart)
            setCart(saveCart)


        }
    }, [bottles])

    const handleClickBottle = bottle => {
        const newCart = [...cart, bottle]
        setCart(newCart)
        addToLS(bottle.id)
    }


    return (
        <div>
            <h3>Hello Bottles {bottles.length}</h3>
            <Cart cart={cart}></Cart>
            <div className='bottoles-container'>
            {
                bottles.map((item) => <Bottle key={item.id} handleClickBottle={handleClickBottle}  bottle={item}></Bottle>)
            }
            </div>
        </div>
    );
};

export default Bottols;