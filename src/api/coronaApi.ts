import axios from 'axios'
import {TStatisticWithId} from '../types/types'

type TCoronaStatistic = {
    ID: string
    Message: string
    Global: TStatisticWithId
    Countries: any[]
    Date: string
}

export const coronaAPI = {
    getCoronaStatistic() {
        return axios.get<TCoronaStatistic>('https://api.covid19api.com/summary')
            .then(response => response.data)
    }
}