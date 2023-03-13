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
  const [search, setSearch] = useState({
    query: "",
    list: [],
  });
  const [basket, setBasket] = useState(() => {
    const storedBasket = localStorage.getItem("basket");
    return storedBasket ? JSON.parse(storedBasket) : [];
  });

  useEffect(() => {
    localStorage.setItem("basket", JSON.stringify(basket));
  }, [basket]);

  useEffect(() => {
    getShoppingData().then((items) => {
      setShopping(items);
      setOriginalShopping(items);
    });
  }, []);

  useEffect(() => {
    setShopping(search.list);
  }, [search.list]);

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  const handleChange = (e) => {
    const inputValue = e.target.value;
    if (inputValue === "") {
      setSearch({
        query: "",
        list: originalShopping,
      });
    } else {
      const results = originalShopping.filter((item) => {
        return (
          item.title.toLowerCase().includes(inputValue.toLowerCase()) ||
          item.category.toLowerCase().includes(inputValue.toLowerCase())
        );
      });
      setSearch({
        query: inputValue,
        list: results,
      });
    }
  };

  const updatedBasket = (newItem) => {
    setBasket((prevBasket) => [...prevBasket, newItem]);
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
            <Route path='/basket' element={<Basket basket={basket} />}></Route>
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
