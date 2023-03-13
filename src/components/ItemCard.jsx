import { useState } from "react";

const ItemCard = ({ shopping, updatedBasket }) => {
  const handleClick = (title, description, image, price, id) => {
    const newItem = { title, description, image, price, id };
    updatedBasket(newItem);
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
              handleClick(
                item.title,
                item.description,
                item.image,
                item.price,
                item.id
              )
            }>
            Add to basket
          </button>
        </div>
      ))}
    </div>
  );
};

export default ItemCard;
