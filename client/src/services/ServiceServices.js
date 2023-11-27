import axios from './customize-axios';
// import axios from "axios";

export const fetchAllService = (page) => {
    return axios.get("/admin/all_Service");
}

export const loginApi = (username, password) => {
    return axios.post("/login", {username : username,password : password});
}

export const addService = (ob) => {
    return axios.post("/admin/add_emp", ob);
}

export const deleteAnService = (id) => {
    return axios.delete(`/admin/Service?id=${id}`);
}

export const fetchAnService = (id) => {
    return axios.get(`/admin/Service?id=${id}`); 
}

export const updateAnService = (ob) => {
    return axios.put(`/admin/Service?id=${ob.id}`, ob);
}