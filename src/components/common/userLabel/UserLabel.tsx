import React from 'react';
import style from './UserLabel.module.css'
import UserPhoto from "../userPhoto/UserPhoto";
import {NavLink} from "react-router-dom";

type TProps = {
    id: number
    photo: string | null
    name: string | null
    info?: string | null
}

const UserLabel: React.FC<TProps> = (props) => {
    const path = `/profile/${props.id}`
    return (
        <div className={style.userCard}>
            <NavLink to={path} className={style.userCard}>
                <UserPhoto photo={props.photo}/>
                <div className={style.userDesc}>
                    <h4 className={style.userName}>{props.name}</h4>
                    <span className={style.info}>{props.info != null ? props.info : 'information'}</span>
                </div>
            </NavLink>
        </div>
    )
}

export default UserLabel;