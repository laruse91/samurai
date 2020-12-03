import {authAPI} from "../api/api";

const SET_AUTH_USER_DATA = 'SET-AUTH-USER-DATA';

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
export const authMe = () => (dispatch) => {
    authAPI.me()
        .then(data => {
            if (data.resultCode === 0) {
                const {id, login, email} = data.data
                dispatch(setAuthUserData(id, login, email, true))
            }
        })
}
export const login = (email,password,rememberMe) => (dispatch) => {
    authAPI.login(email,password,rememberMe)
        .then(data => {
            if (data.resultCode === 0) {
                dispatch(authMe())
            }
        })
}
export const logout = () => (dispatch) => {
    authAPI.logout()
        .then(data => {
            if (data.resultCode === 0) {
                dispatch(setAuthUserData(null, null, null, false))
            }
        })
}

export default authReducer;