import {TNavItem} from '../types/types'
import data from '../db.json'


const initialState = {
    navItems: data.navItems as Array<TNavItem>
}
export type TInitialState = typeof initialState

const navbarReducer = (state = initialState): TInitialState => {
    return state
}

export default navbarReducer