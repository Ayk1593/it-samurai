import * as axios from "axios";

const instance = axios.create({
    withCredentials: true,
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    headers: {
        "API-KEY": "b2173b6e-8e49-49d0-8d8d-0fee4b54b8ea"
    }
});



export const userAPI = {
    getUsers(currentPage = 1, pageSize = 10) {
        return instance.get(`users?page=${currentPage}&count=${pageSize}`)
            .then(response => {
                return response.data
            });
    },
    unfollow(id) {
        return instance.delete(`follow/${id}`)
            .then(response => {
                return response.data
            });
    },
    follow (id) {
        return instance.post(`follow/${id}`, {})
            .then(response => {
                return response.data
            });
    }
}

export const authAPI = {
    me() {
        return instance.get(`auth/me`)
            .then(response => {
                return response.data
            });
    }
}

export const profileAPI = {
    getProfile(userId) {
        return instance.get(`profile/${userId}`)
            .then(response => {
                return response.data
            });
    }
}