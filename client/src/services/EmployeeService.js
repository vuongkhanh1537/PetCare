import axios from './customize-axios';

export const fetchAllEmployee = (page) => {
    return axios.get(`/api/users?page=${page}`);
}

export const loginApi = (userName, password) => {
    return axios.post("/api/login", {email : userName,password : password});
}