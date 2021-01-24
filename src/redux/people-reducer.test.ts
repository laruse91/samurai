import peopleReducer, {actions, follow, InitialStateType, unfollow} from './people-reducer'
import {usersAPI} from '../api/usersApi'
import {ResultCode, TResponse} from '../api/api'

let state: InitialStateType
beforeEach(() => {
    state = {
        users: [
            {id: 1, name: 'testName1', followed: false, status: 'testStatus', photos: {small: null, large: null}},
            {id: 2, name: 'testName2', followed: false, status: 'testStatus', photos: {small: null, large: null}},
            {id: 3, name: 'testName3', followed: true, status: 'testStatus', photos: {small: null, large: null}},
            {id: 4, name: 'testName4', followed: true, status: 'testStatus', photos: {small: null, large: null}}
        ],
        totalUsers: 0,
        isFetching: true,
        followingInProgress: [],
        filter: {
            term: '',
            friend: null
        }}
})

//ActionCreators Tests
test('followSuccess', () => {
    // start data
    // action
    const newState: any = peopleReducer(state, actions.followSuccess(2))
    // expectations
    expect(newState.users[0].followed).toBeFalsy()
    expect(newState.users[1].followed).toBeTruthy()
})
test('unfollowSuccess', () => {
    // start data
    // action
    const newState: any = peopleReducer(state, actions.unfollowSuccess(3))
    // expectations
    expect(newState.users[2].followed).toBeFalsy()
    expect(newState.users[3].followed).toBeTruthy()
})

// Thunks tests
jest.mock('../api/usersApi')
const usersAPIMock = usersAPI as jest.Mocked<typeof usersAPI>
const response: TResponse = {
    resultCode: 0,
    messages: [],
    data: {},
}

usersAPIMock.follow.mockReturnValue(Promise.resolve(response))
usersAPIMock.unfollow.mockReturnValue(Promise.resolve(response))

const dispatchMock = jest.fn()
const getStateMock = jest.fn()
beforeEach(()=> {
    dispatchMock.mockClear()
    getStateMock.mockClear()
    }
)

test('followThunk', async () => {
    const thunk = follow(1)

    await thunk(dispatchMock, getStateMock, {})
    expect(dispatchMock).toBeCalledTimes(3)

    expect(dispatchMock).toHaveBeenNthCalledWith(1, actions.toggleIsFollowing(true, 1))
    expect(dispatchMock).toHaveBeenNthCalledWith(2, actions.followSuccess(1))
    expect(dispatchMock).toHaveBeenNthCalledWith(3, actions.toggleIsFollowing(false, 1))
})
test('unfollowThunk', async () => {
    const thunk = unfollow(3)

    await thunk(dispatchMock, getStateMock, {})
    expect(dispatchMock).toBeCalledTimes(3)

    expect(dispatchMock).toHaveBeenNthCalledWith(1, actions.toggleIsFollowing(true, 3))
    expect(dispatchMock).toHaveBeenNthCalledWith(2, actions.unfollowSuccess(3))
    expect(dispatchMock).toHaveBeenNthCalledWith(3, actions.toggleIsFollowing(false, 3))
})