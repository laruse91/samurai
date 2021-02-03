import {TCombineActions, TGlobalState} from './store'
import data from '../db.json'
import {profileAPI} from '../api/profileApi'
import {ThunkAction} from 'redux-thunk'

export const PUBLIC_NEW_POST = 'posts/PUBLIC-NEW-POST'
const DELETE_POST = 'posts/DELETE-POST'
const SET_POST_OWNER = 'posts/SET-POST-OWNER'

export type TPost = {
    id: number
    userId: number
    postBody: string
    images?: string[]
}
export type TOwner = {
    userId: number
    name: string
    photo: string | null
}

const initialState = {
    posts: data.posts as Array<TPost>,
    postOwners: [] as TOwner[]
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
                posts: state.posts.filter(post => post.id !== action.postId)
            }
        case SET_POST_OWNER:
            return {
                ...state,
                postOwners: [...state.postOwners, ...action.owners]
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
    setPostOwners: (owners: TOwner[]) => ({
        type: SET_POST_OWNER,
        owners
    } as const)
}
//thunk
type TThunk = ThunkAction<void, TGlobalState, unknown, TActions>

export const getPostOwners = (ids: number[], owners: TOwner[] = []): TThunk => async (dispatch) => {
    for (let userId of ids) {
        const response = await profileAPI.getProfile(userId)
        let owner = {
            userId: userId,
            name: response.fullName,
            photo: response.photos.large
        }
        owners.push(owner)
    }
    dispatch(actions.setPostOwners(owners))
}

export default postsReducer