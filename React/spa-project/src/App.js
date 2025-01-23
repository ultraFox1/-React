import React, { useEffect } from 'react';
import { Routes, Route, NavLink } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { fetchProducts } from './actions/shopActions';
import Products from './pages/Products';
import Cart from './pages/Cart';
import './styles.css';

const App = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchProducts());
    }, [dispatch]);

    return (
        <div className="app">
            <header>
                <NavLink to="/">Товары</NavLink>
                <NavLink to="/cart">Корзина</NavLink>
            </header>
            <Routes>
                <Route path="/" element={<Products />} />
                <Route path="/cart" element={<Cart />} />
            </Routes>
        </div>
    );
};

export default App;
