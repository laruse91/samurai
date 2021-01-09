import React from 'react'
import style from './UserLabel.module.css'
import {NavLink} from 'react-router-dom'
import {Avatar} from 'antd'
import {styles} from '../../../styles/styles'

//todo: find solution to solve TS errors while using antDesigned components

type TProps = {
    id: number
    photo: string | null
    userName: string
    info?: string | null
}

export const UserLabel: React.FC<TProps> = (props) => {
    const path = `/profile/${props.id}`

    return (
        <div className={style.userCard}>
            <NavLink to={path} className={style.userCard}>
                {props.photo
                    // @ts-ignore
                    ? <Avatar size={50} src={props.photo}/>
                    // @ts-ignore
                    : <Avatar size={50} style={styles.avatar}>{props.userName.charAt(0).toUpperCase()}</Avatar>
                }
                <div className={style.description}>
                    <h3 className={style.userName}>{props.userName}</h3>
                    <span className={style.info}>{props.info ? props.info : 'Front-end developer'}</span>
                </div>
            </NavLink>
        </div>
    )
}
