import axios from './customize-axios';

export const fetchAllOrder = () => {
    return axios.get("http://localhost:8080/order");
}

export const addOrder = (id, data) => {
    return axios.post(`http://localhost:8080/order/${id}`, data);
}