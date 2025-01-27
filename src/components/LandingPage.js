import React from 'react';
import { Link } from 'react-router-dom';

const LandingPage = () => {
    return (
        <div style={{ backgroundImage: 'url(/path/to/background.jpg)', padding: '20px' }}>
            <h2>Welcome to My Plant Store</h2>
            <p>Your go-to place for beautiful houseplants.</p>
            <Link to="/products"><button>Get Started</button></Link>
        </div>
    );
};

export default LandingPage;
