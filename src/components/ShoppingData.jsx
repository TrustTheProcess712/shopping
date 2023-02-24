import { useEffect, useState } from "react";
import { getShoppingData } from "../utils/api.js";

const ShoppingData = () => {
  const [shopping, setShopping] = useState([]);

  useEffect(() => {
    getShoppingData().then((items) => {
      setShopping(items);
    });
  }, []);

  return (
    <table>
      <thead>
        <tr>
          <th>ID</th>
          <th>Item Name</th>
          <th>Image</th>
          <th>Category</th>
          <th>Description</th>
          <th>Price</th>
          <th>Rating</th>
        </tr>
      </thead>
      <tbody>
        {shopping.map((item) => (
          <tr key={item.id}>
            <td>{item.id}</td>
            <td>{item.title}</td>
            <td>
              <img src={item.image} alt={item.title} width={100} />
            </td>
            <td>{item.category}</td>
            <td>{item.description}</td>
            <td>£{item.price}</td>
            <td>{item.rating}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default ShoppingData;
