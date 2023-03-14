// needs to display items added from landing page
// add to basket button in item card will need to display msg saying item added
// could use flexbox or grid to display them horizontally, cards will need to be smaller here
// will need to be pushed into a new array and stored in state
// will need a delete button diplayed and functionality

// can then build up functionality adding totals of items and deleting
// use TDD as practice for this

const Basket = ({ basket, setBasket }) => {
  const handleDelete = (index) => {
    setBasket((prevBasket) => {
      const newBasket = [...prevBasket];
      newBasket.splice(index, 1);
      return newBasket;
    });
  };
  return (
    <>
      <h3>My basket ({basket.length} items)</h3>
      {basket.length === 0 ? (
        <h3>Your basket is empty!</h3>
      ) : (
        <div className='basketContainer'>
          {basket.map((items, index) => (
            <div className='basketCard' key={items.id - index}>
              <img
                src={items.image}
                alt={items.title}
                height={100}
                width={100}
              />
              <h3>{items.title}</h3>
              <p>£{items.price}</p>
              <button type='button' onClick={() => handleDelete(index)}>
                Delete
              </button>
            </div>
          ))}
        </div>
      )}
    </>
  );
};

export default Basket;
