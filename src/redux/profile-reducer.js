import {profileAPI} from "../api/api";

const SET_USER_PROFILE = 'profile/SET-USER-PROFILE';
const SET_USER_STATUS = 'profile/GET-USER-STATUS';
const UPDATE_USER_STATUS = 'profile/UPDATE-USER-STATUS';
const SET_USER_PHOTO = 'profile/SET-USER-PHOTO'

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
        case SET_USER_PHOTO:
            return {
                ...state,
                profile: {...state.profile, photos: action.photo}
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
const setUserPhoto = (photo) => ({
    type: SET_USER_PHOTO,
    photo
});


//thunks
export const getUserProfile = (userId) => async (dispatch) => {
    const response = await profileAPI.getProfile(userId)
    dispatch(setUserProfile(response));
};
export const getUserStatus = (userId) => async (dispatch) => {
    const response = await profileAPI.getStatus(userId)
    dispatch(setUserStatus(response));
};
export const updateUserStatus = (status) => async (dispatch) => {
    const response = await profileAPI.updateStatus(status)
    if (response.resultCode === 0) {
        dispatch(setUserStatus(status));
    }
};
export const saveUserPhoto = (photo) => async (dispatch) => {
    const response = await profileAPI.savePhoto(photo)
    if (response.resultCode === 0) {
        dispatch(setUserPhoto(response.data.photos));
    }
}


export default profileReducer;