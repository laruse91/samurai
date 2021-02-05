import {TCombineActions, TGlobalState} from './store'
import {profileAPI} from '../api/profileApi'
import {ThunkAction} from 'redux-thunk'
import {db} from '../index'

export const PUBLIC_NEW_POST = 'posts/PUBLIC-NEW-POST'
const DELETE_POST = 'posts/DELETE-POST'
const SET_POST_OWNER = 'posts/SET-POST-OWNER'
const SET_POSTS = 'posts/SET_POSTS'

export type TPost = {
    id: string
    userId: number
    postBody: string
    images?: string[]
}
export type TOwners = {
    [userId: number]: { name: string, photo: string | null }
}

const initialState = {
    posts: [] as Array<TPost>,
    postOwners: null as TOwners | null
}

type TInitialState = typeof initialState

const postsReducer = (state = initialState, action: TActions): TInitialState => {
    switch (action.type) {
        case PUBLIC_NEW_POST:
            return {
                ...state,
                posts: [action.newPost, ...state.posts]
            }
        case DELETE_POST:
            return {
                ...state,
                posts: state.posts.filter(post => +post.id !== action.postId)
            }
        case SET_POST_OWNER:
        case SET_POSTS:
            return {
                ...state, ...action.payload
            }
        default:
            return state
    }
}

// Actions
type TActions = TCombineActions<typeof actions>

export const actions = {
    publicNewPost: (newPost: TPost) => ({
        type: PUBLIC_NEW_POST,
        newPost
    } as const),
    deletePost: (postId: number) => ({
        type: DELETE_POST,
        postId
    } as const),
    setPostOwners: (postOwners: TOwners) => ({
        type: SET_POST_OWNER,
        payload: {postOwners}
    } as const),
    setPosts: (posts: TPost[]) => ({
        type: SET_POSTS,
        payload: {posts}
    } as const)
}
//thunk
type TThunk = ThunkAction<void, TGlobalState, unknown, TActions>

export const requestPosts = (): TThunk => async (dispatch) => {
    const database = db.ref('posts')
    let posts: TPost[] = []
    await database.once('value', (el) => {
        posts = Object.values(el.val())
    })
    dispatch(actions.setPosts(posts.reverse()))

    const users = Array.from(new Set(posts.map(post => post.userId)))
    let owners: TOwners = {}
    for (let userId of users) {
        const response = await profileAPI.getProfile(userId)
        owners[userId] = {name: response.fullName, photo: response.photos.large}

    }
    dispatch(actions.setPostOwners(owners))
}
export const publicPost = (post: TPost): TThunk => async (dispatch) => {
    db.ref('posts').push(post)
    dispatch(actions.publicNewPost(post))
}

export default postsReducer