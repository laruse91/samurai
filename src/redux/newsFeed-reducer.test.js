import newsFeedReducer, {deletePost, publicNewPost} from "./newsFeed-reducer";


const state = {
    posts: [
        {
            id: 1,
            user: {
                name: 'Anna',
                lastName: 'Stephany',
                photo: 'https://1.downloader.disk.yandex.ru/preview/bf4f83f40130cf368655b34f33653f6861b8622c245e9df017ce50c18cfcafb3/inf/YnQfhSEF1-F_NCFjrvvfQAolLid69i7r8hhjvKb3fPPxUJ77ls5NLGGPhdbcsdS03RzRa18sFj33-lri9jYFyQ%3D%3D?uid=81903395&filename=user-anna-stephani.jpg&disposition=inline&hash=&limit=0&content_type=image%2Fjpeg&owner_uid=81903395&tknv=v2&size=1349x625',
            },
            time: '15:22',
            content: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Consequatur ut blanditiis labore" +
                " minus sunt, nisi a officia sint impedit deserunt?",
            contentMedia: "https://1.downloader.disk.yandex.ru/preview/09fd1c141117318e4ca4f493406772e425adb7eb753bb31525957a2c39a9d8df/inf/CY1FFKPhy-6B8XEIYFPWLnSB7vNpiLj_HqcdkhAWlgieFaEN_AXFt7agLJMi9PFdL5FauAxzBPcDFG-pgrlBXg%3D%3D?uid=81903395&filename=user-content-photo1.jpg&disposition=inline&hash=&limit=0&content_type=image%2Fjpeg&owner_uid=81903395&tknv=v2&size=1349x625",
            contentMedia1: "https://2.downloader.disk.yandex.ru/preview/e96d4c97644436165cd8e4ebe08bd5d88fd9b9c55b5c2c7d4b1f614aedf22182/inf/7oTJ3TgNqqKn71UDJH9zPQnmeWnx9do1ZU6v209lqLFg7NwuxMYBss08t3nnkoT5g5GW5I0QqstrNXNUIS8oqQ%3D%3D?uid=81903395&filename=user-content-photo2.jpg&disposition=inline&hash=&limit=0&content_type=image%2Fjpeg&owner_uid=81903395&tknv=v2&size=1349x625",
            contentMedia2: "https://2.downloader.disk.yandex.ru/preview/173672bbecb3522c3281c9200efcf987c41bf1c486f30b2be8ffe3f9ce9b0a44/inf/gXoyHb0-uGYIfLxwi-_V8wolLid69i7r8hhjvKb3fPPq16h6JLw_G14g9rQK3mJfMKzB6Zowtch0sB7_pWGqfA%3D%3D?uid=81903395&filename=user-content-photo3.jpg&disposition=inline&hash=&limit=0&content_type=image%2Fjpeg&owner_uid=81903395&tknv=v2&size=1349x625",
            likesCount: 0,
            shareCount: 0,
            commentsCount: 0,

        },
    ],
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
            content: "It was the best party",
        },
    ],
    newComment: '',
}

test(`after adding new post, posts length should be increment`, () => {
    // start data
    let action = publicNewPost('Hello gays')
    // action
    let newState = newsFeedReducer(state, action)
    // expectations
    expect (newState.length = state.length + 1)
});

test(`after deleting post, posts length should be decrement`, () => {
    // start data
    let action = deletePost(1)
    // action
    let newState = newsFeedReducer(state, action)
    // expectations
    expect (newState.length = state.length - 1)
});
