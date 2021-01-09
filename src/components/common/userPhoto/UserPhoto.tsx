import React from 'react'
import style from './UserPhoto.module.css'
import defaultUserPhoto from '../../../assets/img/defaultUserPhoto.jpg'

type TProps = {
    photo: string | null
}

export const UserPhoto = (props: TProps) => {
    return (
        <div className={style.userPhoto}>
            <img src={props.photo != null ? props.photo : defaultUserPhoto}
                 alt='ico'/>
        </div>
    )
}
