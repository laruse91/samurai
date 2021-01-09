import React from 'react'
import style from './MessageCard.module.css'
import UserPhoto from '../../../assets/img/defaultUserPhoto.jpg'

type TProps = {
    userId: number
    photo: string | null
    message: string
    userName?: string
}

export const MessageCard: React.FC<TProps> = (props) => {

        return (
            <div className={style.messageCard}>
                <div className={style.user}>
                    {props.photo
                        ? <img src={props.photo} alt='ico'/>
                        : <img src={UserPhoto} alt='ico'/>
                    }
                    {props.userName
                        ? props.userName
                        : ''
                    }
                    <span>6:52</span>
                </div>
                <div className={style.content}>
                    <p className={style.message}>{props.message}</p>
                </div>
            </div>
        )
    }

