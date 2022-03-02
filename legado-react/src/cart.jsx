import React from "react";

export default function Cart({ changePage, removeItem, cart }) {

    var total = 0;
    var i;
    if (cart.lenght !== 0) {
        for (i = 0; i < cart.length; i++) {
            total += cart[i]['price'];
        }
    }

    return (
        <>
            <button onClick={() => changePage('drinks')}>Drinks</button>
            <h2>Total: £{total.toFixed(2)}</h2>
            <div className="drinks">
                {cart.map((drink, id) => (
                    <div className="cart-items" key={id}>
                        <h2>{drink.name}</h2>
                        <h3>£{drink.price.toFixed(2)}</h3>
                        <img className="drinksImage" src={drink.image} alt={drink.name} />
                        <button onClick={() => removeItem(drink)}>Remove</button>
                    </div>
                ))}
            </div>
        </>
    )
}