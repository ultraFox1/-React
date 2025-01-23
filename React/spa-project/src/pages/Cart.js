import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { removeFromCart } from '../actions/shopActions';

const Cart = () => {
    const cart = useSelector((state) => state.shop.cart);
    const dispatch = useDispatch();

    // Состояние для формы
    const [formData, setFormData] = useState({
        name: '',
        address: '',
        phone: '',
    });

    const handleRemove = (productId) => {
        dispatch(removeFromCart(productId));
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (cart.length === 0) {
            alert('Корзина пуста. Добавьте товары для оформления заказа.');
            return;
        }
        console.log('Заказ отправлен:', { ...formData, cart });
        alert('Ваш заказ успешно оформлен!');
        // Очистить форму
        setFormData({
            name: '',
            address: '',
            phone: '',
        });
    };

    return (
        <div className="cart">
            <h1>Корзина</h1>
            {cart.length === 0 ? (
                <p>Корзина пуста</p>
            ) : (
                <ul>
                    {cart.map((item) => (
                        <li key={item.id}>
                            {item.title} - {item.price} ₽
                            <button onClick={() => handleRemove(item.id)}>Удалить</button>
                        </li>
                    ))}
                </ul>
            )}
            {/* Форма для заполнения адреса */}
            <h2>Оформление доставки</h2>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>
                        Имя:
                        <input
                            type="text"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            required
                        />
                    </label>
                </div>
                <div>
                    <label>
                        Адрес доставки:
                        <input
                            type="text"
                            name="address"
                            value={formData.address}
                            onChange={handleChange}
                            required
                        />
                    </label>
                </div>
                <div>
                    <label>
                        Телефон:
                        <input
                            type="tel"
                            name="phone"
                            value={formData.phone}
                            onChange={handleChange}
                            required
                        />
                    </label>
                </div>
                <button type="submit">Оформить заказ</button>
            </form>
        </div>
    );
};

export default Cart;
