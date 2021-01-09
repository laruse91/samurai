import {authMe} from './auth-reducer'
import {ThunkAction} from 'redux-thunk'
import {TCombineActions, TGlobalState} from './redux-store'

const INITIALIZED_SUCCESS = 'app/INITIALIZED-SUCCESS'

export type TInitialState = { isInitialized: boolean }
let initialState: TInitialState = {
    isInitialized: false,
}

const appReducer = (state = initialState, action: TActions): TInitialState => {
    switch (action.type) {
        case INITIALIZED_SUCCESS:
            return {
                ...state,
                isInitialized: true
            }

        default:
            return state
    }
}

// ActionCreators
type TActions = TCombineActions<typeof actions>

export const actions = {
    initializedSuccess: () => ({type: INITIALIZED_SUCCESS} as const)
}

// Thunks
type TThunk = ThunkAction<void, TGlobalState, unknown, any>

export const initializeApp = (): TThunk => (dispatch) => {
    const promise = dispatch(authMe())
    //dispatch(something)
    Promise.all([promise])
        .then(() => dispatch(actions.initializedSuccess()))
}

export default appReducer