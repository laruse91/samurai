import data from '../db.json'

const backgrounds: Array<string> = data.users.map(user => user.background);

let initialState = {
    backgrounds: backgrounds
};
export type TInitialState = typeof initialState

const graphicsReducer = (state = initialState): TInitialState => {
    return state
}

export default graphicsReducer;