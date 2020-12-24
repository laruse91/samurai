import {TGlobalState} from "./redux-store";

export const getUsers = (state: TGlobalState) => {
    return state.peoplePage.users;
}

export const currentPage = (state: TGlobalState) => {
    return state.peoplePage.currentPage;
}

export const totalUsers = (state: TGlobalState) => {
    return state.peoplePage.totalUsers;
}

export const numberOfUsersOnPage = (state: TGlobalState) => {
    return state.peoplePage.numberOfUsersOnPage;
}

export const isFetching = (state: TGlobalState) => {
    return state.peoplePage.isFetching;
}

export const followingInProgress = (state: TGlobalState) => {
    return state.peoplePage.followingInProgress;
}

export const getFilter = (state: TGlobalState) => {
    return state.peoplePage.filter;
}



