import React, { useEffect, useState } from 'react';
import Bottle from '../Bottle/Bottle';

const Bottols = () => {
    const [bottles, setBottles] = useState([])

    useEffect(() =>{
        fetch('bottole.json')
        .then(res => res.json())
        .then(data => setBottles(data))
    },[])


    return (
        <div>
            <h3>Hello Bottles {bottles.length}</h3>
            {
                bottles.map((item) => <Bottle key={item.id} bottle={item}></Bottle>)
            }
        </div>
    );
};

export default Bottols;