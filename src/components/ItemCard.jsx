const ItemCard = ({ shopping }) => {
  return (
    // <div className='grid-container'>
    <>
      {shopping.map((item) => (
        <div className='item-card' key={item.id}>
          <h3>{item.title}</h3>
          <p>{item.description}</p>
          <img src={item.image} alt={item.title} width={100} />
          <p>£{item.price}</p>
          <button type='submit'>Add to basket</button>
        </div>
      ))}
      {/* // </div> */}
    </>
  );
};

export default ItemCard;
