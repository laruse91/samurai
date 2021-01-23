import {TUser} from '../types/types'
import {ThunkAction} from 'redux-thunk'
import {TCombineActions, TGlobalState} from './redux-store'
import {usersAPI} from '../api/usersApi'

const SET_USERS = 'sidebar/SET-USERS'
const SET_TOTAL_USERS = 'sidebar/SET-TOTAL-USERS'
const TOGGLE_IS_FETCHING = 'sidebar/TOGGLE-IS-FETCHING'

let initialState = {
    users: null as Array<TUser> | null,
    numberOfUsersAtSidebar: 50,
    totalUsers: 0,
    pageNumber: 1,
    isFetching: true,
}
export type TInitialState = typeof initialState
const sidebarReducer = (state = initialState, action: any): TInitialState => {
    switch (action.type) {
        case SET_USERS:
            return {
                ...state,
                users: action.users,
            }
        case SET_TOTAL_USERS:
            return {
                ...state,
                totalUsers: action.totalUsers,
            }
        case TOGGLE_IS_FETCHING:
            return {
                ...state,
                isFetching: action.isFetching,
            }
        default:
            return state
    }
}

//ActionCreators
type TActions =TCombineActions<typeof actions>

export const actions = {
     setTotalUsers : (totalUsers: number) => ({
        type: SET_TOTAL_USERS,
        totalUsers
    } as const),
     setUsers : (users: Array<TUser>) => ({
        type: SET_USERS,
        users
    }as const),
     toggleIsFetching : (isFetching: boolean) => ({
        type: TOGGLE_IS_FETCHING,
        isFetching
    }as const)
}

// thunk
type TThunk = ThunkAction<void, TGlobalState, unknown, TActions>

export const requestFollowedUsers = (pageNumber: number, numberOfUsersAtSidebar: number): TThunk => async (dispatch) => {
    dispatch(actions.toggleIsFetching(true))
    const response = await usersAPI.requestUsers(pageNumber, numberOfUsersAtSidebar, '', true)
    dispatch(actions.setUsers(response.items))
    dispatch(actions.setTotalUsers(response.totalCount))
    dispatch(actions.toggleIsFetching(false))
}

export default sidebarReducer