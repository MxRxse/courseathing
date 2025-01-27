export const ADD_TO_CART = 'ADD_TO_CART';
export const REMOVE_FROM_CART = 'REMOVE_FROM_CART';
export const INCREASE_QUANTITY = 'INCREASE_QUANTITY';
export const DECREASE_QUANTITY = 'DECREASE_QUANTITY';

export const addToCart = (plant) => ({
    type: ADD_TO_CART,
    payload: plant,
});

export const removeFromCart = (plant) => ({
    type: REMOVE_FROM_CART,
    payload: plant,
});

export const increaseQuantity = (plant) => ({
    type: INCREASE_QUANTITY,
    payload: plant,
});

export const decreaseQuantity = (plant) => ({
    type: DECREASE_QUANTITY,
    payload: plant,
});
