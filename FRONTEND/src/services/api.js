import axios from "axios";

const API = axios.create({
  baseURL: "https://ecommerce-2-lwp8.onrender.com//api",
});

export const getHomepage = async () => {
  const response = await API.get("/home");
  return response.data;
};