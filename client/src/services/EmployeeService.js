import axios from './customize-axios';
// import axios from "axios";

export const fetchAllEmployee = (page) => {
    return axios.get("http://localhost:8080/admin/all_employee");
}

export const addEmployee = (ob) => {
    return axios.post("http://localhost:8080/admin/employee", ob);
}

export const deleteAnEmployee = (id) => {
    return axios.delete(`http://localhost:8080/admin/employee?id=${id}`);
}

export const fetchAnEmployee = (id) => {
    return axios.get(`http://localhost:8080/admin/employee?id=${id}`); 
}

export const updateAnEmployee = (ob) => {
    return axios.put(`http://localhost:8080/admin/employee?id=${ob.id}`, ob);
}
