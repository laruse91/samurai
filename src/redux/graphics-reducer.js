import data from '../db.json'

const backgrounds = data.users.map(user => user.background);

let initialState={
    backgrounds: backgrounds
};

const graphicsReducer = (state = initialState, action) => {
            return state
}

export default graphicsReducer;