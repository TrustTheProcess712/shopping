import axios from "axios";
const instance = axios.create({ baseURL: "http://localhost:7070" });

export const getShoppingData = async () => {
  const shoppingData = await instance.get("/api/data").then((res) => {
    return res.data;
  });
  return shoppingData;
};
