// needs to display items added from landing page
// add to basket button in item card will need to display mesg saying item added
// could use flexbox or grid to display them horizontally, cards will need to be smaller here
// will need to be pushed into a new array and stored in state
// will need a delete button diplayed and functionality

// can then build up functionality adding totals of items and deleting
// use TDD as practice for this

const Basket = ({ basket, setBasket }) => {
  return (
    <div className='basketContainer'>
      <h3>Your Basket!</h3>
      {basket.map((basket) => (
        <div className='basketCard' key={basket.id}>
          <h3>{basket.title}</h3>
          <p>{basket.description}</p>
          <img src={basket.image} alt={basket.title} width={100} />
          <p>£{basket.price}</p>
        </div>
      ))}
    </div>
  );
};

export default Basket;
