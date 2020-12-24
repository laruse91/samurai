import {TUser} from "../types/types";
import {TCombineActions, TGlobalState} from "./redux-store";
import {ThunkAction} from "redux-thunk";
import {usersAPI} from "../api/usersApi";
import {ResultCode} from "../api/api";

const FOLLOW = 'people/FOLLOW';
const UNFOLLOW = 'people/UNFOLLOW';
const SET_USERS = 'people/SET-USERS';
const SET_CURRENT_PAGE = 'people/SET-CURRENT-PAGE';
const TOGGLE_IS_FETCHING = 'people/TOGGLE-IS-FETCHING';
const SET_TOTAL_USERS = 'people/SET-TOTAL-USERS';
const TOGGLE_IS_FOLLOWING = 'people/TOGGLE-IS-FOLLOWING';
const ADD_USERS = 'people/ADD-USERS';
const SET_FILTER = 'people/SET-FILTER';

let initialState = {
    users: [] as Array<TUser>,
    currentPage: 1,
    totalUsers: 0,
    numberOfUsersOnPage: 6,
    isFetching: true,
    followingInProgress: [] as Array<number>, // Array of User's Ids
filter: {
        term: ''
}
}
export type InitialStateType = typeof initialState
export type TFilter = typeof initialState.filter

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
        case SET_FILTER:
            return {
            ...state, filter:action.payload
        }
        default:
            return state;
    }
}

type TActions = TCombineActions<typeof actions>

// ActionCreators
const actions = {
    followSuccess: (userId: number) => ({type: FOLLOW, userId} as const),
    unfollowSuccess: (userId: number) => ({type: UNFOLLOW, userId} as const),
    setUsers: (users: Array<TUser>) => ({type: SET_USERS, users} as const),
    addUsers: (users: Array<TUser>) => ({type: ADD_USERS, users} as const),
    setCurrentPage: (PageNumber: number) => ({type: SET_CURRENT_PAGE, PageNumber} as const),
    toggleIsFetching: (isFetching: boolean) => ({type: TOGGLE_IS_FETCHING, isFetching} as const),
    setTotalUsers: (totalUsersNum: number) => ({type: SET_TOTAL_USERS, totalUsersNum} as const),
    toggleIsFollowing: (inProgress: boolean, userId: number) => ({
        type: TOGGLE_IS_FOLLOWING,
        inProgress,
        userId
    } as const),
    setFilter: (termBody: string) => ({ type: SET_FILTER, payload: {term:termBody}}as const)
}

// thunks
type TThunk = ThunkAction<Promise<void>, TGlobalState, unknown, TActions>

export const requestUsers = (pageNumber: number, numberOfUsersOnPage: number, requestType: string, term: string): TThunk => async (dispatch) => {
    dispatch(actions.toggleIsFetching(true));
    dispatch(actions.setCurrentPage(pageNumber));
    dispatch(actions.setFilter(term));
    const response = await usersAPI.requestUsers(pageNumber, numberOfUsersOnPage, term);
    dispatch(actions.setTotalUsers(response.totalCount));
    requestType === "SET" && dispatch(actions.setUsers(response.items));
    requestType === "ADD" && dispatch(actions.addUsers(response.items));
    dispatch(actions.toggleIsFetching(false));
}
export const follow = (userId: number): TThunk => async (dispatch) => {
    dispatch(actions.toggleIsFollowing(true, userId));
    const response = await usersAPI.follow(userId);
    if (response.resultCode === ResultCode.Success) {
        dispatch(actions.followSuccess(userId));
    }
    dispatch(actions.toggleIsFollowing(false, userId));
}
export const unfollow = (userId: number): TThunk => async (dispatch) => {
    dispatch(actions.toggleIsFollowing(true, userId));
    const response = await usersAPI.unfollow(userId);
    if (response.resultCode === ResultCode.Success) {
        dispatch(actions.unfollowSuccess(userId));
    }
    dispatch(actions.toggleIsFollowing(false, userId));
}

export default peopleReducer;