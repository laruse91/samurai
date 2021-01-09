import data from '../db.json'
import {TCombineActions} from './redux-store'

const SET_BACKGROUND = 'graphics/SET-BACKGROUND'

const backgrounds: Array<string> = data.users.map(user => user.background)
const random = Math.round(1 + Math.random() * (backgrounds.length - 1))

const profileContacts: { [key: string]: string } = data.profileContacts

const initialState = {
    background: backgrounds[random] as string,
    profileContacts: profileContacts
}
export type TInitialState = typeof initialState

const graphicsReducer = (state = initialState, action: TActions): TInitialState => {
    switch (action.type) {
        case SET_BACKGROUND:
            return {
                ...state,
                background: action.background
            }
        default:
            return state
    }
}
type TActions = TCombineActions<typeof actions>

const actions = {
    changeBackground: (background: string) => ({type: SET_BACKGROUND, background} as const)
}

export default graphicsReducer