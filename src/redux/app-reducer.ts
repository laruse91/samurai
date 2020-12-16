import {authMe} from "./auth-reducer";

const INITIALIZED_SUCCESS = 'app/INITIALIZED-SUCCESS';

export type TInitialState = { initialized: boolean }
let initialState: TInitialState = {
    initialized: false,
}

const appReducer = (state = initialState, action: any): TInitialState => {
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

// ActionCreators
type InitializedSuccessActionType = { type: typeof INITIALIZED_SUCCESS };
const initializedSuccess = (): InitializedSuccessActionType => ({type: INITIALIZED_SUCCESS});
// Thunks
export const initializeApp = () => (dispatch: any) => {
    const promise = dispatch(authMe());
    //dispatch(something)
    Promise.all([promise])
        .then(() => dispatch(initializedSuccess()));
}

export default appReducer;