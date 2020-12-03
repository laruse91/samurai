import {usersAPI} from "../api/api";

const SET_USERS_SB = 'SET-USERS-SB';
const SET_TOTAL_USERS_SB = 'SET-TOTAL-USERS-SB';
const TOGGLE_IS_FETCHING_SB = 'TOGGLE-IS-FETCHING-SB';

let initialState = {
    users: [],
    numberOfUsersAtSidebar: 10,
    totalUsers: 10,
    isFetching: true,
}

const sidebarReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_USERS_SB:
            return {
                ...state,
                users: action.users,
            }
        case SET_TOTAL_USERS_SB:
            return {
                ...state,
                totalUsers: action.totalUsers,
            }
        case TOGGLE_IS_FETCHING_SB:
            return {
                ...state,
                isFetching: action.isFetching,
            }
        default:
            return state;
    }
}

export const setTotalUsersSB = (totalUsers) => ({
    type: SET_TOTAL_USERS_SB,
    totalUsers
});
export const setUsersSB = (users) => ({
    type: SET_USERS_SB,
    users
});
export const toggleIsFetching = (isFetching) => ({
    type: TOGGLE_IS_FETCHING_SB,
    isFetching
});
// thunk
export const getUsersSB = (pageNumber, numberOfUsersAtSidebar) => {
    return (dispatch) => {
        dispatch(toggleIsFetching(true));
        usersAPI.getUsers(pageNumber, numberOfUsersAtSidebar)
            .then(data => {
                dispatch(setUsersSB(data.items));
                dispatch(setTotalUsersSB(data.totalCount));
                dispatch(toggleIsFetching(false));
            })
    }
}

export default sidebarReducer;