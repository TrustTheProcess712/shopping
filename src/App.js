import "./index.css";
import { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { getShoppingData } from "./utils/api.js";
import LandingPage from "./components/LandingPage.jsx";
import ItemCard from "./components//ItemCard.jsx";
import NavBar from "./components//NavBar.jsx";

function App() {
  const [shopping, setShopping] = useState([]);

  useEffect(() => {
    getShoppingData().then((items) => {
      setShopping(items);
    });
  }, []);

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
