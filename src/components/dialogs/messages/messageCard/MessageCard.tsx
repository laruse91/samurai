import React from 'react'
import style from './MessageCard.module.css'

type TProps = {
    id: number
    message: string
}

const MessageCard =(props: TProps)=> {

        return (
            <div className={style.messageCard}>
                <div className={style.user}>
                    <img src="#" alt="ico"/>
                    <span>6:52</span>
                </div>
                <div className={style.content}>
                    <p className={style.message}>{props.message}</p>
                </div>
            </div>
        )
}

export default MessageCard