import React from 'react'
import style from './OtherInfo.module.css'
import {useSelector} from 'react-redux'
import {selectOtherInfo} from '../../../selectors/selectors'

export const OtherInfo: React.FC = () => {

    const otherInfo = useSelector(selectOtherInfo)
    const events = otherInfo.map((item, i) => {
        return (
            <div className={style.event} key={i}>
                <img src={item.img} alt='ico'/>
                <h5>{item.title}</h5>
                <p>{item.date}</p>
            </div>)
    })

    return (

        <div className={style.block}>
            <div className={style.title}>
                <h2>Live event</h2>
                <button className={style.btn}>Create</button>
            </div>
            {events}
        </div>

    )
}