// import axios from './customize-axios';
import axios from "axios";

export const fetchAllProduct = () => {
  return axios.get("http://localhost:8080/api/products");
};

export const addProduct = (ob) => {
  return axios.post("http://localhost:8080/api/products", ob);
};

export const deleteAnProduct = (id) => {
  return axios.delete(`http://localhost:8080/api/products/${id}`);
};

export const fetchAnProduct = (id) => {
  return axios.get(`http://localhost:8080/api/products/${id}`);
};

export const updateAnProduct = (ob) => {
  return axios.put(`http://localhost:8080/api/products/${ob.productId}`, ob);
};

export const fetchAllProviders = () => {
  return axios.get("http://localhost:8080/api/products/providers");
};

export const fetchAllPetType = () => {
  return axios.get("http://localhost:8080/api/products/pet-type");
};

export const fetchAllCategories = () => {
  return axios.get("http://localhost:8080/api/products/category");
};
