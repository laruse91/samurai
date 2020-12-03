import React from 'react';
import style from './UserPhoto.module.css'
import defaultUserPhoto from '../../../assets/img/defaultUserPhoto.jpg'

const UserPhoto = (props) => {
    return (
        <div className={style.userPhoto}>
            <img src={props.photo != null ? props.photo : defaultUserPhoto }
                 alt="ico"/>
        </div>
    )
}

export default UserPhoto;