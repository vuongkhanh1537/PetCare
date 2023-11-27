import axios from './customize-axios';
// import axios from "axios";

export const fetchAllEmployee = (page) => {
    return axios.get("/admin/all_employee");
}

export const loginApi = (username, password) => {
    return axios.post("/login", {username : username,password : password});
}

export const addEmployee = (ob) => {
    return axios.post("/admin/add_emp", ob);
}

export const deleteAnEmployee = (id) => {
    return axios.delete(`/admin/employee?id=${id}`);
}

export const fetchAnEmployee = (id) => {
    return axios.get(`/admin/employee?id=${id}`); 
}

export const updateAnEmployee = (ob) => {
    return axios.put(`/admin/employee?id=${ob.id}`, ob);
}
