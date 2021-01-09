import {CaptchaResCode, ResultCode} from '../api/api'
import {FormAction, stopSubmit} from 'redux-form'
import {TCombineActions, TGlobalState} from './redux-store'
import {ThunkAction} from 'redux-thunk'
import {authAPI} from '../api/authApi'
import {securityAPI} from '../api/securityApi'

const SET_AUTH_USER_DATA = 'auth/SET-AUTH-USER-DATA'
const SET_CAPTCHA_URL = 'auth/SET-CAPTCHA-URL'

let initialState = {
    userId: null as number | null,
    login: null as string | null,
    email: null as string | null,
    userPhoto: null as string | null,
    isAuth: false,
    captchaURL: null as string | null
}

export type TInitialState = typeof initialState

const authReducer = (state = initialState, action: TActions): TInitialState => {
    switch (action.type) {
        case SET_AUTH_USER_DATA:
        case SET_CAPTCHA_URL:
            return {
                ...state,
                ...action.payload
            }

        default:
            return state
    }
}
// ActionCreators
type TActions = TCombineActions<typeof actions>

const actions = {
    setAuthUserData: (userId: number | null, login: string | null, email: string | null, isAuth: boolean) => ({
        type: SET_AUTH_USER_DATA,
        payload: {userId, login, email, isAuth}
    } as const),

    setCaptchaURL: (captchaURL: string | null) => ({
        type: SET_CAPTCHA_URL,
        payload: {captchaURL}
    } as const)
}


// Thunks
type TThunk = ThunkAction<Promise<void>, () => TGlobalState, unknown, TActions | FormAction>

export const authMe = (): TThunk => async (dispatch) => {
    const response = await authAPI.me()
    if (response.resultCode === ResultCode.Success) {
        const {id, login, email} = response.data
        dispatch(actions.setAuthUserData(id, login, email, true))
    }
}
export const login = (email: string, password: string, rememberMe: boolean, captcha: string): TThunk => async (dispatch) => {
    const response = await authAPI.login(email, password, rememberMe, captcha)
    if (response.resultCode === ResultCode.Success) {
        dispatch(authMe())
        dispatch(actions.setCaptchaURL(null))

    } else if (response.resultCode === CaptchaResCode.CaptchaIsRequired) {
        dispatch(getCaptcha())
    } else {
        const message = response.messages.length > 0 ? response.messages[0] : 'Unknown error, please try again' +
            ' later'
        dispatch(stopSubmit('login', {_error: message}))
    }
}
export const logout = (): TThunk => async (dispatch) => {
    const response = await authAPI.logout()
    if (response.resultCode === ResultCode.Success) {
        dispatch(actions.setAuthUserData(null, null, null, false))
    }
}
export const getCaptcha = (): TThunk => async (dispatch) => {
    const response = await securityAPI.getCaptcha()
    dispatch(actions.setCaptchaURL(response.url))
}

export default authReducer