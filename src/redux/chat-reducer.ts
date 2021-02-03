import {TCombineActions, TGlobalState} from './store'
import {ThunkAction} from 'redux-thunk'
import {TChatMessage, TChatMessageAPI, TWebSocketStatus} from '../types/types'
import {chatAPI} from '../api/chatApi'
import {Dispatch} from 'redux'
import {v1} from 'uuid'

const SET_CHAT_MESSAGES = 'chat/SET_CHAT_MESSAGES'
const DELETE_CHAT_MESSAGES = 'chat/DELETE_CHAT_MESSAGES'
const CHANGE_STATUS = 'chat/CHANGE_STATUS'


const initialState = {
    messages: null as TChatMessage[] | null,
    status: 'pending' as  TWebSocketStatus
}

export type TInitialState = typeof initialState

const chatReducer = (state = initialState, action: TActions): TInitialState => {
    switch (action.type) {
        case SET_CHAT_MESSAGES:
            if (state.messages === null) {
                return {
                    ...state,
                    messages: action.messages.map(m=>({ ...m, id: v1()}))
                }
            }
            return {
                ...state,
                messages: [...state.messages, ...action.messages.map(m=>({ ...m, id: v1()}))]
            }
            case CHANGE_STATUS:

                return {
                    ...state,
                    status: action.payload.status
                }
        case DELETE_CHAT_MESSAGES:
            return {
                ...state,
                messages: []
            }
        default:
            return state
    }
}
// ActionCreator
type TActions = TCombineActions<typeof actions>

const actions = {
    setChatMessages: (messages: TChatMessageAPI[]) => ({
        type: SET_CHAT_MESSAGES,
        messages
    } as const),
    deleteChatMessages: () => ({
        type: DELETE_CHAT_MESSAGES
    } as const),
    changeStatus: (status: TWebSocketStatus) => ({
        type: CHANGE_STATUS,
        payload: {status}
    } as const)
}

// Thunks
type TThunk = ThunkAction<Promise<void>, () => TGlobalState, unknown, TActions>

let _messageHandler: ((messages: TChatMessageAPI[]) => void) | null = null
const messagesHandlerCreator = (dispatch: Dispatch) => {
    if (_messageHandler === null) {
        _messageHandler = (messages) => {
            dispatch(actions.setChatMessages(messages))
        }
    }
    return _messageHandler
}
let _statusHandler: ((status: TWebSocketStatus) => void) | null = null
const statusHandlerCreator = (dispatch: Dispatch) => {
    if (_statusHandler === null) {
        _statusHandler = (status) => {
            dispatch(actions.changeStatus(status))
        }
    }
    return _statusHandler
}

export const startMessagesListening = (): TThunk => async (dispatch) => {
    chatAPI.start()
    chatAPI.subscribe('messages-received', messagesHandlerCreator(dispatch))
    chatAPI.subscribe('status-changed', statusHandlerCreator(dispatch))
}

export const stopMessagesListening = (): TThunk => async (dispatch) => {
    chatAPI.unsubscribe('messages-received', messagesHandlerCreator(dispatch))
    chatAPI.unsubscribe('status-changed', statusHandlerCreator(dispatch))
    chatAPI.stop()
    dispatch(actions.deleteChatMessages())

}
export const sendMessage = (message: string): TThunk => async (dispatch) => {
    chatAPI.sendMessage(message)
}

export default chatReducer