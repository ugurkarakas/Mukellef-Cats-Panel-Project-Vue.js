import axios from "axios";
export const appAxios = axios.create({
    baseURL : "http://localhost:3000"
});

export const catAxios = axios.create({
    baseURL : "https://api.thecatapi.com/v1/images/search"
});