import {TCombineActions, TGlobalState} from './redux-store'
import {ThunkAction} from 'redux-thunk'
import {TChatMessage} from '../types/types'
import {chatAPI} from '../api/chatApi'
import {Dispatch} from 'redux'

const SET_CHAT_MESSAGES = 'chat/SET_CHAT_MESSAGES'

const initialState = {
    messages: [] as TChatMessage[]
}

export type TInitialState = typeof initialState

const chatReducer = (state = initialState, action: TActions): TInitialState => {
    switch (action.type) {
        case SET_CHAT_MESSAGES:
            return {
                ...state,
                messages: [...state.messages, ...action.messages]
            }
        default:
            return state
    }
}
// ActionCreator
type TActions = TCombineActions<typeof actions>

const actions = {
    messagesReceived: (messages: TChatMessage[]) => ({
        type: SET_CHAT_MESSAGES,
        messages
    } as const)
}

// Thunks
type TThunk = ThunkAction<Promise<void>, () => TGlobalState, unknown, TActions>

let _messageHandler: ((messages: TChatMessage[]) => void) | null = null
const messagesHandlerCreator = (dispatch: Dispatch) => {
    if (_messageHandler === null) {
        _messageHandler = (messages) => {
            dispatch(actions.messagesReceived(messages))
        }
    }
    return _messageHandler
}

export const startMessagesListening = (): TThunk => async (dispatch) => {
    chatAPI.start()
    chatAPI.subscribe(messagesHandlerCreator(dispatch))
}

export const stopMessagesListening = (): TThunk => async (dispatch) => {
    chatAPI.unsubscribe(messagesHandlerCreator(dispatch))
    chatAPI.stop()
}
export const sendMessage = (message: string): TThunk => async (dispatch) => {
    chatAPI.sendMessage(message)
}

export default chatReducer