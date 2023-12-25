import axios from './customize-axios';
// import axios from "axios";

export const fetchAllService = () => {
    return axios.get("http://localhost:8080/api/services");
}

export const addService = (ob) => {
    return axios.post("http://localhost:8080/api/services", ob);
}

export const fetchAnService = (id) => {
    return axios.get(`http://localhost:8080/api/services/${id}`); 
}
export const deleteAnService = (id) => {
    return axios.delete(`http://localhost:8080/api/services/${id}`);
}

export const updateAnService = (ob) => {
    return axios.put(`http://localhost:8080/api/services/${ob.id}`, ob);
}