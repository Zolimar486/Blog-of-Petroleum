import axios from 'axios'

export const publiRequest = axios.create({
    baseURL: "https://blog-api-56oh.onrender.com/api/"
})