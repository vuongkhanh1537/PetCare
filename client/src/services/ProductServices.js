import axios from './customize-axios';
// import axios from "axios";

export const fetchAllProduct = (page) => {
    return axios.get("/admin/all_Product");
}

export const loginApi = (username, password) => {
    return axios.post("/login", {username : username,password : password});
}

export const addProduct = (ob) => {
    return axios.post("/admin/add_emp", ob);
}

export const deleteAnProduct = (id) => {
    return axios.delete(`/admin/Product?id=${id}`);
}

export const fetchAnProduct = (id) => {
    return axios.get(`/admin/Product?id=${id}`); 
}

export const updateAnProduct = (ob) => {
    return axios.put(`/admin/Product?id=${ob.id}`, ob);
}