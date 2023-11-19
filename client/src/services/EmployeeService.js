// import axios from './customize-axios';
import axios from "axios";

export const fetchAllEmployee = (page) => {
    return axios.get(`/api/users?page=${page}`);
}

export const loginApi = (username, password) => {
    return axios.post("http://localhost:8080/login", {username : username,password : password});
}
