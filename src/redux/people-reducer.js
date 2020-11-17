const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET-USERS'

const initialState = {
    people: [
        {
            id: 1,
            name: 'Helena',
            lastName: 'Jackly',
            status: 'What is a beautiful day',
            followed: false,
            location: {
                city: 'New-York',
                country: 'USA',
            },
            photo: 'https://4.downloader.disk.yandex.ru/preview/094ccd40c9e4557a4a914ce119e1ee0aa3aa143f71ad52057be44a6583e9c0ed/inf/vCI1taciqDdxl-O7FW4UcoFhjPhj2ysFi_ybQPJ7XLLJ2r-S6PkGbMrRHnOvczSZn-XsSTp_AtE_aQtoO5lctA%3D%3D?uid=81903395&filename=user-profile.jpg&disposition=inline&hash=&limit=0&content_type=image%2Fjpeg&owner_uid=81903395&tknv=v2&size=1349x625'
        },
        {
            id: 2,
            name: 'Ravi',
            lastName: 'Shroff',
            status: 'Be happy - do not worry',
            followed: true,
            location: {
                city: 'Oslo',
                country: 'Norway',
            },

            photo: 'https://4.downloader.disk.yandex.ru/preview/5689927426fe57ce91dec5f82da8e7f50108364595a4ed76670b0c3ac0544311/inf/rAsAOF_tKjnUMZHlxj7Cw5-MW2hrCrZu2muvennxKZdfvun4PgJ4p8mjP0Z4qM3ZZ1RGYRxvco2m3ot_euApKg%3D%3D?uid=81903395&filename=user-ravi-shroff.jpg&disposition=inline&hash=&limit=0&content_type=image%2Fjpeg&owner_uid=81903395&tknv=v2&size=1349x625'
        },
        {
            id: 3,
            name: 'Reda',
            lastName: 'Hamidi',
            status: 'I do not know who is who',
            followed: true,
            location: {
                city: 'Rabat',
                country: 'Morocco',
            },
            photo: 'https://1.downloader.disk.yandex.ru/preview/1152bb4a6d2b43037e69d607e7738d1d693cdd19595fb6655dfc29686e240077/inf/4tVKc9210iTycsFDCnb_8AolLid69i7r8hhjvKb3fPMD2j8ZdxqY26u4ehTWKrams-_Nu0cn3mnjNAabOBdQIQ%3D%3D?uid=81903395&filename=user-reda%20-hamidi.jpg&disposition=inline&hash=&limit=0&content_type=image%2Fjpeg&owner_uid=81903395&tknv=v2&size=1349x625'
        },
        {
            id: 4,
            name: 'Anna',
            lastName: 'Stephany',
            status: 'I like music',
            followed: false,
            location: {
                city: 'Washington',
                country: 'USA',
            },
            photo: 'https://1.downloader.disk.yandex.ru/preview/bf4f83f40130cf368655b34f33653f6861b8622c245e9df017ce50c18cfcafb3/inf/YnQfhSEF1-F_NCFjrvvfQAolLid69i7r8hhjvKb3fPPxUJ77ls5NLGGPhdbcsdS03RzRa18sFj33-lri9jYFyQ%3D%3D?uid=81903395&filename=user-anna-stephani.jpg&disposition=inline&hash=&limit=0&content_type=image%2Fjpeg&owner_uid=81903395&tknv=v2&size=1349x625'
        },
        {
            id: 5,
            name: 'Andrew',
            lastName: 'Doet',
            status: 'I am a BigBoss',
            followed: true,
            location: {
                city: 'Paris',
                country: 'France',
            },
            photo: 'https://3.downloader.disk.yandex.ru/preview/6dc1e65524d6bb25126bc66937f242a228030a6985e4f606bdb43ccc621f1d19/inf/5l43w5Jn2u4z9It4tz-exnsUUazMmkT_kDFWgLOMPqhJmw4gI1s6ZhgLwtwi3UuAngVcqVvpwvqcJ0OVW-oxgw%3D%3D?uid=81903395&filename=user-andrew-duet.jpg&disposition=inline&hash=&limit=0&content_type=image%2Fjpeg&owner_uid=81903395&tknv=v2&size=1349x625'
        },
    ]

}

const peopleReducer = (state = initialState, action) => {
    switch (action.type) {
        case FOLLOW:
            return {
                ...state,
                users: state.users.map(user => {
                    if (user.id === action.userId) {
                        return {...user, followed: true}
                    }
                    return user;
                })
            };

        case UNFOLLOW:
            return {
                ...state,
                users: state.users.map(user => {
                    if (user.id === action.userId) {
                        return {...user, followed: false}
                    }
                    return user;
                })
            };

        case SET_USERS:
            return {
            ...state,
                users: [...state.users, ...action.users],
        }

        default:
            return state;
    }
};

export const followActionCreator = (userId) => ({
    type: FOLLOW,
    userId
});
export const unfollowActionCreator = (userId) => ({
    type: UNFOLLOW,
    userId
});
export const setUsersActionCreator = (users) => ({
    type: SET_USERS,
    users
});




export default peopleReducer;