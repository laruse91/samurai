import React, {useEffect} from 'react'
import style from './CoronaPage.module.css'
import {useDispatch, useSelector} from 'react-redux'
import {getStatistic} from '../../redux/corona-reducer'
import {selectStatistic} from '../../selectors/selectors'
import {Preloader} from '../../components/common/preloader/Preloader'

type TProps = {
    title: string
    value: number
}
const StatisticString: React.FC<TProps> = (props) => {
    return (
        <div className={style.string}>
            <p>{props.title}</p>
            <span>{props.value}</span>
        </div>
    )
}

const CoronaPage: React.FC = () => {
    const statistic = useSelector(selectStatistic)
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(getStatistic())
    }, [])

    return (
        <div className={style.corona}>
            <div className={style.block}>
                <h2 className={style.title}>
                    COVID-19
                </h2>
                <p>
                    The new coronavirus is a respiratory virus . It is transmitted mainly by airborne droplets as a
                    result of inhalation of droplets from the patient's airways, for example, when coughing or sneezing,
                    as well as droplets of saliva or nasal discharge. It can also spread when a sick person touches any
                    contaminated surface, such as a doorknob. In this case, infection occurs by touching the mouth, nose
                    or eyes with dirty hands.
                </p>
                <p>
                    You can find up-to-date information on the website <a href='https://covid19.who.int/'>World Health
                    Organization</a>
                </p>
            </div>
            <div className={style.statistic}>
                <h2 className={style.title}>
                    World Statistic today
                </h2>
                {!statistic
                ? <Preloader/>
                : statistic && Object.keys(statistic).map(key => {
                return (
                <StatisticString key={key} title={key} value={statistic[key]}/>)
            })
            }
            </div>
        </div>
    )
}

export default CoronaPage