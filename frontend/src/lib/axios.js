import axios from "axios";


// axiosInstance or api

const api = axios.create({
    baseURL:"http://localhost:5002/api",
});

export default api;