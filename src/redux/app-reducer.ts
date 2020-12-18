import {authMe} from "./auth-reducer";
import {ThunkAction} from "redux-thunk";
import {TGlobalState} from "./redux-store";

const INITIALIZED_SUCCESS = 'app/INITIALIZED-SUCCESS';

export type TInitialState = { initialized: boolean }
let initialState: TInitialState = {
    initialized: false,
}

const appReducer = (state = initialState, action: TActions): TInitialState => {
    switch (action.type) {
        case INITIALIZED_SUCCESS:
            return {
                ...state,
                initialized: true
            }

        default:
            return state;
    }
}

type TActions = InitializedSuccessActionType

// ActionCreators
type InitializedSuccessActionType = { type: typeof INITIALIZED_SUCCESS };
const initializedSuccess = (): InitializedSuccessActionType => ({type: INITIALIZED_SUCCESS});

// Thunks
type TThunk = ThunkAction<void, TGlobalState, unknown, any>

export const initializeApp = (): TThunk => (dispatch) => {
    const promise = dispatch(authMe());
    //dispatch(something)
    Promise.all([promise])
        .then(() => dispatch(initializedSuccess()));
}

export default appReducer;