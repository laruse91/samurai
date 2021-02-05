import {TCombineActions, TGlobalState} from './store'
import {ThunkAction} from 'redux-thunk'
import {profileAPI} from '../api/profileApi'
import {TProfile} from '../types/types'
import {db} from '../index'

export const SEND_NEW_MESSAGE = 'dialogsPage/SEND-MESSAGE'
const SET_COMPANION = 'dialogsPage/SET-COMPANION'
const SET_COMPANIONS = 'dialogsPage/SET_COMPANIONS'
const SET_MESSAGES = 'dialogsPage/SET_MESSAGES'
const SET_TOTAL_COUNT = 'dialogsPage/SET_TOTAL_COUNT'

export type TMessage = { id: string, body: string, userId: number }
export type TCompanions = {
    [userId: string]: { userName: string, userPhoto: string | null, info?: string }
}

const initialState = {
    messages: [] as TMessage[],
    companions: null as TCompanions | null,
    companionsCount: null as number[] | null
}

export type TInitialState = typeof initialState

const dialogsReducer = (state = initialState, action: TActions): TInitialState => {
    switch (action.type) {
        case SEND_NEW_MESSAGE:
            return {
                ...state,
                messages: [...state.messages, action.payload.message]
            }
        case SET_COMPANIONS:
            return {
                ...state,
                companions: action.payload.companions
            }
        case SET_TOTAL_COUNT:
            return {
                ...state,
                companionsCount: action.payload.total
            }
        case SET_MESSAGES:
            return {
                ...state,
                messages: action.payload.messages
            }
        default:
            return state
    }
}

// ActionCreators
type TActions = TCombineActions<typeof actions>

export const actions = {
    sendNewMessage: (message: TMessage) => ({
        type: SEND_NEW_MESSAGE,
        payload: {message}
    } as const),
    setCompanions: (companions: TCompanions) => ({
        type: SET_COMPANIONS,
        payload: {companions}
    } as const),
    setMessages: (messages: TMessage[]) => ({
        type: SET_MESSAGES,
        payload: {messages}
    } as const),
    setTotalCount: (total: number[]) => ({
        type: SET_TOTAL_COUNT,
        payload: {total}
    } as const)
}

//thunks
type TThunk = ThunkAction<void, TGlobalState, unknown, TActions>

export const requestCompanions = (myUserId: number): TThunk => async (dispatch) => {
    const database = db.ref('companions')
    let companions: number[] = []
    await database.once('value', (el) => {
        companions = Object.values(el.val()[myUserId])
    })
    dispatch(actions.setTotalCount(companions))

    let data: TCompanions = {}
    for (let userId of companions) {
        const response: TProfile = await profileAPI.getProfile(userId)
        data[String(userId)] = {userName: response.fullName, userPhoto: response.photos.large}
    }
    dispatch(actions.setCompanions(data))
}

export const requestMessages = (userId: number): TThunk => async (dispatch) => {
    dispatch(actions.setMessages([]))
    const database = db.ref(`messages/${userId}`)
    let messages: TMessage[] = []
    await database.once('value', (el) => {
        const items = el.val()
        items ? messages = Object.values(items) : null
    })
    dispatch(actions.setMessages(messages))
}

export const sendMessage = (userId: number, message: TMessage): TThunk => (dispatch) => {
    db.ref(`messages/${userId}`).push(message)
    dispatch(actions.sendNewMessage(message))
}

export default dialogsReducer
