import axios from "axios";
import {TUser} from "../types/types";

export const instance = axios.create({
    withCredentials: true,
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    headers: {
        "API-KEY": "452f03fa-c17c-49a8-a8a0-108d6767e331"
    }
})

// enum for resultCodes
export enum ResultCode {
    Success,
    Error,
}
export enum CaptchaResCode {
    CaptchaIsRequired = 10,
}
//type for getting users
export type TGetItems = {
    items: Array<TUser>
    totalCount: number
    error: string | null
}
//type of main response from API
export type TResponse<D = {}, RC = ResultCode> = {
    data: D
    resultCode: RC
    messages: Array<string>
}