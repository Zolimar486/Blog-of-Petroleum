import axios from 'axios'

export const publiRequest = axios.create({
    baseURL: "https://blog-of-petroleum.onrender.com/api/"
})