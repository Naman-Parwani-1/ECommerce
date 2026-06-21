import axios from "axios";

const API = axios.create({
  baseURL: "https://backend-1-wqv7.onrender.com/api",
});

export const getHomepage = async () => {
  const response = await API.get("/home");
  return response.data;
};