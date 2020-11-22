import React from 'react'
import style from './UserBlock.module.css'
import {NavLink} from 'react-router-dom'

const UserBlock = (props) => {
    const follow = () => props.follow(props.id);
    const unfollow = () => props.unfollow(props.id);
    const path = `/profile/${props.id}`

    return (
        <div className={style.userBlock}>
            <div className={style.user}>
                <NavLink to={path}>
                    <img src={props.photo} alt="ico"/>
                </NavLink>
                <div className={style.btnBlock}>
                    {props.followed
                        ? <button onClick={unfollow} className={style.btn}>Follow</button>
                        : <button onClick={follow} className={style.btn}>Unfollow</button>
                    }
                </div>
            </div>
            <div className={style.userDesc}>
                <NavLink to={path}>
                    <h3 className={style.userName}>{props.name} {props.lastName}</h3>
                </NavLink>
                <p className={style.location}>{props.location.city} {props.location.country}</p>
                <p className={style.status}>{props.status}</p>
            </div>
        </div>
    )
}

export default UserBlock