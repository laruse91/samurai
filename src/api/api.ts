import axios from "axios";
import {TProfile} from "../redux/types/types";

const instance = axios.create({
    withCredentials: true,
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    headers: {
        "API-KEY": "452f03fa-c17c-49a8-a8a0-108d6767e331"
    }
})
export const usersAPI = {
    requestUsers(currentPage: number, numberOfUsersOnPage: number) {
        return instance.get(`users?page=${currentPage}&count=${numberOfUsersOnPage}`)
            .then(response => response.data)
    },
    follow(userId: number) {
        return instance.post(`follow/${userId}`)
            .then(response => response.data);
    },
    unfollow(userId: number) {
        return instance.delete(`follow/${userId}`)
            .then(response => response.data);
    },
};

export enum ResultCode {
    Success,
    Error,
}

export enum CaptchaResCode {
    CaptchaIsRequired = 10,
}

type TMeResponse = {
    data: {
        id: number
        email: string
        login: string
    }
    resultCode: ResultCode
    messages: Array<string>
}
type TLoginResponse = {
    data: {
        userId: number
    }
    resultCode: ResultCode | CaptchaResCode
    messages: Array<string>
}
type TLogoutResponse = {
    data: {}
    resultCode: ResultCode
    messages: Array<string>
}

export const authAPI = {
    me() {
        return instance.get<TMeResponse>(`auth/me`).then(response => response.data)
    },
    login(email: string, password: string, rememberMe = false, captcha: string | null = null) {
        return instance.post<TLoginResponse>(`auth/login`, {email, password, rememberMe, captcha})
            .then(response => response.data)
    },
    logout() {
        return instance.delete<TLogoutResponse>(`auth/login`)
            .then(response => response.data)
    }
};
export const securityAPI = {
    getCaptcha() {
        return instance.get<{ url: string }>(`security/get-captcha-url`)
            .then(response => response.data)
    },

};

type TUpdateStatus = {
    data: {}
    resultCode: ResultCode
    messages: Array<string>
}
type TSavePhoto = {
    data: any
    resultCode: ResultCode
    messages: Array<string>
}
type TSaveProfile = {
    data: {}
    resultCode: ResultCode
    messages: Array<string>
}

export const profileAPI = {
    getProfile(userId: number) {
        return instance.get<TProfile>(`profile/${userId}`)
            .then(response => response.data);
    },
    getStatus(userId: number) {
        return instance.get<string>(`profile/status/${userId}`)
            .then(response => response.data);
    },
    updateStatus(status: string) {
        return instance.put<TUpdateStatus>(`profile/status`, {status: status})
            .then(response => response.data);
    },
    savePhoto(photo: any) {
        const formData = new FormData();
        formData.append("image", photo)
        return instance.put<TSavePhoto>(`profile/photo`, formData, {
            headers: {
                'Content-Type': 'multipart/form-data'
            }
        })
            .then(response => response.data);
    },
    saveProfile(profile: TProfile) {
        return instance.put<TSaveProfile>(`profile`, profile)
            .then(response => response.data);
    },
}