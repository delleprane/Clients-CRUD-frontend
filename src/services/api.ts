import axios from 'axios'

export const api = axios.create({
    baseURL: "https://clients-crud-backend.onrender.com"
})

