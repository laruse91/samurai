import {TGlobalState} from './redux-store'

//sidebar
export const selectFollowedUsers = (state: TGlobalState) => {
    return state.sidebar.users
}
export const selectNumberOfUsersAtSidebar = (state: TGlobalState) => {
    return state.sidebar.numberOfUsersAtSidebar
}
export const selectTotalFollowedUsers = (state: TGlobalState) => {
    return state.sidebar.totalUsers
}
export const selectPageNumber = (state: TGlobalState) => {
    return state.sidebar.pageNumber
}

//peoplePage
export const selectUsers = (state: TGlobalState) => {
    return state.peoplePage.users
}
export const selectCurrentPage = (state: TGlobalState) => {
    return state.peoplePage.currentPage
}
export const selectTotalUsers = (state: TGlobalState) => {
    return state.peoplePage.totalUsers
}
export const selectNumberOfUsersOnPage = (state: TGlobalState) => {
    return state.peoplePage.numberOfUsersOnPage
}
export const selectIsFetching = (state: TGlobalState) => {
    return state.peoplePage.isFetching
}
export const selectFollowingInProgress = (state: TGlobalState) => {
    return state.peoplePage.followingInProgress
}
export const selectFilter = (state: TGlobalState) => {
    return state.peoplePage.filter
}

//auth
export const selectCaptchaURL = (state: TGlobalState) => {
    return state.auth.captchaURL
}
export const selectIsAuth = (state: TGlobalState) => {
    return state.auth.isAuth
}
export const selectLogin = (state: TGlobalState) => {
    return state.auth.login
}
export const selectUserId = (state: TGlobalState) => {
    return state.auth.userId
}
export const email = (state: TGlobalState) => {
    return state.auth.email
}
export const selectUserPhoto = (state: TGlobalState) => {
    return state.auth.userPhoto
}

// dialogsPage
export const selectMessages = (state: TGlobalState) => {
    return state.dialogsPage.messages
}
export const selectMessUsers = (state: TGlobalState) => {
    return state.dialogsPage.users
}

//navBar
export const selectNavItems = (state: TGlobalState) => {
    return state.navbar.navItems
}

//app
export const selectIsInitialized = (state: TGlobalState) => {
    return state.app.isInitialized
}

//profilePage
export const selectProfile = (state: TGlobalState) => {
    return state.profilePage.profile
}
export const selectProfileStatus = (state: TGlobalState) => {
    return state.profilePage.status
}

//graphics
export const selectBackgrounds = (state: TGlobalState) => {
    return state.graphics.backgrounds
}