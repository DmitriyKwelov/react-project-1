import axios from "axios";

const  instance = axios.create({
    withCredentials: true,
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    headers: {
        "API-KEY": "9e99f7f8-5f7e-497e-8ecc-4d89bf9a1098"
    }
})
export const userAPI = {
    getUsers (currentPage = 1, pageSize = 10) {
        return instance.get(`https://social-network.samuraijs.com/api/1.0/users?page=${currentPage}&count=${pageSize}`)
            .then(response => response.data)
    }
}