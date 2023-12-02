import axios from './customize-axios';

export const loginApi = (username, password) => {
    return axios.post("http://localhost:8080/login", {username : username,password : password});
}