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
export const selectTotalUsers = (state: TGlobalState) => {
    return state.peoplePage.totalUsers
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
export const selectAuthorizedUser = (state: TGlobalState) => {
    return state.auth.authorizedUser
}

// dialogsPage
export const selectMessages = (state: TGlobalState) => {
    return state.dialogsPage.messages
}
export const selectMessUsers = (state: TGlobalState) => {
    return state.dialogsPage.users
}
export const selectCompanions = (state: TGlobalState) => {
    return state.dialogsPage.companions
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
export const selectOtherInfo = (state: TGlobalState) => {
    return state.profilePage.otherInfo
}


//graphics
export const selectBackgrounds = (state: TGlobalState) => {
    return state.graphics.background
}
export const selectProfileContactsIcons = (state: TGlobalState) => {
    return state.graphics.profileContactsIcons
}
//posts
export const selectPosts = (state: TGlobalState) => {
    return state.posts.posts
}
export const selectPostOwners = (state: TGlobalState) => {
    return state.posts.postOwners
}