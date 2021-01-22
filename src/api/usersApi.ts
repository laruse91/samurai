import {instance, TGetItems, TResponse} from './api'

export const usersAPI = {
    requestUsers(currentPage: number, numberOfUsersOnPage: number, term: string = '', friend: null | boolean = null) {
        return instance.get<TGetItems>(`users?page=${currentPage}&count=${numberOfUsersOnPage}&term=${term}` + (friend === null ? '' : `&friend=${friend}`))
            .then(response => response.data)
    },
    follow(userId: number) {
        return instance.post<TResponse>(`follow/${userId}`)
            .then(response => response.data)
    },
    unfollow(userId: number) {
        return instance.delete(`follow/${userId}`)
            .then(response => response.data) as Promise<TResponse>
    },
}