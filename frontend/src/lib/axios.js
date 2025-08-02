import axios from "axios";


// axiosInstance or api
//In production, ther is nothing called localhost, so we have to make this  dynamic
const BASE_URL = import.meta.env.MODE ===   "development" ? "http://localhost:5002/api" : "/api"

const api = axios.create({
// baseURL: "http://localhost:5002/api" // for development
    baseURL: BASE_URL, // Render will give us any name so we won't have localhost soo we'll make it dynamic 
});

export default api;