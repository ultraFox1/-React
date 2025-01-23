import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addToCart } from '../actions/shopActions';

const Products = () => {
    const products = useSelector((state) => state.shop.products);
    const dispatch = useDispatch();

    const handleAddToCart = (product) => {
        dispatch(addToCart(product));
    };

    return (
        <div className="products">
            <h1>Список товаров</h1>
            <div className="product-list">
                {products.map((product) => (
                    <div key={product.id} className="product-card">
                        <img src={product.image} alt={product.title} className="product-image"/>
                        <h3>{product.title}</h3>
                        <p>{product.price} ₽</p>
                        <button onClick={() => handleAddToCart(product)}>Добавить в корзину</button>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Products;
