import {TCombineActions, TGlobalState} from './redux-store'
import data from '../db.json'
import {ThunkAction} from 'redux-thunk'
import {profileAPI} from '../api/profileApi'

const SEND_NEW_MESSAGE = 'dialogsPage/SEND-NEW-MESSAGE'
const SET_COMPANION = 'dialogsPage/SET-COMPANION'
const SET_COMPANIONS_DATA = 'dialogsPage/SET_COMPANIONS_DATA'

export type TMessages = {
    id: number
    body: string
    userId: number
}
export type TDialogsUser = {
    userId: number
    messages: [] | TMessages[]
}
type TCompanionData = {
    userId: number
    userName: string
    userPhoto: string | null
    info?: string
}

const initialState = {
    companions: data.companions as TDialogsUser[],
    companionsData: [] as TCompanionData[]
}

export type TInitialState = typeof initialState

const dialogsReducer = (state = initialState, action: TActions): TInitialState => {
    switch (action.type) {
        case SET_COMPANION:
            return {
                ...state,
                companions: [...state.companions, action.companion]
            }
        case SET_COMPANIONS_DATA:
            return {
                ...state,
                companionsData: [...state.companionsData, action.data]
            }
        default:
            return state
    }
}

// ActionCreators
type TActions = TCombineActions<typeof actions>

export const actions = {
    sendNewMessage: (message: TMessages) => ({
        type: SEND_NEW_MESSAGE,
        message
    } as const),
    setCompanions: (companion: TDialogsUser) => ({
        type: SET_COMPANION,
        companion
    } as const),
    setCompanionsData: (data: TCompanionData) => ({
        type: SET_COMPANIONS_DATA,
        data
    } as const)
}

//thunks
type TThunk = ThunkAction<void, TGlobalState, unknown, TActions>

export const getCompanionsData = (userId: number): TThunk => async (dispatch) => {
    const response = await profileAPI.getProfile(userId)
    const data = {
        userId: userId,
        userName: response.fullName,
        userPhoto: response.photos.large
    }
    dispatch(actions.setCompanionsData(data))
}

export default dialogsReducer
