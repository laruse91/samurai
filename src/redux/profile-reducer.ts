import {profileAPI} from "../api/api";
import {stopSubmit} from "redux-form";
import {TProfile} from "./types/types";

const SET_USER_PROFILE = 'profile/SET-USER-PROFILE';
const SET_USER_STATUS = 'profile/GET-USER-STATUS';
const UPDATE_USER_STATUS = 'profile/UPDATE-USER-STATUS';
const SET_USER_PHOTO = 'profile/SET-USER-PHOTO'

const initialState = {
    profile: null as TProfile | null,
    status: '',
}
export type InitialStateType = typeof initialState

const profileReducer = (state = initialState, action: any): InitialStateType => {
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
                profile: {...state.profile, photos: action.photo} as TProfile
            }

        default:
            return state;
    }
};

//actionCreators
type SetUserProfileType = {
    type: typeof SET_USER_PROFILE,
    profile: TProfile
}
const setUserProfile = (profile: TProfile): SetUserProfileType => ({
    type: SET_USER_PROFILE,
    profile
});
type SetUserStatusType = {
    type: typeof SET_USER_STATUS,
    status: string
}
const setUserStatus = (status: string): SetUserStatusType => ({
    type: SET_USER_STATUS,
    status
});
type SetUserPhotoType = {
    type: typeof SET_USER_PHOTO,
    photo: string
}
const setUserPhoto = (photo: string): SetUserPhotoType => ({
    type: SET_USER_PHOTO,
    photo
});


//thunks
export const getUserProfile = (userId: number) => async (dispatch: any) => {
    const response = await profileAPI.getProfile(userId)
    dispatch(setUserProfile(response));
};
export const getUserStatus = (userId: number) => async (dispatch: any) => {
    const response = await profileAPI.getStatus(userId)
    dispatch(setUserStatus(response));
};
export const updateUserStatus = (status: string) => async (dispatch: any) => {
    const response = await profileAPI.updateStatus(status)
    if (response.resultCode === 0) {
        dispatch(setUserStatus(status));
    }
};
export const saveUserPhoto = (photo: string) => async (dispatch: any) => {
    const response = await profileAPI.savePhoto(photo)
    if (response.resultCode === 0) {
        dispatch(setUserPhoto(response.data.photos));
    }
};
export const saveMyProfile = (profile: TProfile) => async (dispatch: any, getState: any) => {
    const userId = getState().auth.userId
    const response = await profileAPI.saveProfile(profile)
    if (response.resultCode === 0) {
        dispatch(getUserProfile(userId));
    } else {
        const messages = response.messages.length > 0 && response.messages;
        let errors: any = {}
        for (let i = 0; i < messages.length; i++) {
            let fieldName = messages[i].split("->")[1].slice(0, -1).toLowerCase();
            errors[fieldName] = "Invalid URL format"
        }
        dispatch(stopSubmit("aboutMe", {"contacts": errors}));
        return Promise.reject(errors)
    }
};

export default profileReducer;