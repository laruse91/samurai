import {TCombineActions, TGlobalState} from './redux-store'
import data from '../db.json'
import {ThunkAction} from 'redux-thunk'
import {profileAPI} from '../api/profileApi'

const SEND_NEW_MESSAGE = 'dialogsPage/SEND-NEW-MESSAGE'
const SET_COMPANION = 'dialogsPage/SET-COMPANION'

export type TMessages = {
    id: number
    body: string
    userId: number
}
export type TDialogsUser = {
    userId: number
    userName: string
    userPhoto: string | null
    info?: string

}

const initialState = {
    messages: data.messages as TMessages[],
    companions: [] as TDialogsUser[],
    users: [
        {
            userName: 'Anna Stephany',
            userId: 6,
            userPhoto: 'https://1.downloader.disk.yandex.ru/preview/bf4f83f40130cf368655b34f33653f6861b8622c245e9df017ce50c18cfcafb3/inf/YnQfhSEF1-F_NCFjrvvfQAolLid69i7r8hhjvKb3fPPxUJ77ls5NLGGPhdbcsdS03RzRa18sFj33-lri9jYFyQ%3D%3D?uid=81903395&filename=user-anna-stephani.jpg&disposition=inline&hash=&limit=0&content_type=image%2Fjpeg&owner_uid=81903395&tknv=v2&size=1349x625',
        },
        {
            userName: 'Helena Jackly',
            userId: 1,
            userPhoto: 'https://4.downloader.disk.yandex.ru/preview/094ccd40c9e4557a4a914ce119e1ee0aa3aa143f71ad52057be44a6583e9c0ed/inf/vCI1taciqDdxl-O7FW4UcoFhjPhj2ysFi_ybQPJ7XLLJ2r-S6PkGbMrRHnOvczSZn-XsSTp_AtE_aQtoO5lctA%3D%3D?uid=81903395&filename=user-profile.jpg&disposition=inline&hash=&limit=0&content_type=image%2Fjpeg&owner_uid=81903395&tknv=v2&size=1349x625',
        },
        {
            userName: 'Ravi Shroff',
            userId: 2,
            userPhoto: 'https://4.downloader.disk.yandex.ru/preview/5689927426fe57ce91dec5f82da8e7f50108364595a4ed76670b0c3ac0544311/inf/rAsAOF_tKjnUMZHlxj7Cw5-MW2hrCrZu2muvennxKZdfvun4PgJ4p8mjP0Z4qM3ZZ1RGYRxvco2m3ot_euApKg%3D%3D?uid=81903395&filename=user-ravi-shroff.jpg&disposition=inline&hash=&limit=0&content_type=image%2Fjpeg&owner_uid=81903395&tknv=v2&size=1349x625',
        },
        {
            userName: 'Reda Hamidi',
            userId: 3,
            userPhoto: 'https://1.downloader.disk.yandex.ru/preview/1152bb4a6d2b43037e69d607e7738d1d693cdd19595fb6655dfc29686e240077/inf/4tVKc9210iTycsFDCnb_8AolLid69i7r8hhjvKb3fPMD2j8ZdxqY26u4ehTWKrams-_Nu0cn3mnjNAabOBdQIQ%3D%3D?uid=81903395&filename=user-reda%20-hamidi.jpg&disposition=inline&hash=&limit=0&content_type=image%2Fjpeg&owner_uid=81903395&tknv=v2&size=1349x625',
        },
        {
            userName: 'Lars Nerland',
            userId: 4,
            userPhoto: 'https://3.downloader.disk.yandex.ru/preview/29759c02beafd0f9347a82334fcb14d35fc5d1035cba0d98f09841dd3d049e2d/inf/u6pAX_OKSZLUZ2qVOyoVVXSB7vNpiLj_HqcdkhAWlgjweJ22qil8v5xNOCaZSq3mxenTo_kjrRGqiqIFDmbfsw%3D%3D?uid=81903395&filename=user-lars-nerland.jpg&disposition=inline&hash=&limit=0&content_type=image%2Fjpeg&owner_uid=81903395&tknv=v2&size=1349x625',
        },
    ] as TDialogsUser[],
}

export type TInitialState = typeof initialState

const dialogsReducer = (state = initialState, action: TActions): TInitialState => {
    switch (action.type) {
        case SEND_NEW_MESSAGE:
            return {
                ...state,
                messages: [...state.messages, action.message]
            }
        case SET_COMPANION:
            return {
                ...state,
                companions: [...state.companions, ...action.companions]
            }
        default:
            return state
    }
}

// ActionCreators
type TActions = TCombineActions<typeof actions>

export const actions = {
    sendNewMessage: (message: TMessages) => ({
        type: SEND_NEW_MESSAGE,
        message
    } as const),
    setCompanions: (companions: TDialogsUser[]) => ({
        type: SET_COMPANION,
        companions
    } as const)
}
//thunk
type TThunk = ThunkAction<void, TGlobalState, unknown, TActions>

export const getCompanions = (ids: number[], companions: TDialogsUser[] = []): TThunk => async (dispatch) => {
    for (let userId of ids) {
        const response = await profileAPI.getProfile(userId)
        let companion: TDialogsUser = {
            userId: userId,
            userName: response.fullName,
            userPhoto: response.photos.large
        }
        companions.push(companion)
    }
    dispatch(actions.setCompanions(companions))
}

export default dialogsReducer
