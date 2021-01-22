import React from 'react'
import style from './UserLabel.module.css'
import {Link} from 'react-router-dom'
import {Avatar} from 'antd'
import {styles} from '../../../styles/styles'

type TProps = {
    userId: number
    photo: string | null
    userName: string
    info?: string | null
}

export const UserLabel: React.FC<TProps> = (props) => {

    const path = `/profile/${props.userId}`

    return (
        <Link to={path} className={style.userCard}>
            <div className={style.userPhoto}>
                {props.photo
                    ? <Avatar size={50} src={props.photo}/>
                    : <Avatar size={50}
                              style={styles.avatar}>{props.userName ? props.userName.charAt(0).toUpperCase() : 'User'}</Avatar>
                }
            </div>

            <div className={style.description}>
                <h3 className={style.userName}>{props.userName}</h3>
                {props.info ? <span className={style.info}>{props.info}</span> : null}
            </div>
        </Link>
    )
}
