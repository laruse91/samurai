const initialState = {}
export type TInitialState = typeof initialState

const headerReducer =(state = initialState, action:any): TInitialState => {
    return state;
};
export default headerReducer;
