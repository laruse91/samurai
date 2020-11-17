const SEND_MESSAGE = 'SEND-MESSAGE';
const ADD_MESSAGE_TEXT = 'ADD-MESSAGE-TEXT';

const initialState = {
    messages: [

        {id: '001', content: 'Hi my friend',},
        {id: '002', content: 'How are you',},
        {id: '003', content: 'What\'s news',}
    ],
    newMessage: '',
    users: [
        {
            name: 'Anna',
            lastName: 'Stephany',
            id: '006',
            photo: 'https://1.downloader.disk.yandex.ru/preview/bf4f83f40130cf368655b34f33653f6861b8622c245e9df017ce50c18cfcafb3/inf/YnQfhSEF1-F_NCFjrvvfQAolLid69i7r8hhjvKb3fPPxUJ77ls5NLGGPhdbcsdS03RzRa18sFj33-lri9jYFyQ%3D%3D?uid=81903395&filename=user-anna-stephani.jpg&disposition=inline&hash=&limit=0&content_type=image%2Fjpeg&owner_uid=81903395&tknv=v2&size=1349x625',
        },
        {
            name: 'Helena',
            lastName: 'Jackly',
            id: '001',
            photo: 'https://4.downloader.disk.yandex.ru/preview/094ccd40c9e4557a4a914ce119e1ee0aa3aa143f71ad52057be44a6583e9c0ed/inf/vCI1taciqDdxl-O7FW4UcoFhjPhj2ysFi_ybQPJ7XLLJ2r-S6PkGbMrRHnOvczSZn-XsSTp_AtE_aQtoO5lctA%3D%3D?uid=81903395&filename=user-profile.jpg&disposition=inline&hash=&limit=0&content_type=image%2Fjpeg&owner_uid=81903395&tknv=v2&size=1349x625',
        },
        {
            name: 'Ravi',
            lastName: 'Shroff',
            id: '002',
            photo: 'https://4.downloader.disk.yandex.ru/preview/5689927426fe57ce91dec5f82da8e7f50108364595a4ed76670b0c3ac0544311/inf/rAsAOF_tKjnUMZHlxj7Cw5-MW2hrCrZu2muvennxKZdfvun4PgJ4p8mjP0Z4qM3ZZ1RGYRxvco2m3ot_euApKg%3D%3D?uid=81903395&filename=user-ravi-shroff.jpg&disposition=inline&hash=&limit=0&content_type=image%2Fjpeg&owner_uid=81903395&tknv=v2&size=1349x625',
        },
        {
            name: 'Reda',
            lastName: 'Hamidi',
            id: '003',
            photo: 'https://1.downloader.disk.yandex.ru/preview/1152bb4a6d2b43037e69d607e7738d1d693cdd19595fb6655dfc29686e240077/inf/4tVKc9210iTycsFDCnb_8AolLid69i7r8hhjvKb3fPMD2j8ZdxqY26u4ehTWKrams-_Nu0cn3mnjNAabOBdQIQ%3D%3D?uid=81903395&filename=user-reda%20-hamidi.jpg&disposition=inline&hash=&limit=0&content_type=image%2Fjpeg&owner_uid=81903395&tknv=v2&size=1349x625',
        },
        {
            name: 'Lars',
            lastName: 'Nerland',
            id: '004',
            photo: 'https://3.downloader.disk.yandex.ru/preview/29759c02beafd0f9347a82334fcb14d35fc5d1035cba0d98f09841dd3d049e2d/inf/u6pAX_OKSZLUZ2qVOyoVVXSB7vNpiLj_HqcdkhAWlgjweJ22qil8v5xNOCaZSq3mxenTo_kjrRGqiqIFDmbfsw%3D%3D?uid=81903395&filename=user-lars-nerland.jpg&disposition=inline&hash=&limit=0&content_type=image%2Fjpeg&owner_uid=81903395&tknv=v2&size=1349x625',
        },
    ],
}

const dialogsReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_MESSAGE_TEXT:
            return {
                ...state,
                newMessage: action.newMessageText,
            };
        case SEND_MESSAGE:
            const newMessage = {
                id: '002',
                content: state.newMessage
            };
            return {
                ...state,
                messages: [...state.messages, newMessage],
                newMessage: '',
            }
        default:
            return state
    }
}

export const messageTextUpdateActionCreator = (text) => ({
    type: ADD_MESSAGE_TEXT,
    newMessageText: text,
});
export const sendMessageActionCreator = () => ({type: SEND_MESSAGE});

export default dialogsReducer;
