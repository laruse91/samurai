import {authMe} from "./auth-reducer";

const INITIALIZED_SUCCESS = 'INITIALIZED-SUCCESS';

let initialState = {
    initialized: false,
}

const appReducer = (state = initialState, action) => {
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
const initializedSuccess = () => ({type: INITIALIZED_SUCCESS});
// Thunks
export const initializeApp = () => (dispatch) => {
    const promise = dispatch(authMe());
    //dispatch(something)
    Promise.all([promise])
        .then(() => dispatch(initializedSuccess()));
}

export default appReducer;