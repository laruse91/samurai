import {usersAPI} from "../api/api";
import {UserType} from "./types/types";

const FOLLOW = 'people/FOLLOW';
const UNFOLLOW = 'people/UNFOLLOW';
const SET_USERS = 'people/SET-USERS';
const SET_CURRENT_PAGE = 'people/SET-CURRENT-PAGE';
const TOGGLE_IS_FETCHING = 'people/TOGGLE-IS-FETCHING';
const SET_TOTAL_USERS = 'people/SET-TOTAL-USERS';
const TOGGLE_IS_FOLLOWING = 'people/TOGGLE-IS-FOLLOWING';
const ADD_USERS = 'people/ADD-USERS';

let initialState = {
    users: [] as Array<UserType>,
    currentPage: 1,
    totalUsers: null as number | null,
    numberOfUsersOnPage: 6,
    isFetching: true,
    followingInProgress: [] as Array<number>, // Array of User's Ids
}
type InitialStateType = typeof initialState

const peopleReducer = (state = initialState, action: any): InitialStateType => {
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

// ActionCreators
type FollowSuccessType ={
    type: typeof FOLLOW
    userId: number
}
export const followSuccess = (userId: number): FollowSuccessType => ({
    type: FOLLOW,
    userId
})

type UnfollowSuccessType ={
    type: typeof UNFOLLOW
    userId: number
}
export const unfollowSuccess = (userId: number): UnfollowSuccessType => ({
    type: UNFOLLOW,
    userId
})

type SetUsersType ={
    type: typeof SET_USERS
    users: Array<UserType>
}
export const setUsers = (users: Array<UserType>): SetUsersType => ({
    type: SET_USERS,
    users
})

type AddUsersType ={
    type: typeof ADD_USERS
    users: Array<UserType>
}
export const addUsers = (users: Array<UserType>): AddUsersType => ({
    type: ADD_USERS,
    users
})

type SetCurrentPageType = {
    type: typeof SET_CURRENT_PAGE
    PageNumber: number
}
export const setCurrentPage = (PageNumber: number): SetCurrentPageType => ({
    type: SET_CURRENT_PAGE,
    PageNumber
})

type ToggleIsFetchingType = {
    type: typeof TOGGLE_IS_FETCHING
    isFetching: boolean
}
export const toggleIsFetching = (isFetching: boolean): ToggleIsFetchingType => ({
    type: TOGGLE_IS_FETCHING,
    isFetching
})

type SetTotalUsersType = {
    type: typeof SET_TOTAL_USERS
    totalUsersNum: number
}
export const setTotalUsers = (totalUsersNum: number): SetTotalUsersType => ({
    type: SET_TOTAL_USERS,
    totalUsersNum
})

type ToggleIsFollowingType = {
    type: typeof TOGGLE_IS_FOLLOWING
    inProgress: boolean
    userId: number

}
export const toggleIsFollowing = (inProgress: boolean, userId: number): ToggleIsFollowingType => ({
    type: TOGGLE_IS_FOLLOWING,
    inProgress, userId,
})

// thunks
export const requestUsers = (pageNumber: number, numberOfUsersOnPage: number, requestType: string) => async (dispatch: any) => {
    dispatch(toggleIsFetching(true));
    const response = await usersAPI.requestUsers(pageNumber, numberOfUsersOnPage);
    dispatch(setTotalUsers(response.totalCount));
    requestType === "SET" && dispatch(setUsers(response.items));
    requestType === "ADD" && dispatch(addUsers(response.items));
    dispatch(toggleIsFetching(false));
}
export const follow = (userId: number) => async (dispatch: any) => {
    dispatch(toggleIsFollowing(true, userId));
    const response = await usersAPI.follow(userId);
    if (response.resultCode === 0) {
        dispatch(followSuccess(userId));
    }
    dispatch(toggleIsFollowing(false, userId));
}
export const unfollow = (userId: number) => async (dispatch: any) => {
    dispatch(toggleIsFollowing(true, userId));
    const response = await usersAPI.unfollow(userId);
    if (response.resultCode === 0) {
        dispatch(unfollowSuccess(userId));
    }
    dispatch(toggleIsFollowing(false, userId));
}



export default peopleReducer;