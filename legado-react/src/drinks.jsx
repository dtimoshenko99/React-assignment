import React, { useState } from 'react';
import margarita from './images/margarita.jpg';
import long from './images/long.jpg';
import pina from './images/pina.jpg';
import mai from './images/mai.jpg';
import mojito from './images/mojito.jpg';
import cali from './images/cali.jpg';

export default function Drinks({ changePage, cart, addItem }) {

    const [drinks] = useState([
        {
            name: 'Margarita',
            price: 10.10,
            image: margarita,
        },
        {
            name: 'Long Island',
            price: 20.10,
            image: long,
        },
        {
            name: 'Californication',
            price: 49.20,
            image: cali,
        },
        {
            name: 'Mai Tai',
            price: 20.40,
            image: mai,
        },
        {
            name: 'Mojito',
            price: 15.50,
            image: mojito,
        },
        {
            name: 'Pina Colada',
            price: 40.40,
            image: pina,
        }
    ]);

    return (
        <>
            <button onClick={() => changePage('cart')}>Cart ({cart.length})</button>
            <h1>Menu</h1>
            <div className="drinks">
                {drinks.map((drink, id) => (
                    <div className="drink" key={id}>
                        <h2>{drink.name}</h2>
                        <img className="drinksImage" src={drink.image} alt={drink.name} />
                        <h3>£{drink.price.toFixed(2)}</h3>
                        <button onClick={() => addItem(drink)}>Add item</button>
                    </div>
                ))}
            </div>
        </>
    )
}