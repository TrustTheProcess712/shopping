import "./index.css";
import { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { getShoppingData } from "./utils/api.js";
import LandingPage from "./components/LandingPage.jsx";
import ItemCard from "./components//ItemCard.jsx";
import NavBar from "./components//NavBar.jsx";

function App() {
  const [shopping, setShopping] = useState([]);
  const [query, setQuery] = useState("");
  const [filter, setFilter] = useState({
    query: "",
    list: [],
  });
  useEffect(() => {
    getShoppingData().then((items) => {
      setShopping(items);
    });
  }, []);

  const handleChange = (e) => {
    const results = shopping.filter((item) => {
      if (e.target.value === "") return shopping;
      return item.title.toLowerCase().includes(e.target.value.toLowerCase());
    });
    setFilter({
      query: e.target.value,
      list: results,
    });
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
                    <form>
                      <input
                        type='search'
                        placeholder='Type here...'
                        value={query}
                        onChange={handleChange}
                      />
                    </form>
                  </div>
                  <ItemCard shopping={shopping} />
                </LandingPage>
              }></Route>
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
