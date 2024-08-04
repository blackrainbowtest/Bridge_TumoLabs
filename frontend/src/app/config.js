import axios from "axios";
import dotenv from "dotenv";

dotenv.config();

export const Axios = axios.create({
    baseURL: process.env.BASE_URL || 'http://localhost:4000'
});