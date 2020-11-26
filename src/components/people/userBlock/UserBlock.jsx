import React from 'react';
import style from './UserBlock.module.css';
import {NavLink} from 'react-router-dom';
import defaultUserPhoto from "../../../assets/img/defaultUserPhoto.jpg";
import {usersAPI as userAPI} from "../../../api/api";

const UserBlock = (props) => {

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
                        ? <button className={style.btn}
                                  disabled={props.followingInProgress.some(id => id === props.user.id)}
                                  onClick={() => {
                                      props.toggleIsFollowing(true, props.user.id)
                                      userAPI.unfollow(props.user.id)
                                          .then(data => {
                                              if (data.resultCode === 0) {
                                                  props.unfollow(props.user.id)
                                              }
                                              props.toggleIsFollowing(false, props.user.id)
                                          })
                                  }
                                  }>Follow</button>
                        : <button className={style.btn}
                                  disabled={props.followingInProgress.some(id => id === props.user.id)}
                                  onClick={() => {
                            props.toggleIsFollowing(true, props.user.id)
                            userAPI.follow(props.user.id)
                                .then(data => {
                                    if (data.resultCode === 0) {
                                        props.follow(props.user.id)
                                    }
                                    props.toggleIsFollowing(false, props.user.id)
                                })
                        }
                        }>Unfollow</button>
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