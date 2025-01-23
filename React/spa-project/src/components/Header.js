import React, { useEffect, useCallback, useMemo } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchItems, selectItem } from '../actions/dataActions';
import './styles.css';

// Оптимизация отдельной карточки товара
const ProductCard = React.memo(({ item, onSelect }) => {
  console.log(`Rendering: ${item.name}`);
  return (
    <div className="product-card" onClick={() => onSelect(item)}>
      <img className="product-image" src={item.imageUrl} alt={item.name} />
      <h3 className="product-name">{item.name}</h3>
      <p className="product-description">{item.description}</p>
      <button className="select-button">Select</button>
    </div>
  );
});

const ItemsList = () => {
  const dispatch = useDispatch();
  const items = useSelector((state) => state.data.items);

  // Загружаем данные при монтировании компонента
  useEffect(() => {
    dispatch(fetchItems());
  }, [dispatch]);

  // Запоминаем обработчик выбора товара
  const handleSelectItem = useCallback(
    (item) => {
      dispatch(selectItem(item));
    },
    [dispatch]
  );

  // Мемоизируем отрендеренные товары
  const renderedItems = useMemo(
    () =>
      items.map((item) => (
        <ProductCard key={item.id} item={item} onSelect={handleSelectItem} />
      )),
    [items, handleSelectItem]
  );

  return (
    <div className="items-list">
      <h2>Products</h2>
      <div className="products-container">{renderedItems}</div>
    </div>
  );
};

export default ItemsList;