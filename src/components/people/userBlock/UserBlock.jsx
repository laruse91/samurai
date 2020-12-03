import React from 'react';
import style from './UserBlock.module.css';
import {NavLink} from 'react-router-dom';
import defaultUserPhoto from "../../../assets/img/defaultUserPhoto.jpg";
import Button from "../../common/button/Button";

const UserBlock = (props) => {
const followingInProgress = props.followingInProgress.some(id => id === props.user.id)
    const follow = () => props.follow(props.user.id)
        const unfollow = () => props.unfollow(props.user.id)
    const path = `/profile/${props.user.id}`
    return (
        <div className={style.userBlock}>
            <div className={style.user}>
                <NavLink to={path}>
                    <img src={props.user.photos.large != null ? props.user.photos.large : defaultUserPhoto}
                         alt="ico"/>
                </NavLink>
                <div className={style.btnBlock}>
                    {props.user.followed
                        ? <Button
                            button={'Follow'}
                            disabled={followingInProgress}
                            onClick={unfollow}
                                />
                        : <Button
                            button={'Unfollow'}
                            disabled={followingInProgress}
                            onClick={follow}
                        />
                        // <button className={style.btn}
                        //           disabled={props.followingInProgress.some(id => id === props.user.id)}
                        //           onClick={() => props.unfollow(props.user.id)}>Follow</button>
                        // <button className={style.btn}
                        //           disabled={props.followingInProgress.some(id => id === props.user.id)}
                        //           onClick={() => props.follow(props.user.id)}>Unfollow</button>
                    }
                </div>
            </div>
            <div className={style.userDesc}>
                <NavLink to={path}>
                    <h3 className={style.userName}>{props.user.name} {props.user.lastName}</h3>
                </NavLink>
                <p className={style.location}>{!props.user.location ? 'city' : props.user.location.city}</p>
                <p className={style.status}>{props.user.status}</p>
            </div>
        </div>
    )
}

export default UserBlock