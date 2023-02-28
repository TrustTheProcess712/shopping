const ItemCard = ({ shopping }) => {
  return (
    <div className='item-card'>
      {shopping.map((item) => (
        <>
          <h3>{item.title}</h3>
          <img src={item.image} alt={item.title} width={100} />
          <p>{item.description}</p>
          <p>£{item.price}</p>
          <button type='submit'>Add to basket</button>
        </>
      ))}
    </div>
  );
};

export default ItemCard;
