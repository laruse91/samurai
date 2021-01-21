import React from 'react'
import style from './MessageCard.module.css'
import {styles} from '../../styles/styles'
import {Avatar} from 'antd'
import {useSelector} from 'react-redux'
import {selectAuthorizedUser} from '../../selectors/selectors'

type TProps = {
    userId: number
    photo: string | null
    message: string
    userName: string
    withUserName?: boolean
}

export const MessageCard: React.FC<TProps> = (props) => {
    const authorizedUser = useSelector(selectAuthorizedUser)

    return (
        <div className={props.userId === authorizedUser.userId
            ? style.myMessageCard : style.messageCard}>

            <div className={style.userPhoto}>
                {props.photo
                    // @ts-ignore
                    ? <Avatar size={50} src={props.photo}/>
                    // @ts-ignore
                    : <Avatar size={50} style={styles.avatar}>{props.userName ? props.userName.charAt(0).toUpperCase() : 'User'}</Avatar>
                }
            </div>

            <div className={props.userId === authorizedUser.userId
                ? style.myMessage : style.message}>
                {props.withUserName
                    ? <h5 className={style.userName}>{props.userName}</h5>
                    : null
                }
                <p>{props.message}</p>
            </div>
        </div>
    )
}

