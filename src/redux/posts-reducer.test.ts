import postsReducer, {actions} from './posts-reducer'

const state = {
    posts: [
        {
            id: 2,
            userId: 1456,
            postBody: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Consequatur ut blanditiis labore minus sunt, nisi a officia sint impedit deserunt?'
        },
        {
            id: 1,
            userId: 13182,
            postBody: 'My child is the wonderfull one',
            images: [
                'https://firebasestorage.googleapis.com/v0/b/samurai-socialnetwork.appspot.com/o/posts%2Fp3.jpg?alt=media&token=be1ffd3a-6b79-439a-96af-875d1014a2c4',
                'https://firebasestorage.googleapis.com/v0/b/samurai-socialnetwork.appspot.com/o/posts%2Fp2.jpg?alt=media&token=59f82e82-7965-4b07-8d34-2652d1d57cc1',
                'https://firebasestorage.googleapis.com/v0/b/samurai-socialnetwork.appspot.com/o/posts%2Fp1.jpg?alt=media&token=0aa35d0c-f89f-4f29-89c6-e053798c889c'
            ]
        }
    ],
    postOwners: [
        {
            userId: 1456,
            name: 'testName',
            photo: null
        },
        {
            userId: 13182,
            name: 'testName2',
            photo: null
        }
    ]
}

test('after adding new post, posts length should be increment', () => {
    // start data

    // action
    const newPost = {
        id: 3,
        userId: 12740,
        postBody: 'Hello'
    }
    const action = actions.publicNewPost(newPost)
    const newState = postsReducer(state, action)
    // expectations
    expect(newState.posts.length).toBe(newState.posts.length = state.posts.length + 1)
})

test('after deleting post, posts length should be decrement', () => {
    // start data

    // action
    const action = actions.deletePost(2)
    const newState = postsReducer(state, action)
    // expectations
    expect(newState.posts.length).toBe(newState.posts.length = state.posts.length - 1)
})
