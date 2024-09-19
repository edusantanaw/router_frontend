import axios from "axios"

const BASE_URL = import.meta.env.BASE_URL

console.log(BASE_URL)

export default axios.create({
    baseURL: BASE_URL
})