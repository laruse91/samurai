import {TCombineActions} from './redux-store'
import data from '../db.json'

const SET_BACKGROUND = 'firebase/SET_BACKGROUND'


const randomBackground = data.backgrounds[Math.round(1 + Math.random() * (data.backgrounds.length - 1))]

const initialState = {
    profileContactsIcons: data.profileContacts as { [key: string]: string },
    backgrounds: data.backgrounds as Array<string>,
    randomBackground: randomBackground as string
}

export type TInitialState = typeof initialState

const firebaseReducer = (state = initialState, action: TActions): TInitialState => {
    switch (action.type) {
        case SET_BACKGROUND:
            return {
                ...state, ...action.payload
            }
        default:
            return state
    }
}
type TActions = TCombineActions<typeof actions>

const actions = {
    setBackground: (backgrounds: string[]) => ({type: SET_BACKGROUND, payload: {backgrounds}} as const),

}

// type TThunk = ThunkAction<Promise<void>, TGlobalState, unknown, TActions>
// //todo: remove any
// export const getBackgrounds = (): TThunk => async (dispatch) => {
//     const storage = firebase.storage().ref('backgrounds')
//     const response: any = await storage.listAll()
//     const backgrounds = [] as Array<string>
//     const setUrls = async (item: any) => {
//        const url = await item.getDownloadURL()
//         backgrounds.push(url)
//     }
//     response.items.forEach((item: any) => setUrls(item))
//     dispatch(actions.setBackground(backgrounds))
// }
// export const getProfileContacts = (contacts: string[]): TThunk => async (dispatch) => {
//     const profileContacts = {} as { [key: string]: string }
//     for (let contact of contacts) {
//         const storage = firebase.storage().ref()
//         const url: string = await storage.child(`profileContacts/${contact}.png`).getDownloadURL()
//         profileContacts[contact] = url
//     }
//     dispatch(actions.setProfileContacts(profileContacts))
// }

export default firebaseReducer