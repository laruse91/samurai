import postsReducer from './posts-reducer'
import dialogsReducer from './dialogs-reducer'

let zz__store = {


    _state: {
        newsFeedPage: {
            posts: [
                {
                    id: '001',
                    user: {
                        name: 'Anna',
                        lastName: 'Stephany',
                        photo: 'https://1.downloader.disk.yandex.ru/preview/bf4f83f40130cf368655b34f33653f6861b8622c245e9df017ce50c18cfcafb3/inf/YnQfhSEF1-F_NCFjrvvfQAolLid69i7r8hhjvKb3fPPxUJ77ls5NLGGPhdbcsdS03RzRa18sFj33-lri9jYFyQ%3D%3D?uid=81903395&filename=user-anna-stephani.jpg&disposition=inline&hash=&limit=0&content_type=image%2Fjpeg&owner_uid=81903395&tknv=v2&size=1349x625',
                    },
                    time: '15:22',
                    content: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Consequatur ut blanditiis labore' +
                        ' minus sunt, nisi a officia sint impedit deserunt?',
                    contentMedia: 'https://1.downloader.disk.yandex.ru/preview/09fd1c141117318e4ca4f493406772e425adb7eb753bb31525957a2c39a9d8df/inf/CY1FFKPhy-6B8XEIYFPWLnSB7vNpiLj_HqcdkhAWlgieFaEN_AXFt7agLJMi9PFdL5FauAxzBPcDFG-pgrlBXg%3D%3D?uid=81903395&filename=user-content-photo1.jpg&disposition=inline&hash=&limit=0&content_type=image%2Fjpeg&owner_uid=81903395&tknv=v2&size=1349x625',
                    contentMedia1: 'https://2.downloader.disk.yandex.ru/preview/e96d4c97644436165cd8e4ebe08bd5d88fd9b9c55b5c2c7d4b1f614aedf22182/inf/7oTJ3TgNqqKn71UDJH9zPQnmeWnx9do1ZU6v209lqLFg7NwuxMYBss08t3nnkoT5g5GW5I0QqstrNXNUIS8oqQ%3D%3D?uid=81903395&filename=user-content-photo2.jpg&disposition=inline&hash=&limit=0&content_type=image%2Fjpeg&owner_uid=81903395&tknv=v2&size=1349x625',
                    contentMedia2: 'https://2.downloader.disk.yandex.ru/preview/173672bbecb3522c3281c9200efcf987c41bf1c486f30b2be8ffe3f9ce9b0a44/inf/gXoyHb0-uGYIfLxwi-_V8wolLid69i7r8hhjvKb3fPPq16h6JLw_G14g9rQK3mJfMKzB6Zowtch0sB7_pWGqfA%3D%3D?uid=81903395&filename=user-content-photo3.jpg&disposition=inline&hash=&limit=0&content_type=image%2Fjpeg&owner_uid=81903395&tknv=v2&size=1349x625',
                    likesCount: 0,
                    shareCount: 0,
                    commentsCount: 0,

                },
                {
                    id: '002',
                    user: {
                        name: 'Anna',
                        lastName: 'Stephany',
                        photo: 'https://1.downloader.disk.yandex.ru/preview/bf4f83f40130cf368655b34f33653f6861b8622c245e9df017ce50c18cfcafb3/inf/YnQfhSEF1-F_NCFjrvvfQAolLid69i7r8hhjvKb3fPPxUJ77ls5NLGGPhdbcsdS03RzRa18sFj33-lri9jYFyQ%3D%3D?uid=81903395&filename=user-anna-stephani.jpg&disposition=inline&hash=&limit=0&content_type=image%2Fjpeg&owner_uid=81903395&tknv=v2&size=1349x625',
                    },
                    time: '15:22',
                    content: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Consequatur ut blanditiis labore' +
                        ' minus sunt, nisi a officia sint impedit deserunt?',
                    contentMedia: 'https://1.downloader.disk.yandex.ru/preview/09fd1c141117318e4ca4f493406772e425adb7eb753bb31525957a2c39a9d8df/inf/CY1FFKPhy-6B8XEIYFPWLnSB7vNpiLj_HqcdkhAWlgieFaEN_AXFt7agLJMi9PFdL5FauAxzBPcDFG-pgrlBXg%3D%3D?uid=81903395&filename=user-content-photo1.jpg&disposition=inline&hash=&limit=0&content_type=image%2Fjpeg&owner_uid=81903395&tknv=v2&size=1349x625',
                    contentMedia1: 'https://2.downloader.disk.yandex.ru/preview/e96d4c97644436165cd8e4ebe08bd5d88fd9b9c55b5c2c7d4b1f614aedf22182/inf/7oTJ3TgNqqKn71UDJH9zPQnmeWnx9do1ZU6v209lqLFg7NwuxMYBss08t3nnkoT5g5GW5I0QqstrNXNUIS8oqQ%3D%3D?uid=81903395&filename=user-content-photo2.jpg&disposition=inline&hash=&limit=0&content_type=image%2Fjpeg&owner_uid=81903395&tknv=v2&size=1349x625',
                    contentMedia2: 'https://2.downloader.disk.yandex.ru/preview/173672bbecb3522c3281c9200efcf987c41bf1c486f30b2be8ffe3f9ce9b0a44/inf/gXoyHb0-uGYIfLxwi-_V8wolLid69i7r8hhjvKb3fPPq16h6JLw_G14g9rQK3mJfMKzB6Zowtch0sB7_pWGqfA%3D%3D?uid=81903395&filename=user-content-photo3.jpg&disposition=inline&hash=&limit=0&content_type=image%2Fjpeg&owner_uid=81903395&tknv=v2&size=1349x625',
                    likesCount: 0,
                    shareCount: 0,
                    commentsCount: 0,

                },
            ],
            newPost: '',
            currentUser: {
                name: 'Helena',
                lastName: 'Jackly',
                id: '001',
                photo: 'https://4.downloader.disk.yandex.ru/preview/094ccd40c9e4557a4a914ce119e1ee0aa3aa143f71ad52057be44a6583e9c0ed/inf/vCI1taciqDdxl-O7FW4UcoFhjPhj2ysFi_ybQPJ7XLLJ2r-S6PkGbMrRHnOvczSZn-XsSTp_AtE_aQtoO5lctA%3D%3D?uid=81903395&filename=user-profile.jpg&disposition=inline&hash=&limit=0&content_type=image%2Fjpeg&owner_uid=81903395&tknv=v2&size=1349x625'
            },

            postComments: [
                {
                    name: 'Lars',
                    lastName: 'Nerland',
                    id: '004',
                    photo: 'https://3.downloader.disk.yandex.ru/preview/29759c02beafd0f9347a82334fcb14d35fc5d1035cba0d98f09841dd3d049e2d/inf/u6pAX_OKSZLUZ2qVOyoVVXSB7vNpiLj_HqcdkhAWlgjweJ22qil8v5xNOCaZSq3mxenTo_kjrRGqiqIFDmbfsw%3D%3D?uid=81903395&filename=user-lars-nerland.jpg&disposition=inline&hash=&limit=0&content_type=image%2Fjpeg&owner_uid=81903395&tknv=v2&size=1349x625',
                    content: 'It was the best party',
                },
            ],
            newComment: '',
        },
        dialogsPage: {
            messages: [
                {id: '001', content: 'Hi my friend',},
                {id: '002', content: 'How are you',},
                {id: '003', content: 'What\'s news',}
            ],
            newMessage: '',
            users: [
                {
                    name: 'Helena',
                    lastName: 'Jackly',
                    id: '001',
                    photo: 'https://4.downloader.disk.yandex.ru/preview/094ccd40c9e4557a4a914ce119e1ee0aa3aa143f71ad52057be44a6583e9c0ed/inf/vCI1taciqDdxl-O7FW4UcoFhjPhj2ysFi_ybQPJ7XLLJ2r-S6PkGbMrRHnOvczSZn-XsSTp_AtE_aQtoO5lctA%3D%3D?uid=81903395&filename=user-profile.jpg&disposition=inline&hash=&limit=0&content_type=image%2Fjpeg&owner_uid=81903395&tknv=v2&size=1349x625'
                },
                {
                    name: 'Ravi',
                    lastName: 'Shroff',
                    id: '002',
                    photo: 'https://4.downloader.disk.yandex.ru/preview/5689927426fe57ce91dec5f82da8e7f50108364595a4ed76670b0c3ac0544311/inf/rAsAOF_tKjnUMZHlxj7Cw5-MW2hrCrZu2muvennxKZdfvun4PgJ4p8mjP0Z4qM3ZZ1RGYRxvco2m3ot_euApKg%3D%3D?uid=81903395&filename=user-ravi-shroff.jpg&disposition=inline&hash=&limit=0&content_type=image%2Fjpeg&owner_uid=81903395&tknv=v2&size=1349x625'
                },
                {
                    name: 'Reda',
                    lastName: 'Hamidi',
                    id: '003',
                    photo: 'https://1.downloader.disk.yandex.ru/preview/1152bb4a6d2b43037e69d607e7738d1d693cdd19595fb6655dfc29686e240077/inf/4tVKc9210iTycsFDCnb_8AolLid69i7r8hhjvKb3fPMD2j8ZdxqY26u4ehTWKrams-_Nu0cn3mnjNAabOBdQIQ%3D%3D?uid=81903395&filename=user-reda%20-hamidi.jpg&disposition=inline&hash=&limit=0&content_type=image%2Fjpeg&owner_uid=81903395&tknv=v2&size=1349x625'
                },
                {
                    name: 'Lars',
                    lastName: 'Nerland',
                    id: '004',
                    photo: 'https://3.downloader.disk.yandex.ru/preview/29759c02beafd0f9347a82334fcb14d35fc5d1035cba0d98f09841dd3d049e2d/inf/u6pAX_OKSZLUZ2qVOyoVVXSB7vNpiLj_HqcdkhAWlgjweJ22qil8v5xNOCaZSq3mxenTo_kjrRGqiqIFDmbfsw%3D%3D?uid=81903395&filename=user-lars-nerland.jpg&disposition=inline&hash=&limit=0&content_type=image%2Fjpeg&owner_uid=81903395&tknv=v2&size=1349x625'
                },
                {
                    name: 'Victor',
                    lastName: 'Molive',
                    id: '005',
                    photo: 'https://1.downloader.disk.yandex.ru/preview/905c3fb8092af08f4e00cc9c314575a2daa6b99a10429af89c79410b33a1e5ee/inf/wsFeQSRfwow5-hg6wI-rlgolLid69i7r8hhjvKb3fPPuHeNpy3TpYLdtmSLdp0zI4WxeHr4gA9mmuJx4M-tPOg%3D%3D?uid=81903395&filename=user-victor-molive.jpg&disposition=inline&hash=&limit=0&content_type=image%2Fjpeg&owner_uid=81903395&tknv=v2&size=1349x625'
                },
                {
                    name: 'Anna',
                    lastName: 'Stephany',
                    id: '006',
                    photo: 'https://1.downloader.disk.yandex.ru/preview/bf4f83f40130cf368655b34f33653f6861b8622c245e9df017ce50c18cfcafb3/inf/YnQfhSEF1-F_NCFjrvvfQAolLid69i7r8hhjvKb3fPPxUJ77ls5NLGGPhdbcsdS03RzRa18sFj33-lri9jYFyQ%3D%3D?uid=81903395&filename=user-anna-stephani.jpg&disposition=inline&hash=&limit=0&content_type=image%2Fjpeg&owner_uid=81903395&tknv=v2&size=1349x625'
                },
                {
                    name: 'Andrew',
                    lastName: 'Doet',
                    id: '007',
                    photo: 'https://3.downloader.disk.yandex.ru/preview/6dc1e65524d6bb25126bc66937f242a228030a6985e4f606bdb43ccc621f1d19/inf/5l43w5Jn2u4z9It4tz-exnsUUazMmkT_kDFWgLOMPqhJmw4gI1s6ZhgLwtwi3UuAngVcqVvpwvqcJ0OVW-oxgw%3D%3D?uid=81903395&filename=user-andrew-duet.jpg&disposition=inline&hash=&limit=0&content_type=image%2Fjpeg&owner_uid=81903395&tknv=v2&size=1349x625'
                },
            ],
        },
        navbar: {
            navItems: [
                {
                    item: 'NewsFeed',
                    path: '/newsfeed',
                    img: 'https://1.downloader.disk.yandex.ru/preview/4ad6c195b4b97fbaf16c6c5009dc29ebb1fef190ea82dc4ab13bb959b847d072/inf/_nIwz3yDgHVd9X-fAm-3pPRsxmgkPSPAc2pIRXeJEf-QcjhB3EWso4a34QzrXm-Bx_Ot4VNQM2NoRrcNedpFrg%3D%3D?uid=81903395&filename=user.png&disposition=inline&hash=&limit=0&content_type=image%2Fpng&owner_uid=81903395&tknv=v2&size=621x510'
                },
                {
                    item: 'Profile',
                    path: '/profilePage',
                    img: 'https://1.downloader.disk.yandex.ru/preview/4ad6c195b4b97fbaf16c6c5009dc29ebb1fef190ea82dc4ab13bb959b847d072/inf/_nIwz3yDgHVd9X-fAm-3pPRsxmgkPSPAc2pIRXeJEf-QcjhB3EWso4a34QzrXm-Bx_Ot4VNQM2NoRrcNedpFrg%3D%3D?uid=81903395&filename=user.png&disposition=inline&hash=&limit=0&content_type=image%2Fpng&owner_uid=81903395&tknv=v2&size=621x510'
                },
                {
                    item: 'Dialogs',
                    path: '/dialogsPage',
                    img: 'https://3.downloader.disk.yandex.ru/preview/a7da11c251405ed8cd5e6aa96bd9925fd80b0fdc62bbf6ef1648c4ae50e4c38b/inf/J6E2MIpjJA9VAJG06kHr9oFWAzbfp-fLy05bmuodEst1Mi4z1fWlcWvByzoS3A18KpwfixYQcesDnAgYEH-29Q%3D%3D?uid=81903395&filename=chat.png&disposition=inline&hash=&limit=0&content_type=image%2Fpng&owner_uid=81903395&tknv=v2&size=1263x577'
                },
                {
                    item: 'Friends',
                    path: '/friends',
                    img: 'https://1.downloader.disk.yandex.ru/preview/b36518a172fdb33d1323b16d7db3887a23f7afcaef04f4798b440c28a4abe2c8/inf/wHmwxoeDZ1EursM1j_mVtYFhjPhj2ysFi_ybQPJ7XLJCHXGbdoj9S0zC4EYOye1dOR1JJOkjqCT1d3L3713Dig%3D%3D?uid=81903395&filename=friends.png&disposition=inline&hash=&limit=0&content_type=image%2Fpng&owner_uid=81903395&tknv=v2&size=621x510'
                },
                {
                    item: 'Groups',
                    path: '/groups',
                    img: 'https://3.downloader.disk.yandex.ru/preview/2a644dae72209417e955453800aca87613c68f4a6fd2045afa8948090e1e48a7/inf/GJJZycv9mnnjhb7WDUbx-5-MW2hrCrZu2muvennxKZc_5-4Lb8UCc7afcDFQr3L2JxjqV9Segq5l5m-XC9c--A%3D%3D?uid=81903395&filename=group.png&disposition=inline&hash=&limit=0&content_type=image%2Fpng&owner_uid=81903395&tknv=v2&size=1263x577'
                },
                {
                    item: 'Music',
                    path: '/music',
                    img: 'https://3.downloader.disk.yandex.ru/preview/00102055e62fb4fca11adbc3c0541f1d92b4bbe2b977ec379e7cf661e15ab636/inf/P2IxGmjJswHY_YhgPQPWbe34X5PFwn5JNXdKHJPp3HDvB_LXBFmukuNluinJStGaDf12Exu_tNUH6rLuzT9HrQ%3D%3D?uid=81903395&filename=rounded-headphones.png&disposition=inline&hash=&limit=0&content_type=image%2Fpng&owner_uid=81903395&tknv=v2&size=621x510'
                },
                {
                    item: 'Videos',
                    path: '/videos',
                    img: 'https://1.downloader.disk.yandex.ru/preview/5f0431dd36d1b1387009405ad50cac96bbb9d795c01b00f63518db82af8e5ff1/inf/TjgLze1lPAHJwH8S5laVlfRsxmgkPSPAc2pIRXeJEf82IjwtATNFYvSthp59718qbmy2A3WTtn9YnI6tnjVs3A%3D%3D?uid=81903395&filename=video-player.png&disposition=inline&hash=&limit=0&content_type=image%2Fpng&owner_uid=81903395&tknv=v2&size=621x510'
                },
                {
                    item: 'Files',
                    path: '/files',
                    img: 'https://1.downloader.disk.yandex.ru/preview/bb491180647ec3a663fd43bb7540da8979b7ca552bd1a91505820bdff4ccc804/inf/-Z8m4L95CcRZeqDc99Pc9QolLid69i7r8hhjvKb3fPP4xZkLB2ThIdlPD82ZQGf2HF5q-R5vQ0fubgXqEqbLPQ%3D%3D?uid=81903395&filename=dossier.png&disposition=inline&hash=&limit=0&content_type=image%2Fpng&owner_uid=81903395&tknv=v2&size=621x510'
                },
                {
                    item: 'Koronavirus',
                    path: '/koronavirus',
                    img: 'https://2.downloader.disk.yandex.ru/preview/562997694f10438c040f5270b6d744b69b5082d13f16cc05c398478dc24e74fd/inf/qy8k069zKvO4PXtGCuMnoWJ4Imw0DFeONjYMxkfQ_5w0xv-rHHfM7wFp6LkDtsvNCk01QW8juDNVpPOY78iuYQ%3D%3D?uid=81903395&filename=virus.png&disposition=inline&hash=&limit=0&content_type=image%2Fpng&owner_uid=81903395&tknv=v2&size=621x510'
                },
            ],
        },
        sidebar: {},
        header: {},
        userData: [
            {
                name: 'Helena',
                lastName: 'Jackly',
                id: '001',
                photo: 'https://4.downloader.disk.yandex.ru/preview/094ccd40c9e4557a4a914ce119e1ee0aa3aa143f71ad52057be44a6583e9c0ed/inf/vCI1taciqDdxl-O7FW4UcoFhjPhj2ysFi_ybQPJ7XLLJ2r-S6PkGbMrRHnOvczSZn-XsSTp_AtE_aQtoO5lctA%3D%3D?uid=81903395&filename=user-profile.jpg&disposition=inline&hash=&limit=0&content_type=image%2Fjpeg&owner_uid=81903395&tknv=v2&size=1349x625'
            },
            {
                name: 'Ravi',
                lastName: 'Shroff',
                id: '002',
                photo: 'https://4.downloader.disk.yandex.ru/preview/5689927426fe57ce91dec5f82da8e7f50108364595a4ed76670b0c3ac0544311/inf/rAsAOF_tKjnUMZHlxj7Cw5-MW2hrCrZu2muvennxKZdfvun4PgJ4p8mjP0Z4qM3ZZ1RGYRxvco2m3ot_euApKg%3D%3D?uid=81903395&filename=user-ravi-shroff.jpg&disposition=inline&hash=&limit=0&content_type=image%2Fjpeg&owner_uid=81903395&tknv=v2&size=1349x625'
            },
            {
                name: 'Reda',
                lastName: 'Hamidi',
                id: '003',
                photo: 'https://1.downloader.disk.yandex.ru/preview/1152bb4a6d2b43037e69d607e7738d1d693cdd19595fb6655dfc29686e240077/inf/4tVKc9210iTycsFDCnb_8AolLid69i7r8hhjvKb3fPMD2j8ZdxqY26u4ehTWKrams-_Nu0cn3mnjNAabOBdQIQ%3D%3D?uid=81903395&filename=user-reda%20-hamidi.jpg&disposition=inline&hash=&limit=0&content_type=image%2Fjpeg&owner_uid=81903395&tknv=v2&size=1349x625'
            },
            {
                name: 'Lars',
                lastName: 'Nerland',
                id: '004',
                photo: 'https://3.downloader.disk.yandex.ru/preview/29759c02beafd0f9347a82334fcb14d35fc5d1035cba0d98f09841dd3d049e2d/inf/u6pAX_OKSZLUZ2qVOyoVVXSB7vNpiLj_HqcdkhAWlgjweJ22qil8v5xNOCaZSq3mxenTo_kjrRGqiqIFDmbfsw%3D%3D?uid=81903395&filename=user-lars-nerland.jpg&disposition=inline&hash=&limit=0&content_type=image%2Fjpeg&owner_uid=81903395&tknv=v2&size=1349x625'
            },
            {
                name: 'Victor',
                lastName: 'Molive',
                id: '005',
                photo: 'https://1.downloader.disk.yandex.ru/preview/905c3fb8092af08f4e00cc9c314575a2daa6b99a10429af89c79410b33a1e5ee/inf/wsFeQSRfwow5-hg6wI-rlgolLid69i7r8hhjvKb3fPPuHeNpy3TpYLdtmSLdp0zI4WxeHr4gA9mmuJx4M-tPOg%3D%3D?uid=81903395&filename=user-victor-molive.jpg&disposition=inline&hash=&limit=0&content_type=image%2Fjpeg&owner_uid=81903395&tknv=v2&size=1349x625'
            },
            {
                name: 'Anna',
                lastName: 'Stephany',
                id: '006',
                photo: 'https://1.downloader.disk.yandex.ru/preview/bf4f83f40130cf368655b34f33653f6861b8622c245e9df017ce50c18cfcafb3/inf/YnQfhSEF1-F_NCFjrvvfQAolLid69i7r8hhjvKb3fPPxUJ77ls5NLGGPhdbcsdS03RzRa18sFj33-lri9jYFyQ%3D%3D?uid=81903395&filename=user-anna-stephani.jpg&disposition=inline&hash=&limit=0&content_type=image%2Fjpeg&owner_uid=81903395&tknv=v2&size=1349x625'
            },
            {
                name: 'Andrew',
                lastName: 'Doet',
                id: '007',
                photo: 'https://3.downloader.disk.yandex.ru/preview/6dc1e65524d6bb25126bc66937f242a228030a6985e4f606bdb43ccc621f1d19/inf/5l43w5Jn2u4z9It4tz-exnsUUazMmkT_kDFWgLOMPqhJmw4gI1s6ZhgLwtwi3UuAngVcqVvpwvqcJ0OVW-oxgw%3D%3D?uid=81903395&filename=user-andrew-duet.jpg&disposition=inline&hash=&limit=0&content_type=image%2Fjpeg&owner_uid=81903395&tknv=v2&size=1349x625'
            },
        ],
    },

    _callSubscriber() {

    },
    getState() {
        return this._state
    },
    subscribe(observer) {
        this._callSubscriber = observer
    },

    dispatch(action) {
        this._state.newsFeedPage = postsReducer(this._state.newsFeedPage, action)
        this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action)
        this._callSubscriber(this._state)
    },
}

export default zz__store
window.store = zz__store
