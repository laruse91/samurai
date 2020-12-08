import {authAPI} from "../api/api";
import {stopSubmit} from "redux-form";

const SET_AUTH_USER_DATA = 'auth/SET-AUTH-USER-DATA';

let initialState = {
    userId: null,
    login: null,
    email: null,
    userPhoto: null,
    isAuth: false,
    isFetching: true,
}

const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_AUTH_USER_DATA:
            return {
                ...state,
                ...action.data
            }

        default:
            return state;
    }
}

// ActionCreators
export const setAuthUserData = (userId, login, email, isAuth) => ({
    type: SET_AUTH_USER_DATA,
    data: {userId, login, email, isAuth}
});
// Thunks
export const authMe = () => async (dispatch) => {
    const response = await authAPI.me()
    if (response.resultCode === 0) {
        const {id, login, email} = response.data
        dispatch(setAuthUserData(id, login, email, true))
    }
}
export const login = (email, password, rememberMe) => async (dispatch) => {
    const response = await authAPI.login(email, password, rememberMe)
    if (response.resultCode === 0) {
        dispatch(authMe())
    } else {
        const message = response.messages.length > 0 ? response.messages[0] : "Unknown error, please try again later";
        dispatch(stopSubmit("login", {_error: message}))
    }
}
export const logout = () => async (dispatch) => {
    const response = await authAPI.logout()
    if (response.resultCode === 0) {
        dispatch(setAuthUserData(null, null, null, false))
    }
}

export default authReducer;