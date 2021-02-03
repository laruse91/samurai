import {ThunkAction} from 'redux-thunk'
import {TCombineActions, TGlobalState} from './store'
import {coronaAPI} from '../api/coronaApi'
import {TStatistic} from '../types/types'

const SET_CORONA_STATISTIC = 'coronaPage/SET_CORONA_STATISTIC'

const initialState = {
    statistic: null as TStatistic | null,
}
export type TInitialState = typeof initialState

const coronaReducer = (state = initialState, action: TActions): TInitialState => {
    switch (action.type) {
        case SET_CORONA_STATISTIC:
            return {
                ...state,
                statistic: action.statistic
            }
        default:
            return state
    }
}

//actionCreators
type TActions = TCombineActions<typeof actions>

const actions = {
    setStatistic: (statistic: TStatistic) => ({
        type: SET_CORONA_STATISTIC,
        statistic
    } as const),

}

//thunks
type TThunk = ThunkAction<void, TGlobalState, unknown, TActions>

export const getStatistic = (): TThunk => async (dispatch) => {
    const response = await coronaAPI.getCoronaStatistic()
    delete response.Global.ID
    // @ts-ignore
    dispatch(actions.setStatistic(response.Global))
}

export default coronaReducer