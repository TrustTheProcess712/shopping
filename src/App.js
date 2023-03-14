import "./index.css";
import { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { getShoppingData } from "./utils/api.js";
import LandingPage from "./components/LandingPage.jsx";
import Basket from "./components/Basket.jsx";
import ItemCard from "./components//ItemCard.jsx";
import NavBar from "./components//NavBar.jsx";

function App() {
  const [shopping, setShopping] = useState([]);
  const [originalShopping, setOriginalShopping] = useState([]);
  //originalShoppingstate is created to handle rendering issues with too many updates to state if I only used the shopping state for the APP
  const [search, setSearch] = useState({
    query: "",
    list: [],
    // query and list are bundled into an object in state here to improve performance/rendering
  });
  const [basket, setBasket] = useState(() => {
    const storedBasket = localStorage.getItem("basket");
    return storedBasket ? JSON.parse(storedBasket) : [];
    // I create basket state to store items when selected on the landing page, localstorage is used to retreive data when its been selected so that the basket array isnt reset to empty if the page is refreshed
  });

  useEffect(() => {
    localStorage.setItem("basket", JSON.stringify(basket));
    // use effect used to only update local storage when basket changes
  }, [basket]);

  useEffect(() => {
    getShoppingData().then((items) => {
      setShopping(items);
      setOriginalShopping(items);
    });
    // I fetch the shopping data here upon starting the APP using a function from my utils folder, setShopping and originalShopping are initialised with the data
  }, []);

  useEffect(() => {
    setShopping(search.list);
    // useEffect used here so that setShopping is only updated when the search list changes
  }, [search.list]);

  const handleSubmit = (e) => {
    e.preventDefault();
    //this prevents the default behaviour of a re render when button is form is submitted
  };

  const handleChange = (e) => {
    const inputValue = e.target.value;
    if (inputValue === "") {
      setSearch({
        query: "",
        list: originalShopping,
        // here I'm checking if we have an empty string, if so we want the list to be auto set as the originalShopping data so we are always displaying the shopping data
      });
    } else {
      const results = originalShopping.filter((item) => {
        // I filter over said data with the checks required using the inputValue and originalShoppingstate
        return (
          item.title.toLowerCase().includes(inputValue.toLowerCase()) ||
          item.category.toLowerCase().includes(inputValue.toLowerCase())
        );
      });
      setSearch({
        query: inputValue,
        list: results,
        // finally when the list changes the setShopping state on lin 39 will be updated
      });
    }
  };

  const updatedBasket = (newItem) => {
    setBasket((prevBasket) => [...prevBasket, newItem]);
    // here I create a function that takes a new item as an argument, the prevBasket is an array of items added to the basket. This function is passed down to the itemCard component to handle when items are added
  };

  return (
    <BrowserRouter>
      <div className='App'>
        <NavBar header='Go Shopping' />
        <div className='content'>
          <Routes>
            <Route
              path='/'
              element={
                <LandingPage>
                  <div className='search-container'>
                    <form onSubmit={handleSubmit}>
                      <input
                        type='search'
                        placeholder='Type here...'
                        value={search.query}
                        onChange={handleChange}
                      />
                    </form>
                  </div>
                  <ItemCard shopping={shopping} updatedBasket={updatedBasket} />
                </LandingPage>
              }></Route>
            <Route
              path='/basket'
              element={
                <Basket basket={basket} setBasket={setBasket} />
              }></Route>
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
