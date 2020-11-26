import React from 'react';
import style from './UserLabel.module.css'
import UserPhoto from "../UserPhoto/UserPhoto";
import {NavLink} from "react-router-dom";

const UserLabel = (props) => {
    const path = `/profile/${props.id}`
    return (
        <div className={style.userCard}>
            <NavLink to={path} className={style.userCard}>
                <UserPhoto photo={props.photo}/>
                <div className={style.userDesc}>
                    <h4 className={style.userName}>{props.name} {props.lastName}</h4>
                    <span className={style.info}>{props.info != null ? props.info : 'information'}</span>
                </div>
            </NavLink>
        </div>
    )
}

export default UserLabel;