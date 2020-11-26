import * as axios from "axios";

const instance = axios.create({
    withCredentials: true,
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    headers: {
        "API-KEY": "828695a8-e9eb-4b87-ad31-8cf15be098e7"
    }
})
export const usersAPI = {
    getUsers(currentPage, numberOfUsersOnPage) {
        return instance.get(`users?page=${currentPage}&count=${numberOfUsersOnPage}`)
            .then(response => response.data)
    },
    authUser() {
        return instance.get(`auth/me`)
            .then(response => response.data)
    },
    getUserProfile(userId) {
        return instance.get(`profile/${userId}`)
            .then(response => response.data);
    },
    follow(userId) {
        return instance.post(`follow/${userId}`)
            .then(response => response.data);
    },
    unfollow(userId) {
        return instance.delete(`follow/${userId}`)
            .then(response => response.data);
    },
}
