import {TNavItem} from "./types/types";

const initialState = {
    navItems: [
            {
                id:1,
                item: 'NewsFeed',
                path: '/newsfeed',
                icon: "https://1.downloader.disk.yandex.ru/preview/4ad6c195b4b97fbaf16c6c5009dc29ebb1fef190ea82dc4ab13bb959b847d072/inf/_nIwz3yDgHVd9X-fAm-3pPRsxmgkPSPAc2pIRXeJEf-QcjhB3EWso4a34QzrXm-Bx_Ot4VNQM2NoRrcNedpFrg%3D%3D?uid=81903395&filename=user.png&disposition=inline&hash=&limit=0&content_type=image%2Fpng&owner_uid=81903395&tknv=v2&size=621x510"
            },
            {
                id:2,
                item: 'Profile',
                path: '/profile',
                icon: "https://1.downloader.disk.yandex.ru/preview/4ad6c195b4b97fbaf16c6c5009dc29ebb1fef190ea82dc4ab13bb959b847d072/inf/_nIwz3yDgHVd9X-fAm-3pPRsxmgkPSPAc2pIRXeJEf-QcjhB3EWso4a34QzrXm-Bx_Ot4VNQM2NoRrcNedpFrg%3D%3D?uid=81903395&filename=user.png&disposition=inline&hash=&limit=0&content_type=image%2Fpng&owner_uid=81903395&tknv=v2&size=621x510"
            },
            {
                id:3,
                item: 'Dialogs',
                path: '/dialogs',
                icon: "https://3.downloader.disk.yandex.ru/preview/a7da11c251405ed8cd5e6aa96bd9925fd80b0fdc62bbf6ef1648c4ae50e4c38b/inf/J6E2MIpjJA9VAJG06kHr9oFWAzbfp-fLy05bmuodEst1Mi4z1fWlcWvByzoS3A18KpwfixYQcesDnAgYEH-29Q%3D%3D?uid=81903395&filename=chat.png&disposition=inline&hash=&limit=0&content_type=image%2Fpng&owner_uid=81903395&tknv=v2&size=1263x577"
            },
            {
                id:4,
                item: 'Friends',
                path: '/friends',
                icon: "https://1.downloader.disk.yandex.ru/preview/b36518a172fdb33d1323b16d7db3887a23f7afcaef04f4798b440c28a4abe2c8/inf/wHmwxoeDZ1EursM1j_mVtYFhjPhj2ysFi_ybQPJ7XLJCHXGbdoj9S0zC4EYOye1dOR1JJOkjqCT1d3L3713Dig%3D%3D?uid=81903395&filename=friends.png&disposition=inline&hash=&limit=0&content_type=image%2Fpng&owner_uid=81903395&tknv=v2&size=621x510"
            },
            {
                id:5,
                item: 'Groups',
                path: '/groups',
                icon: "https://3.downloader.disk.yandex.ru/preview/2a644dae72209417e955453800aca87613c68f4a6fd2045afa8948090e1e48a7/inf/GJJZycv9mnnjhb7WDUbx-5-MW2hrCrZu2muvennxKZc_5-4Lb8UCc7afcDFQr3L2JxjqV9Segq5l5m-XC9c--A%3D%3D?uid=81903395&filename=group.png&disposition=inline&hash=&limit=0&content_type=image%2Fpng&owner_uid=81903395&tknv=v2&size=1263x577"
            },
            {
                id:6,
                item: 'Music',
                path: '/music',
                icon: "https://3.downloader.disk.yandex.ru/preview/00102055e62fb4fca11adbc3c0541f1d92b4bbe2b977ec379e7cf661e15ab636/inf/P2IxGmjJswHY_YhgPQPWbe34X5PFwn5JNXdKHJPp3HDvB_LXBFmukuNluinJStGaDf12Exu_tNUH6rLuzT9HrQ%3D%3D?uid=81903395&filename=rounded-headphones.png&disposition=inline&hash=&limit=0&content_type=image%2Fpng&owner_uid=81903395&tknv=v2&size=621x510"
            },
            {
                id:7,
                item: 'Videos',
                path: '/videos',
                icon: "https://1.downloader.disk.yandex.ru/preview/5f0431dd36d1b1387009405ad50cac96bbb9d795c01b00f63518db82af8e5ff1/inf/TjgLze1lPAHJwH8S5laVlfRsxmgkPSPAc2pIRXeJEf82IjwtATNFYvSthp59718qbmy2A3WTtn9YnI6tnjVs3A%3D%3D?uid=81903395&filename=video-player.png&disposition=inline&hash=&limit=0&content_type=image%2Fpng&owner_uid=81903395&tknv=v2&size=621x510"
            },
            {
                id:8,
                item: 'People',
                path: '/people',
                icon: "https://1.downloader.disk.yandex.ru/preview/bb491180647ec3a663fd43bb7540da8979b7ca552bd1a91505820bdff4ccc804/inf/-Z8m4L95CcRZeqDc99Pc9QolLid69i7r8hhjvKb3fPP4xZkLB2ThIdlPD82ZQGf2HF5q-R5vQ0fubgXqEqbLPQ%3D%3D?uid=81903395&filename=dossier.png&disposition=inline&hash=&limit=0&content_type=image%2Fpng&owner_uid=81903395&tknv=v2&size=621x510"
            },
            {
                id:9,
                item: 'Koronavirus',
                path: '/koronavirus',
                icon: "https://2.downloader.disk.yandex.ru/preview/562997694f10438c040f5270b6d744b69b5082d13f16cc05c398478dc24e74fd/inf/qy8k069zKvO4PXtGCuMnoWJ4Imw0DFeONjYMxkfQ_5w0xv-rHHfM7wFp6LkDtsvNCk01QW8juDNVpPOY78iuYQ%3D%3D?uid=81903395&filename=virus.png&disposition=inline&hash=&limit=0&content_type=image%2Fpng&owner_uid=81903395&tknv=v2&size=621x510"
            },
        ] as Array<TNavItem>,
};
export type TInitialState = typeof initialState


const navbarReducer = (state = initialState, action: any): TInitialState => {
    return state;
};

export default navbarReducer