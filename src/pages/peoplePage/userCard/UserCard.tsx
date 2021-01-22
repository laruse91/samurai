import React from 'react'
import style from './UserCard.module.css'
import {NavLink} from 'react-router-dom'
import {Button} from '../../../components/common/button/Button'
import {TUser} from '../../../types/types'
import {styles} from '../../../styles/styles'
import {Avatar} from 'antd'

type TProps = {
    user: TUser
    follow: (userId: number) => void
    unfollow: (userId: number) => void
    followingInProgress: Array<number>
    location?: string
}

export const UserCard: React.FC<TProps> = (props) => {
    const followingInProgress = props.followingInProgress.some(id => id === props.user.id)
    const follow = () => props.follow(props.user.id)
    const unfollow = () => props.unfollow(props.user.id)
    const path = `/profile/${props.user.id}`

    return (
        <div className={style.userBlock}>
            <div className={style.user}>
                <NavLink to={path}>
                    {props.user.photos.large
                        ? <Avatar size={100} src={props.user.photos.large}/>
                        : <Avatar size={100} gap={2}
                                  style={styles.avatar}>{props.user.name ? props.user.name.charAt(0).toUpperCase() : 'User'}</Avatar>
                    }
                </NavLink>
                <div className={style.btnBlock}>
                    {!props.user.followed
                        ? <Button
                            button={'Follow'}
                            disabled={followingInProgress}
                            onClick={follow}
                        />
                        : <Button
                            button={'Unfollow'}
                            disabled={followingInProgress}
                            onClick={unfollow}
                        />
                    }
                </div>
            </div>
            <div className={style.description}>
                <NavLink to={path}>
                    <h3 className={style.userName}>{props.user.name}</h3>
                </NavLink>
                <p className={style.location}>{!props.user.location ? 'Russia, Moscow' : props.user.location}</p>
                <p className={style.status}>{props.user.status ? props.user.status : 'React developer'}</p>
            </div>
        </div>
    )
}