import {TGlobalState} from "./redux-store";
//peoplePage
export const getUsers = (state: TGlobalState) => {
    return state.peoplePage.users;
}
export const getCurrentPage = (state: TGlobalState) => {
    return state.peoplePage.currentPage;
}
export const getTotalUsers = (state: TGlobalState) => {
    return state.peoplePage.totalUsers;
}
export const getNumberOfUsersOnPage = (state: TGlobalState) => {
    return state.peoplePage.numberOfUsersOnPage;
}
export const getIsFetching = (state: TGlobalState) => {
    return state.peoplePage.isFetching;
}
export const getFollowingInProgress = (state: TGlobalState) => {
    return state.peoplePage.followingInProgress;
}
export const getFilter = (state: TGlobalState) => {
    return state.peoplePage.filter;
}
//auth
export const getCaptchaURL = (state: TGlobalState) => {
    return state.auth.captchaURL;
}
export const getIsAuth = (state: TGlobalState) => {
    return state.auth.isAuth;
}




