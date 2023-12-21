import axios from './customize-axios';

export const register = (username, password) => {
    return axios.post("http://localhost:8080/register", {username: username, password: password});
}

export const loginApi = (username, password) => {
    return axios.post("http://localhost:8080/login", {username : username,password : password});
}