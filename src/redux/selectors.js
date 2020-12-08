
export const getUsers = (state) => {
    return state.peoplePage.users;
}

export const currentPage = (state) => {
    return state.peoplePage.currentPage;
}

export const totalUsers = (state) => {
    return state.peoplePage.totalUsers;
}

export const numberOfUsersOnPage = (state) => {
    return state.peoplePage.numberOfUsersOnPage;
}

export const isFetching = (state) => {
    return state.peoplePage.isFetching;
}

export const followingInProgress = (state) => {
    return state.peoplePage.followingInProgress;
}



