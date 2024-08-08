import axios from "axios";

export const Axios = axios.create({
    baseURL: process.env.REACT_APP_BASE_URL || 'http://localhost:4000'
});