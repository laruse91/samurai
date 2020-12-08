import {usersAPI} from "../api/api";

const FOLLOW = 'people/FOLLOW';
const UNFOLLOW = 'people/UNFOLLOW';
const SET_USERS = 'people/SET-USERS';
const SET_CURRENT_PAGE = 'people/SET-CURRENT-PAGE';
const TOGGLE_IS_FETCHING = 'people/TOGGLE-IS-FETCHING';
const SET_TOTAL_USERS = 'people/SET-TOTAL-USERS';
const TOGGLE_IS_FOLLOWING = 'people/TOGGLE-IS-FOLLOWING';
const ADD_USERS = 'people/ADD-USERS';

let initialState = {
    users: [],
    currentPage: 1,
    totalUsers: 6,
    numberOfUsersOnPage: 6,
    isFetching: true,
    followingInProgress: [],
}

const peopleReducer = (state = initialState, action) => {
    switch (action.type) {
        case FOLLOW:
            return {
                ...state,
                users: state.users.map(user => {
                    if (user.id === action.userId) {
                        return {...user, followed: true}
                    }
                    return user;
                })
            };
        case UNFOLLOW:
            return {
                ...state,
                users: state.users.map(user => {
                    if (user.id === action.userId) {
                        return {...user, followed: false}
                    }
                    return user;
                })
            };
        case SET_USERS:
            return {
                ...state,
                users: action.users
            }

        case ADD_USERS:
            return {
                ...state,
                users: [...state.users, ...action.users]
                // users: action.users
            }

        case SET_CURRENT_PAGE:
            return {
                ...state,
                currentPage: action.PageNumber,
            }
        case TOGGLE_IS_FETCHING:
            return {
                ...state,
                isFetching: action.isFetching,
            }
        case SET_TOTAL_USERS:
            return {
                ...state,
                totalUsers: action.totalUsersNum,
            }
        case TOGGLE_IS_FOLLOWING:
            return {
                ...state,
                followingInProgress: action.inProgress
                    ? [...state.followingInProgress, action.userId]
                    : state.followingInProgress.filter(id => id !== action.userId)

            }
        default:
            return state;
    }
}

// ActionCreators
export const followSuccess = (userId) => ({
    type: FOLLOW,
    userId
})
export const unfollowSuccess = (userId) => ({
    type: UNFOLLOW,
    userId
})
export const setUsers = (users) => ({
    type: SET_USERS,
    users
})
export const addUsers = (users) => ({
    type: ADD_USERS,
    users
})

export const setCurrentPage = (PageNumber) => ({
    type: SET_CURRENT_PAGE,
    PageNumber
})
export const toggleIsFetching = (isFetching) => ({
    type: TOGGLE_IS_FETCHING,
    isFetching
})
export const setTotalUsers = (totalUsersNum) => ({
    type: SET_TOTAL_USERS,
    totalUsersNum
})
export const toggleIsFollowing = (inProgress, userId) => ({
    type: TOGGLE_IS_FOLLOWING,
    inProgress, userId,
})

// thunks
export const requestUsers = (pageNumber, numberOfUsersOnPage, requestType) => async (dispatch) => {
    dispatch(toggleIsFetching(true));
    const response = await usersAPI.requestUsers(pageNumber, numberOfUsersOnPage);
    dispatch(setTotalUsers(response.totalCount));
    requestType === "SET" && dispatch(setUsers(response.items));
    requestType === "ADD" && dispatch(addUsers(response.items));
    dispatch(toggleIsFetching(false));
}
export const follow = (userId) => async (dispatch) => {
    dispatch(toggleIsFollowing(true, userId));
    const response = await usersAPI.follow(userId);
    if (response.resultCode === 0) {
        dispatch(followSuccess(userId));
    }
    dispatch(toggleIsFollowing(false, userId));
}
export const unfollow = (userId) => async (dispatch) => {
    dispatch(toggleIsFollowing(true, userId));
    const response = await usersAPI.unfollow(userId);
    if (response.resultCode === 0) {
        dispatch(unfollowSuccess(userId));
    }
    dispatch(toggleIsFollowing(false, userId));
}



export default peopleReducer;