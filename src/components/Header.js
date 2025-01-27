import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

const Header = () => {
    const cart = useSelector(state => state.cart);
    const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);

    return (
        <header>
            <h1>My Plant Store</h1>
            <nav>
                <Link to="/">Home</Link>
                <Link to="/cart">Shopping Cart</Link>
            </nav>
            <div>Cart: {totalItems} items</div>
        </header>
    );
};

export default Header;
