import {TInitialStateMessage, TInitialStateUserType} from "./types/types";

const SEND_NEW_MESSAGE = 'dialogs/SEND-NEW-MESSAGE';

export type TInitialState = {
    messages: Array<TInitialStateMessage>
    users: Array<TInitialStateUserType>
}
let initialState: TInitialState = {
    messages: [

        {id: 1, content: 'Hi my friend',},
        {id: 2, content: 'How are you',},
        {id: 3, content: 'What\'s news',}
    ],
    users: [
        {
            name: 'Anna',
            lastName: 'Stephany',
            info: 'Just now',
            id: 6,
            photo: 'https://1.downloader.disk.yandex.ru/preview/bf4f83f40130cf368655b34f33653f6861b8622c245e9df017ce50c18cfcafb3/inf/YnQfhSEF1-F_NCFjrvvfQAolLid69i7r8hhjvKb3fPPxUJ77ls5NLGGPhdbcsdS03RzRa18sFj33-lri9jYFyQ%3D%3D?uid=81903395&filename=user-anna-stephani.jpg&disposition=inline&hash=&limit=0&content_type=image%2Fjpeg&owner_uid=81903395&tknv=v2&size=1349x625',
        },
        {
            name: 'Helena',
            lastName: 'Jackly',
            info: 'Just now',
            id: 1,
            photo: 'https://4.downloader.disk.yandex.ru/preview/094ccd40c9e4557a4a914ce119e1ee0aa3aa143f71ad52057be44a6583e9c0ed/inf/vCI1taciqDdxl-O7FW4UcoFhjPhj2ysFi_ybQPJ7XLLJ2r-S6PkGbMrRHnOvczSZn-XsSTp_AtE_aQtoO5lctA%3D%3D?uid=81903395&filename=user-profile.jpg&disposition=inline&hash=&limit=0&content_type=image%2Fjpeg&owner_uid=81903395&tknv=v2&size=1349x625',
        },
        {
            name: 'Ravi',
            lastName: 'Shroff',
            info: 'Just now',
            id: 2,
            photo: 'https://4.downloader.disk.yandex.ru/preview/5689927426fe57ce91dec5f82da8e7f50108364595a4ed76670b0c3ac0544311/inf/rAsAOF_tKjnUMZHlxj7Cw5-MW2hrCrZu2muvennxKZdfvun4PgJ4p8mjP0Z4qM3ZZ1RGYRxvco2m3ot_euApKg%3D%3D?uid=81903395&filename=user-ravi-shroff.jpg&disposition=inline&hash=&limit=0&content_type=image%2Fjpeg&owner_uid=81903395&tknv=v2&size=1349x625',
        },
        {
            name: 'Reda',
            lastName: 'Hamidi',
            info: 'Just now',
            id: 3,
            photo: 'https://1.downloader.disk.yandex.ru/preview/1152bb4a6d2b43037e69d607e7738d1d693cdd19595fb6655dfc29686e240077/inf/4tVKc9210iTycsFDCnb_8AolLid69i7r8hhjvKb3fPMD2j8ZdxqY26u4ehTWKrams-_Nu0cn3mnjNAabOBdQIQ%3D%3D?uid=81903395&filename=user-reda%20-hamidi.jpg&disposition=inline&hash=&limit=0&content_type=image%2Fjpeg&owner_uid=81903395&tknv=v2&size=1349x625',
        },
        {
            name: 'Lars',
            lastName: 'Nerland',
            info: 'Just now',
            id: 4,
            photo: 'https://3.downloader.disk.yandex.ru/preview/29759c02beafd0f9347a82334fcb14d35fc5d1035cba0d98f09841dd3d049e2d/inf/u6pAX_OKSZLUZ2qVOyoVVXSB7vNpiLj_HqcdkhAWlgjweJ22qil8v5xNOCaZSq3mxenTo_kjrRGqiqIFDmbfsw%3D%3D?uid=81903395&filename=user-lars-nerland.jpg&disposition=inline&hash=&limit=0&content_type=image%2Fjpeg&owner_uid=81903395&tknv=v2&size=1349x625',
        },
    ],
}

const dialogsReducer = (state = initialState, action: TActions): TInitialState => {
    switch (action.type) {
        case SEND_NEW_MESSAGE:
        type NewMessageType = null | {
            id: number
            content: string
        }
            const newMessage: NewMessageType = {
                id: state.messages[state.messages.length - 1].id + 1,
                content: action.newMessageBody
            };
            return {
                ...state,
                messages: [...state.messages, newMessage],
            }
        default:
            return state
    }
}
type TActions = SendNewMessageActionType // | other Action

// ActionCreators
type SendNewMessageActionType = {
    type: typeof SEND_NEW_MESSAGE,
    newMessageBody: string
}
export const sendNewMessage = (newMessageBody: string): SendNewMessageActionType => ({
    type: SEND_NEW_MESSAGE,
    newMessageBody
});

export default dialogsReducer;
