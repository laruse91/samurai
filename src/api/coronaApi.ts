import axios from 'axios'
import {TStatisticWithId} from '../types/types'

type TCoronaStatistic = {
    ID: string
    Message: string
    Global: TStatisticWithId
    Countries: any[]
    Date: string
}
const instance = axios.create({
    baseURL: 'https://api.covid19api.com/',
    headers: {
        'X-Access-Token': '5cf9dfd5-3449-485e-b5ae-70a60e997864'
    }
})

export const coronaAPI = {
    getCoronaStatistic() {
        return instance.get<TCoronaStatistic>('summary')
            .then(response => response.data)
    }
}