import React from 'react'
import style from './Auth.module.css'
import {Link} from 'react-router-dom'
import {useDispatch, useSelector} from 'react-redux'
import {selectAuthorizedUser, selectIsAuth} from '../../redux/selectors'
import {logout} from '../../redux/auth-reducer'
import {styles} from '../../styles/styles'
import {Avatar} from 'antd'
import {UserOutlined} from '@ant-design/icons'

export const Auth: React.FC = () => {

//useSelectorHooks
    const isAuth = useSelector(selectIsAuth)
    let authorizedUser = useSelector(selectAuthorizedUser)
//useDispatchHook
    const dispatch = useDispatch()

    const logoutUser = () => dispatch(logout())

    const authPath = '/login'
    const profilePath = `/profile/${authorizedUser.userId}`

    return (
        <>
            {isAuth
                ? <div className={style.auth}>
                    <Link to={profilePath} className={style.login}>
                        <div className={style.userPhoto}>
                            {authorizedUser.userPhoto
                                // @ts-ignore
                                ? <Avatar size={60} src={authorizedUser.userPhoto}/>
                                // @ts-ignore
                                : <Avatar size={60}
                                          style={styles.avatar}>{authorizedUser.userName ? authorizedUser.userName.charAt(0).toUpperCase() : 'User'}</Avatar>
                            }
                        </div>
                        <h4 className={style.userName}>{authorizedUser.userName}</h4>
                    </Link>
                    <p onClick={logoutUser} className={style.logOut}>Log out</p>
                </div>

                : <Link to={authPath} className={style.sign}>
                    <div>
                        <span className={style.signIn}>Sign in</span>
                        <UserOutlined className={style.icon}/>
                        <div className={style.line}></div>
                    </div>
                </Link>
            }
        </>
    )
}
