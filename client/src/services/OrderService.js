import axios from './customize-axios';

export const fetchAllOrder = () => {
    return axios.get("http://localhost:8080/order");
}

export const fetchAnOrder = (id) => {
    return axios.get(`http://localhost:8080/order/info?id=${id}`);
}

export const addOrder = (id, status, data) => {
    return axios.post(`http://localhost:8080/order/${id}?status=${status}`, data);
}

export const updateOrder = (id, status, data) => {
    return axios.put(`http://localhost:8080/order?status=${status}&orderId=${id}`, data);
}