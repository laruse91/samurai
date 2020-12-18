import {profileAPI, ResultCode} from "../api/api";
import {stopSubmit} from "redux-form";
import {TPhotos, TProfile} from "./types/types";
import {ThunkAction} from "redux-thunk";
import {TGlobalState} from "./redux-store";

const SET_USER_PROFILE = 'profile/SET-USER-PROFILE';
const SET_USER_STATUS = 'profile/GET-USER-STATUS';
const SET_USER_PHOTO = 'profile/SET-USER-PHOTO'

const initialState = {
    profile: null as TProfile | null,
    status: '',
}
export type InitialStateType = typeof initialState

const profileReducer = (state = initialState, action: TActions): InitialStateType => {
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
        case SET_USER_PHOTO:
            return {
                ...state,
                profile: {...state.profile, photos: action.photo}  as TProfile
            }

        default:
            return state;
    }
};

type TActions = TSetUserProfile | TSetUserStatus | TSetUserPhoto
//actionCreators
type TSetUserProfile = {
    type: typeof SET_USER_PROFILE,
    profile: TProfile
}
const setUserProfile = (profile: TProfile): TSetUserProfile => ({
    type: SET_USER_PROFILE,
    profile
});
type TSetUserStatus = {
    type: typeof SET_USER_STATUS,
    status: string
}
const setUserStatus = (status: string): TSetUserStatus => ({
    type: SET_USER_STATUS,
    status
});
type TSetUserPhoto = {
    type: typeof SET_USER_PHOTO,
    photo: TPhotos
}
const setUserPhoto = (photo: TPhotos): TSetUserPhoto => ({
    type: SET_USER_PHOTO,
    photo
});

//thunks
type TThunk = ThunkAction<void, TGlobalState, unknown, any>   //// Attention!!!!!!!!!

export const getUserProfile = (userId: number): TThunk => async (dispatch) => {
    const response = await profileAPI.getProfile(userId)
    dispatch(setUserProfile(response));
};
export const getUserStatus = (userId: number): TThunk => async (dispatch) => {
    const response = await profileAPI.getStatus(userId)
    dispatch(setUserStatus(response));
};
export const updateUserStatus = (status: string): TThunk => async (dispatch) => {
    const response = await profileAPI.updateStatus(status)
    if (response.resultCode === ResultCode.Success) {
        dispatch(setUserStatus(status));
    }
};
export const saveUserPhoto = (photo: any): TThunk => async (dispatch) => {
    const response = await profileAPI.savePhoto(photo)
    if (response.resultCode === ResultCode.Success) {
        dispatch(setUserPhoto(response.data.photos));
    }
};
export const saveMyProfile = (profile: TProfile): TThunk => async (dispatch, getState) => {
    const userId = getState().auth.userId
    const response = await profileAPI.saveProfile(profile)
    if (response.resultCode === ResultCode.Success && userId !== null) {  //// Attention!!!!!!!!!
        dispatch(getUserProfile(userId));
    } else {
        const messages: any = response.messages.length > 0 && response.messages;
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