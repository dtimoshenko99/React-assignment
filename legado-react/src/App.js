
import './App.css';
import { useState } from 'react';
import Drinks from './drinks';
import Cart from './cart';


function App() {
    //state for changing the views
    const [page, displayPage] = useState('drinks');
    //state for the shopping cart
    const [cart, addCart] = useState([]);


    const addItem = (drink) => {
        addCart([...cart, { ...drink }]);
    }


    const changePage = (newPage) => {
        displayPage(newPage);
    }

    const removeItem = (removeDrink) => {
        addCart(cart.filter(drink => drink !== removeDrink));
    }


    return (
        <div className="App">
            {page === 'drinks' && <Drinks changePage={changePage} addItem={addItem} cart={cart} />}

            {page === 'cart' && <Cart changePage={changePage} removeItem={removeItem} cart={cart} />}
        </div>

    );
}

export default App;