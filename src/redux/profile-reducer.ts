import {ResultCode} from '../api/api'
import {FormAction, stopSubmit} from 'redux-form'
import {TPhotos, TProfile} from '../types/types'
import {ThunkAction} from 'redux-thunk'
import {TCombineActions, TGlobalState} from './redux-store'
import {profileAPI} from '../api/profileApi'
import data from '../db.json'

const SET_USER_PROFILE = 'profilePage/SET-USER-PROFILE'
const SET_USER_STATUS = 'profilePage/GET-USER-STATUS'
const SET_USER_PHOTO = 'profilePage/SET-USER-PHOTO'

const initialState = {
    profile: null as TProfile | null,
    status: '',
    otherInfo: data.profileOtherInfo as Array<{[key: string]: string}>
}
export type InitialStateType = typeof initialState

const profileReducer = (state = initialState, action: TActions): InitialStateType => {
    switch (action.type) {
        case SET_USER_PROFILE:
            return {
                ...state,
                profile: action.profile
            }
        case SET_USER_STATUS:
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
            return state
    }
}

//actionCreators
type TActions = TCombineActions<typeof actions>

const actions = {
    setUserProfile: (profile: TProfile) => ({
        type: SET_USER_PROFILE,
        profile
    }as const),
    setUserStatus: (status: string) => ({
        type: SET_USER_STATUS,
        status
    }as const),
    setUserPhoto: (photo: TPhotos) => ({
        type: SET_USER_PHOTO,
        photo
    }as const)
}

//thunks
type TThunk = ThunkAction<void, TGlobalState, unknown, TActions | FormAction>   //FormAction used for StopSubmit.

export const getUserProfile = (userId: number): TThunk => async (dispatch) => {
    const response = await profileAPI.getProfile(userId)
    dispatch(actions.setUserProfile(response))
}
export const getUserStatus = (userId: number): TThunk => async (dispatch) => {
    const response = await profileAPI.getStatus(userId)
    dispatch(actions.setUserStatus(response))
}
export const updateUserStatus = (status: string): TThunk => async (dispatch) => {
    const response = await profileAPI.updateStatus(status)
    if (response.resultCode === ResultCode.Success) {
        dispatch(actions.setUserStatus(status))
    }
}
export const saveUserPhoto = (photo: File): TThunk => async (dispatch) => {
    const response = await profileAPI.savePhoto(photo)
    if (response.resultCode === ResultCode.Success) {
        dispatch(actions.setUserPhoto(response.data.photos))
    }
}
export const saveMyProfile = (profile: TProfile): TThunk => async (dispatch, getState) => {
    const userId = getState().auth.authorizedUser!.userId
    const response = await profileAPI.saveProfile(profile)
    if (response.resultCode === ResultCode.Success && userId !== null) {
        dispatch(getUserProfile(userId))
    } else {
        const messages: any = response.messages.length > 0 && response.messages
        let errors: any = {}
        for (let i = 0; i < messages.length; i++) {
            let fieldName = messages[i].split('->')[1].slice(0, -1).toLowerCase()
            errors[fieldName] = 'Invalid URL format'
        }
        dispatch(stopSubmit('aboutMe', {'contacts': errors}))
        return Promise.reject(errors)
    }
}

export default profileReducer