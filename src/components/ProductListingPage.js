import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addToCart } from '../redux/actions';

const plants = [
    { id: 1, name: 'Fern', price: 10, category: 'Indoor', img: 'path/to/fern.jpg' },
    { id: 2, name: 'Succulent', price: 15, category: 'Indoor', img: 'path/to/succulent.jpg' },
    { id: 3, name: 'Bamboo', price: 20, category: 'Indoor', img: 'path/to/bamboo.jpg' },
    { id: 4, name: 'Rose', price: 25, category: 'Outdoor', img: 'path/to/rose.jpg' },
    { id: 5, name: 'Tulip', price: 18, category: 'Outdoor', img: 'path/to/tulip.jpg' },
    { id: 6, name: 'Lily', price: 22, category: 'Outdoor', img: 'path/to/lily.jpg' },
];

const ProductListingPage = () => {
    const dispatch = useDispatch();
    const cart = useSelector(state => state.cart);

    const handleAddToCart = (plant) => {
        dispatch(addToCart(plant));
    };

    const isInCart = (plant) => {
        return cart.some(item => item.id === plant.id);
    };

    return (
        <div>
            <h2>Available Plants</h2>
            {['Indoor', 'Outdoor'].map(category => (
                <div key={category}>
                    <h3>{category}</h3>
                    {plants.filter(plant => plant.category === category).map(plant => (
                        <div key={plant.id}>
                            <img src={plant.img} alt={plant.name} width="100" />
                            <p>{plant.name} - ${plant.price}</p>
                            <button
                                onClick={() => handleAddToCart(plant)}
                                disabled={isInCart(plant)}
                            >
                                {isInCart(plant) ? 'Added' : 'Add to Cart'}
                            </button>
                        </div>
                    ))}
                </div>
            ))}
        </div>
    );
};

export default ProductListingPage;
