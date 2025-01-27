import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { increaseQuantity, decreaseQuantity, removeFromCart } from '../redux/actions';
import { Link } from 'react-router-dom';

const ShoppingCartPage = () => {
    const dispatch = useDispatch();
    const cart = useSelector(state => state.cart);

    const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
    const totalPrice = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

    const handleIncrease = (plant) => {
        dispatch(increaseQuantity(plant));
    };

    const handleDecrease = (plant) => {
        dispatch(decreaseQuantity(plant));
    };

    const handleRemove = (plant) => {
        dispatch(removeFromCart(plant));
    };

    return (
        <div>
            <h2>Shopping Cart</h2>
            <p>Total Items: {totalItems}</p>
            <p>Total Cost: ${totalPrice}</p>
            {cart.map(plant => (
                <div key={plant.id}>
                    <img src={plant.img} alt={plant.name} width="100" />
                    <p>{plant.name} - ${plant.price}</p>
                    <p>Quantity: {plant.quantity}</p>
                    <button onClick={() => handleIncrease(plant)}>Increase</button>
                    <button onClick={() => handleDecrease(plant)}>Decrease</button>
                    <button onClick={() => handleRemove(plant)}>Remove</button>
                </div>
            ))}
            <button onClick={() => alert('Coming Soon')}>Checkout</button>
            <Link to="/products"><button>Continue Shopping</button></Link>
        </div>
    );
};

export default ShoppingCartPage;
