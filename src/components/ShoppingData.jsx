import { useEffect, useState } from "react";

const ShoppingData = ({ items }) => {
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
        {items.map((item) => (
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
