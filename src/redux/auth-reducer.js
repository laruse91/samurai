const SET_AUTH_USER_DATA = 'SET-AUTH-USER-DATA';

let initialState = {
    userId: null,
    login: null,
    email: null,
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
export const setAuthUserData = (userId, login, email) => ({
    type: SET_AUTH_USER_DATA,
    data: {userId, login, email}
});

export default authReducer;