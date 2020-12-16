import {authAPI, securityAPI} from "../api/api";
import {stopSubmit} from "redux-form";

const SET_AUTH_USER_DATA = 'auth/SET-AUTH-USER-DATA';
const SET_CAPTCHA_URL = 'auth/SET-CAPTCHA-URL';

let initialState = {
    userId: null as number | null,
    login: null as string | null,
    email: null as string | null,
    userPhoto: null as string | null,
    isAuth: false,
    captchaURL: null as string | null
}

export type TInitialState = typeof initialState

    const authReducer = (state = initialState, action: any): TInitialState => {
    switch (action.type) {
        case SET_AUTH_USER_DATA:
        case SET_CAPTCHA_URL:
            return {
                ...state,
                ...action.payload
            }

        default:
            return state;
    }
}

// ActionCreators
type SetAuthUserDataPayloadType = {
    userId: number | null
    login: string | null
    email: string | null
    isAuth: boolean | null
}
type SetAuthUserDataActionType = {
    type: typeof SET_AUTH_USER_DATA,
    payload: SetAuthUserDataPayloadType
}
const setAuthUserData = (userId: number | null, login: string | null, email: string | null, isAuth: boolean): SetAuthUserDataActionType => ({
    type: SET_AUTH_USER_DATA,
    payload: {userId, login, email, isAuth}
});

type setCaptchaURLActionType = {
    type: typeof SET_CAPTCHA_URL,
    payload: { captchaURL: string | null }
}
const setCaptchaURL = (captchaURL: string | null): setCaptchaURLActionType => ({
    type: SET_CAPTCHA_URL,
    payload: {captchaURL}
});

// Thunks
export const authMe = () => async (dispatch: any) => {
    const response = await authAPI.me()
    if (response.resultCode === 0) {
        const {id, login, email} = response.data
        dispatch(setAuthUserData(id, login, email, true))
    }
}
export const login = (email: string, password: string, rememberMe: boolean, captcha: string) => async (dispatch: any) => {
    const response = await authAPI.login(email, password, rememberMe, captcha)
    if (response.resultCode === 0) {
        dispatch(authMe());
        dispatch(setCaptchaURL( null));

    } else if (response.resultCode === 10) {
        dispatch(getCaptcha())
    } else {
        const message = response.messages.length > 0 ? response.messages[0] : "Unknown error, please try again later";
        dispatch(stopSubmit("login", {_error: message}))
    }
}
export const logout = () => async (dispatch: any) => {
    const response = await authAPI.logout()
    if (response.resultCode === 0) {
        dispatch(setAuthUserData(null, null, null, false))
    }
}
export const getCaptcha = () => async (dispatch: any) => {
    const response = await securityAPI.getCaptcha()
    dispatch(setCaptchaURL(response.url))
}

export default authReducer;