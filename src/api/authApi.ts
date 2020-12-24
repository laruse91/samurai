import {instance, CaptchaResCode, TResponse, ResultCode} from "./api";

type TMeResponse = {
    id: number
    email: string
    login: string
}
type TLoginResponse = { userId: number }

export const authAPI = {
    me() {
        return instance.get<TResponse<TMeResponse>>(`auth/me`).then(response => response.data)
    },
    login(email: string, password: string, rememberMe = false, captcha: string | null = null) {
        return instance.post<TResponse<TLoginResponse, CaptchaResCode | ResultCode>>(`auth/login`, {
            email,
            password,
            rememberMe,
            captcha
        })
            .then(response => response.data)
    },
    logout() {
        return instance.delete(`auth/login`)
            .then(response => response.data)
    }
};