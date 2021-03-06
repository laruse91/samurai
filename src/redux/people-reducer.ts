import {TUser} from '../types/types'
import {TCombineActions, TGlobalState} from './store'
import {ThunkAction} from 'redux-thunk'
import {usersAPI} from '../api/usersApi'
import {ResultCode} from '../api/api'

const FOLLOW = 'peoplePage/FOLLOW'
const UNFOLLOW = 'peoplePage/UNFOLLOW'
const SET_USERS = 'peoplePage/SET-USERS'
const TOGGLE_IS_FETCHING = 'peoplePage/TOGGLE-IS-FETCHING'
const SET_TOTAL_USERS = 'peoplePage/SET-TOTAL-USERS'
const TOGGLE_IS_FOLLOWING = 'peoplePage/TOGGLE-IS-FOLLOWING'
const ADD_USERS = 'peoplePage/ADD-USERS'
const SET_FILTER = 'peoplePage/SET-FILTER'

const initialState = {
    users: [] as Array<TUser>,
    totalUsers: 0,
    isFetching: false,
    followingInProgress: [] as Array<number>, // Array of User's Ids
    filter: {
        term: '',
        friend: null as boolean | null
    },
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
                    return user
                })
            }
        case UNFOLLOW:
            return {
                ...state,
                users: state.users.map(user => {
                    if (user.id === action.userId) {
                        return {...user, followed: false}
                    }
                    return user
                })
            }
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
                ...state, filter: action.payload
            }
        default:
            return state
    }
}

type TActions = TCombineActions<typeof actions>

// ActionCreators
export const actions = {
    followSuccess: (userId: number) => ({type: FOLLOW, userId} as const),
    unfollowSuccess: (userId: number) => ({type: UNFOLLOW, userId} as const),
    setUsers: (users: Array<TUser>) => ({type: SET_USERS, users} as const),
    addUsers: (users: Array<TUser>) => ({type: ADD_USERS, users} as const),
    toggleIsFetching: (isFetching: boolean) => ({type: TOGGLE_IS_FETCHING, isFetching} as const),
    setTotalUsers: (totalUsersNum: number) => ({type: SET_TOTAL_USERS, totalUsersNum} as const),
    toggleIsFollowing: (inProgress: boolean, userId: number) => ({
        type: TOGGLE_IS_FOLLOWING,
        inProgress,
        userId
    } as const),
    setFilter: (filter: TFilter) => ({type: SET_FILTER, payload: filter} as const)
}

// thunks
type TThunk = ThunkAction<Promise<void>, TGlobalState, unknown, TActions>

export const requestUsers = (pageNumber: number, numberOfUsersOnPage: number, requestType: 'ADD' | 'SET', filter: TFilter): TThunk => async (dispatch) => {
    dispatch(actions.toggleIsFetching(true))
    dispatch(actions.setFilter(filter))
    const response = await usersAPI.requestUsers(pageNumber, numberOfUsersOnPage, filter.term, filter.friend)
    dispatch(actions.setTotalUsers(response.totalCount))
    requestType === 'SET' && dispatch(actions.setUsers(response.items))
    requestType === 'ADD' && dispatch(actions.addUsers(response.items))
    dispatch(actions.toggleIsFetching(false))
}
export const follow = (userId: number): TThunk => async (dispatch) => {
    dispatch(actions.toggleIsFollowing(true, userId))
    const response = await usersAPI.follow(userId)
    if (response.resultCode === ResultCode.Success) {
        dispatch(actions.followSuccess(userId))
    }
    dispatch(actions.toggleIsFollowing(false, userId))
}
export const unfollow = (userId: number): TThunk => async (dispatch) => {
    dispatch(actions.toggleIsFollowing(true, userId))
    const response = await usersAPI.unfollow(userId)
    if (response.resultCode === ResultCode.Success) {
        dispatch(actions.unfollowSuccess(userId))
    }
    dispatch(actions.toggleIsFollowing(false, userId))
}

export default peopleReducer