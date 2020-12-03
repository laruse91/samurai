import {profileAPI} from "../api/api";

const SET_USER_PROFILE = 'SET-USER-PROFILE';
const SET_USER_STATUS = 'GET-USER-STATUS';
const UPDATE_USER_STATUS = 'UPDATE-USER-STATUS'

const initialState = {
    profile: null,
    status: null,
}

const profileReducer = (state = initialState, action) => {
    switch (action.type) {

        case SET_USER_PROFILE:
            return {
                ...state,
                profile: action.profile
            };
        case SET_USER_STATUS:
            return {
                ...state,
                status: action.status
            };
        case UPDATE_USER_STATUS:
            return {
                ...state,
                status: action.status
            }

        default:
            return state;
    }
};

//actionCreators

const setUserProfile = (profile) => ({
    type: SET_USER_PROFILE,
    profile
});
const setUserStatus = (status) => ({
    type: SET_USER_STATUS,
    status
});

//thunks
export const getUserProfile = (userId) => (dispatch) => {
    profileAPI.getProfile(userId)
        .then(data => {
            dispatch(setUserProfile(data));
        });
};
export const getUserStatus = (userId) => (dispatch) => {
    profileAPI.getStatus(userId)
        .then(data => {
            dispatch(setUserStatus(data));
        });
};
export const updateUserStatus = (status) => (dispatch) => {
    profileAPI.updateStatus(status)
        .then(data => {
            if (data.resultCode === 0) {
                dispatch(setUserStatus(status));
            }
        });
}

export default profileReducer;