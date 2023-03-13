import { useState, useEffect } from "react";

const ItemCard = ({ shopping }) => {
  const [basket, setBasket] = useState(() => {
    const storedBasket = localStorage.getItem("basket");
    return storedBasket ? JSON.parse(storedBasket) : [];
  });

  useEffect(() => {
    localStorage.setItem("basket", JSON.stringify(basket));
  }, [basket]);

  const handleClick = (title, description, image, price) => {
    const newItem = { title, description, image, price };
    setBasket((prevBasket) => [...prevBasket, newItem]);
  };

  return (
    <div className='grid-container'>
      {shopping.map((item) => (
        <div className='item-card' key={item.id}>
          <h3>{item.title}</h3>
          <p>{item.description}</p>
          <img src={item.image} alt={item.title} width={100} />
          <p>£{item.price}</p>
          <button
            type='button'
            onClick={() =>
              handleClick(item.title, item.description, item.image, item.price)
            }>
            Add to basket
          </button>
        </div>
      ))}
    </div>
  );
};

export default ItemCard;
