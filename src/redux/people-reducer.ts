import {usersAPI} from "../api/api";
import {TUser} from "./types/types";
import {TGlobalState} from "./redux-store";
import {ThunkAction} from "redux-thunk";

const FOLLOW = 'people/FOLLOW';
const UNFOLLOW = 'people/UNFOLLOW';
const SET_USERS = 'people/SET-USERS';
const SET_CURRENT_PAGE = 'people/SET-CURRENT-PAGE';
const TOGGLE_IS_FETCHING = 'people/TOGGLE-IS-FETCHING';
const SET_TOTAL_USERS = 'people/SET-TOTAL-USERS';
const TOGGLE_IS_FOLLOWING = 'people/TOGGLE-IS-FOLLOWING';
const ADD_USERS = 'people/ADD-USERS';

let initialState = {
    users: [] as Array<TUser>,
    currentPage: 1,
    totalUsers: 0,
    numberOfUsersOnPage: 6,
    isFetching: true,
    followingInProgress: [] as Array<number>, // Array of User's Ids
}
type InitialStateType = typeof initialState

const peopleReducer = (state = initialState, action: TActions): InitialStateType => {
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

type TActions = TFollowSuccess
    | TUnfollowSuccess
    | TSetUsers
    | TAddUsers
    | TSetCurrentPage
    | TToggleIsFetching
    | TSetTotalUsers
    | TToggleIsFollowing

// ActionCreators
type TFollowSuccess = {
    type: typeof FOLLOW
    userId: number
}
export const followSuccess = (userId: number): TFollowSuccess => ({
    type: FOLLOW,
    userId
})

type TUnfollowSuccess = {
    type: typeof UNFOLLOW
    userId: number
}
export const unfollowSuccess = (userId: number): TUnfollowSuccess => ({
    type: UNFOLLOW,
    userId
})

type TSetUsers = {
    type: typeof SET_USERS
    users: Array<TUser>
}
export const setUsers = (users: Array<TUser>): TSetUsers => ({
    type: SET_USERS,
    users
})

type TAddUsers = {
    type: typeof ADD_USERS
    users: Array<TUser>
}
export const addUsers = (users: Array<TUser>): TAddUsers => ({
    type: ADD_USERS,
    users
})

type TSetCurrentPage = {
    type: typeof SET_CURRENT_PAGE
    PageNumber: number
}
export const setCurrentPage = (PageNumber: number): TSetCurrentPage => ({
    type: SET_CURRENT_PAGE,
    PageNumber
})

type TToggleIsFetching = {
    type: typeof TOGGLE_IS_FETCHING
    isFetching: boolean
}
export const toggleIsFetching = (isFetching: boolean): TToggleIsFetching => ({
    type: TOGGLE_IS_FETCHING,
    isFetching
})

type TSetTotalUsers = {
    type: typeof SET_TOTAL_USERS
    totalUsersNum: number
}
const setTotalUsers = (totalUsersNum: number): TSetTotalUsers => ({
    type: SET_TOTAL_USERS,
    totalUsersNum
})

type TToggleIsFollowing = {
    type: typeof TOGGLE_IS_FOLLOWING
    inProgress: boolean
    userId: number

}
const toggleIsFollowing = (inProgress: boolean, userId: number): TToggleIsFollowing => ({
    type: TOGGLE_IS_FOLLOWING,
    inProgress, userId,
})


// thunks
type TThunk = ThunkAction<Promise<void>, TGlobalState, unknown, TActions>

export const requestUsers = (pageNumber: number, numberOfUsersOnPage: number, requestType: string): TThunk => async (dispatch) => {

    dispatch(toggleIsFetching(true));
    const response = await usersAPI.requestUsers(pageNumber, numberOfUsersOnPage);
    dispatch(setTotalUsers(response.totalCount));
    requestType === "SET" && dispatch(setUsers(response.items));
    requestType === "ADD" && dispatch(addUsers(response.items));
    dispatch(toggleIsFetching(false));
}
export const follow = (userId: number): TThunk => async (dispatch) => {
    dispatch(toggleIsFollowing(true, userId));
    const response = await usersAPI.follow(userId);
    if (response.resultCode === 0) {
        dispatch(followSuccess(userId));
    }
    dispatch(toggleIsFollowing(false, userId));
}
export const unfollow = (userId: number): TThunk => async (dispatch) => {
    dispatch(toggleIsFollowing(true, userId));
    const response = await usersAPI.unfollow(userId);
    if (response.resultCode === 0) {
        dispatch(unfollowSuccess(userId));
    }
    dispatch(toggleIsFollowing(false, userId));
}

export default peopleReducer;