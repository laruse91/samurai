import {usersAPI} from "../api/api";
import {TUser} from "./types/types";
import {ThunkAction} from "redux-thunk";
import {TGlobalState} from "./redux-store";

const SET_USERS = 'sidebar/SET-USERS';
const SET_TOTAL_USERS = 'sidebar/SET-TOTAL-USERS';
const TOGGLE_IS_FETCHING = 'sidebar/TOGGLE-IS-FETCHING';

let initialState = {
    users: [] as Array<TUser>,
    numberOfUsersAtSidebar: 10,
    totalUsers: 10,
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
            return state;
    }
}

type TActions = TSetTotalUsers | TSetUsers | TToggleIsFetching

//ActionCreators
type TSetTotalUsers = {
    type: typeof SET_TOTAL_USERS,
    totalUsers: number
}
export const setTotalUsers = (totalUsers: number): TSetTotalUsers => ({
    type: SET_TOTAL_USERS,
    totalUsers
});
type TSetUsers = {
    type: typeof SET_USERS,
    users: Array<TUser>
}
export const setUsers = (users: Array<TUser>): TSetUsers => ({
    type: SET_USERS,
    users
});
type TToggleIsFetching = {
    type: typeof TOGGLE_IS_FETCHING,
    isFetching: boolean
}
export const toggleIsFetching = (isFetching: boolean): TToggleIsFetching => ({
    type: TOGGLE_IS_FETCHING,
    isFetching
});

// thunk
type TThunk = ThunkAction<void, TGlobalState, unknown, TActions>

export const getUsers = (pageNumber: number, numberOfUsersAtSidebar: number): TThunk => async (dispatch) => {
    dispatch(toggleIsFetching(true));
    const response = await usersAPI.requestUsers(pageNumber, numberOfUsersAtSidebar)
    dispatch(setUsers(response.items));
    dispatch(setTotalUsers(response.totalCount));
    dispatch(toggleIsFetching(false));


}

export default sidebarReducer;