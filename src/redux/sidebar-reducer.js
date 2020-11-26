const SET_USERS = 'SET-USERS';
const SET_TOTAL_USERS = 'SET-TOTAL-USERS';

const initialState = {
    users: null,
    numberOfUsersAtSidebar: 10,
    totalUsers: ''
}

const sidebarReducer = (state = initialState, action) => {
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
        default:
            return state;
    }
}
export const setTotalUsers = (totalUsers) => ({
    type: SET_TOTAL_USERS,
    totalUsers
});
export const setUsers = (users) => ({
    type: SET_USERS,
    users
});
export default sidebarReducer;