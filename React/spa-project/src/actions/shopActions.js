import axios from 'axios';

export const setProducts = (products) => ({
    type: 'SET_PRODUCTS',
    payload: products,
});

export const addToCart = (product) => ({
    type: 'ADD_TO_CART',
    payload: product,
});

export const removeFromCart = (productId) => ({
    type: 'REMOVE_FROM_CART',
    payload: productId,
});

export const fetchProducts = () => async (dispatch) => {
    try {
        const response = await axios.get('https://fakestoreapi.com/products');
        dispatch(setProducts(response.data));
    } catch (error) {
        console.error('Ошибка загрузки товаров:', error);
    }
};
