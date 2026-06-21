import axios from "axios";

const API = axios.create({
  baseURL: "https://ecommerce-backend.onrender.com/api",
});

export const getHomepage = async () => {
  const response = await API.get("/home");
  return response.data;
};