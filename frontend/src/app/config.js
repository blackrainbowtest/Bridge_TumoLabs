import axios from "axios";

const createAxiosInstance = (basePath) => {
    return axios.create({
        baseURL: `${process.env.REACT_APP_BASE_URL || 'http://localhost:4000/'}${basePath}`,
    });
};

export const projectsAxios = createAxiosInstance('projects/');
export const accountsAxios = createAxiosInstance('accounts/');