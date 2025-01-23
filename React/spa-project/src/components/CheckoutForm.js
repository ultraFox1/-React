import React, { useState } from 'react';

const CheckoutForm = React.memo(() => {
    const [formData, setFormData] = useState({ name: '', address: '' });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Заказ отправлен:', formData);
    };

    return (
        <form onSubmit={handleSubmit}>
            <label>
                Имя:
                <input type="text" name="name" value={formData.name} onChange={handleChange} />
            </label>
            <label>
                Адрес:
                <input type="text" name="address" value={formData.address} onChange={handleChange} />
            </label>
            <button type="submit">Оформить заказ</button>
        </form>
    );
});

export default CheckoutForm;
