import "./index.css";
import { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { getShoppingData } from "./utils/api.js";
import ShoppingData from "./components/ShoppingData.jsx";
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
            <Route path='/' element={<ShoppingData items={shopping} />}></Route>
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
